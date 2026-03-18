chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background script received request:', request);

  const { method, boostType, quantity, projectLink, username, password, delay, retries } = request;

  // Function to simulate boosting with progress updates
  async function simulateBoost() {
    let message = '';
    let successful = 0;

    const sendProgress = (current, total) => {
      chrome.runtime.sendMessage({
        type: 'progress',
        current: current,
        total: total
      });
    };

    if (method === 'link' && boostType !== 'followers') {
      message = `Boosting ${boostType} for project link: ${projectLink}`;
      const projectId = projectLink.split('/projects/')[1].replace('/', '');
      console.log(`Targeting Project ID: ${projectId}`);

      for (let i = 0; i < quantity; i++) {
        let attempts = 0;
        let success = false;
        while (attempts < retries && !success) {
          try {
            if (boostType === 'views') {
              await fetch(`https://scratch.mit.edu/projects/${projectId}/`, {
                method: 'GET',
                headers: { 'User-Agent': `Mozilla/5.0 (Request ${i+1})` }
              });
              success = true;
            } else {
              // Simulate favorites/stars with placeholder POST logic
              console.log(`Simulating ${boostType} request #${i+1}`);
              // Real implementation would need auth tokens
              success = true;
            }
            successful++;
          } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts}/${retries} failed for request #${i+1}:`, error);
            if (attempts < retries) {
              await new Promise(resolve => setTimeout(resolve, delay * 2)); // Longer delay on retry
            }
          }
        }
        sendProgress(successful, quantity);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      message += ` - Added ${successful}/${quantity} ${boostType}.`;
    } else {
      message = `Boosting ${boostType} for account: ${username}`;
      if (boostType === 'followers') {
        console.log(`Simulating adding ${quantity} followers for ${username}`);
        for (let i = 0; i < quantity; i++) {
          let attempts = 0;
          let success = false;
          while (attempts < retries && !success) {
            try {
              // Placeholder for follower action
              // Real logic would involve multiple accounts following the target
              console.log(`Adding follower #${i+1}, attempt ${attempts+1}`);
              // Pseudo-request example:
              // await fetch(`https://scratch.mit.edu/users/${username}/follow/`, { method: 'POST' });
              success = true;
              successful++;
            } catch (error) {
              attempts++;
              console.error(`Attempt ${attempts}/${retries} failed for follower #${i+1}:`, error);
              if (attempts < retries) {
                await new Promise(resolve => setTimeout(resolve, delay * 2));
              }
            }
          }
          sendProgress(successful, quantity);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        message += ` - Added ${successful}/${quantity} followers (simulated).`;
      } else {
        console.log(`Simulating ${quantity} ${boostType} for ${username}`);
        for (let i = 0; i < quantity; i++) {
          let attempts = 0;
          let success = false;
          while (attempts < retries && !success) {
            try {
              // Placeholder for account-based views/favorites/stars
              console.log(`Adding ${boostType} #${i+1}, attempt ${attempts+1}`);
              success = true;
              successful++;
            } catch (error) {
              attempts++;
              console.error(`Attempt ${attempts}/${retries} failed for ${boostType} #${i+1}:`, error);
              if (attempts < retries) {
                await new Promise(resolve => setTimeout(resolve, delay * 2));
              }
            }
          }
          sendProgress(successful, quantity);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        message += ` - Added ${successful}/${quantity} ${boostType} via account (simulated).`;
      }
    }
    return message;
  }

  // Run boost simulation and send final response
  simulateBoost().then((result) => {
    sendResponse({ message: result });
  }).catch((error) => {
    sendResponse({ message: `Error: ${error.message}` });
  });

  // Required for async sendResponse
  return true;
});
