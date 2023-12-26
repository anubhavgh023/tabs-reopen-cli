# Tabs Reopen CLI

Tabs Reopen CLI is a simple Node.js command-line application that helps you reopen multiple tabs in your browser if you accidentally closed them.

You can reopen a single tab by 'Ctrl+Shift+T'

But, what if you want to reopen 10,20 or 30 tabs in that specific order ? 

Here comes this nodejs-cli tool, Just specify the number of tabs to reopen & the browser, it will reopen the tabs.

## Features

- Reopen a specified number of tabs using 'Ctrl+Shift+T' of the selected browser

## Prerequisites

Make sure you have the following installed on your system:
- **Node.js:** Ensure you have Node.js installed.
  - [How to Install Node.js on Ubuntu – Node Linux Installation Guide](https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu)
  - [How to Install Node.js and npm on Windows](https://www.freecodecamp.org/news/how-to-install-node-js-and-npm-on-windows-2/)
- `wmctrl`: A command-line tool to interact with an EWMH/NetWM-compatible X Window Manager.
- `xdotool`: A command-line tool to simulate keyboard input and mouse activity.
  
  ```bash
  sudo apt install wmctrl xdotool
  ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anubhavgh023/tabs-reopen-cli.git
   cd tabs-reopen-cli
   ```
2. Install dependencies:

   ```bash
   npm i
   ```

## Usage

Run the app with the following command:

   ```bash
   node tabs_reopen.js
   ```

## Supported Browsers
-  Google Chrome
-  Mozilla Firefox
-  Brave

## Contribution

If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.
