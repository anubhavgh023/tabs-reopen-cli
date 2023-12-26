# Tabs Reopen CLI

Tabs Reopen CLI is a simple Node.js command-line application that helps you reopen multiple tabs in your browser if you accidentally closed them.

You can reopen a single tab by 'Ctrl+Shift+T'

But, what if you want to reopen 10,20 or 30 tabs in that specific order ? 

Here comes this nodejs-cli tool, Just specify the number of tabs to reopen & the browser, it will reopen the tabs.

## Features

- Reopen a specified number of tabs using 'Ctrl+Shift+T' of the selected browser

## Prerequisites

Make sure you have the following installed on your system:

- `wmctrl`: A command-line tool to interact with an EWMH/NetWM-compatible X Window Manager.
- `xdotool`: A command-line tool to simulate keyboard input and mouse activity.
     ```bash
     sudo apt install wmctrl,xdotool

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tabs-reopen-cli.git
   cd tabs-reopen-cli

