body {
  width: 450px;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s, color 0.3s;
}

.light-theme {
  background-color: #f0f2f5;
  color: #333;
}

.dark-theme {
  background-color: #1e1e1e;
  color: #f0f0f0;
}

.container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

h1 {
  font-size: 20px;
  margin: 0;
}

.theme-btn {
  padding: 5px 10px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.theme-btn:hover {
  background-color: #444;
}

.tab-container {
  display: flex;
  margin-bottom: 15px;
}

.tab {
  flex: 1;
  padding: 10px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.light-theme .tab.active {
  background-color: #4CAF50;
  color: white;
}

.dark-theme .tab.active {
  background-color: #388E3C;
  color: white;
}

.tab:hover:not(.active) {
  background-color: #bbb;
}

.tab-content {
  margin-bottom: 15px;
}

.hidden {
  display: none;
}

.option {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

.light-theme input, .light-theme select {
  background-color: white;
}

.dark-theme input, .dark-theme select {
  background-color: #2c2c2c;
  border-color: #444;
  color: #f0f0f0;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.progress-bar {
  flex: 1;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
}

.progress-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 0%;
  background-color: #4CAF50;
  transition: width 0.5s;
}

.dark-theme .progress-bar {
  background-color: #444;
}

.dark-theme .progress-bar::after {
  background-color: #388E3C;
}

.progress-text {
  font-size: 14px;
  font-weight: bold;
}

.status {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.light-theme .status {
  background-color: #e9ecef;
}

.dark-theme .status {
  background-color: #2c2c2c;
}
