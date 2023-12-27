const { execSync } = require('child_process');
const { prompt } = require('inquirer');

function activateBrowserWindow(browserName) {
    try {
        if (process.platform === 'win32') {
            // On Windows, activate the browser window using PowerShell
            execSync(`powershell -command "& { (New-Object -ComObject Shell.Application).Windows() | Where-Object { $_.LocationURL -like '*${browserName}*' } | ForEach-Object { $_.InvokeMember('Invoke', $null, $null, $null) } }"`);
        } else {
            // On Linux, activate the browser window using wmctrl
            execSync(`wmctrl -a "${browserName}"`);

            // Adding a short delay to ensure the window activation
            execSync('sleep 0.5');
        }

        console.log(`Activated ${browserName} window.`);
    } catch (error) {
        console.error(`Error activating ${browserName} window: ${error.message}`);
    }
}

function reopenBrowserTabs(numTabs) {
    // Sending 'Ctrl+Shift+T' to the active window using different commands for Windows and Linux
    try {
        if (process.platform === 'win32') {
            execSync('powershell -c "[System.Windows.Forms.SendKeys]::SendWait(\'^(+t)\')"');
        } else {
            execSync('xdotool key --clearmodifiers ctrl+shift+t');

            // Adding short delay between each command to ensure proper execution
            execSync('sleep 1');
        }

        console.log(`Reopened ${numTabs} tabs.`);
    } catch (error) {
        console.error(`Error reopening tabs: ${error.message}`);
    }
}

async function main() {
    const browsers = ["Google Chrome", "Mozilla Firefox", "Brave"];

    // Prompting the user to choose a browser
    const { selectedBrowser } = await prompt({
        type: 'list',
        name: 'selectedBrowser',
        message: 'Choose a browser:',
        choices: browsers,
    });

    // Prompting the user to enter the number of tabs to reopen
    const { numTabsToReopen } = await prompt({
        type: 'number',
        name: 'numTabsToReopen',
        message: 'Enter the number of tabs to reopen:',
        validate: (input) => {
            const num = parseInt(input);
            return num > 0 ? true : 'Please enter a valid number greater than 0.';
        },
    });

    // Activating the browser window and reopen tabs
    activateBrowserWindow(selectedBrowser);
    reopenBrowserTabs(numTabsToReopen);
}

// Running the main function
main();

