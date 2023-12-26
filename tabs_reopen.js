const { execSync } = require('child_process');
const { prompt } = require('inquirer');

function activateBrowserWindow(browserName) {
    try {
        // Activating specified browser window using wmctrl
        execSync(`wmctrl -a "${browserName}"`);

        // Adding a short delay to ensure the window activation
        execSync('sleep 0.5');

        console.log(`Activated ${browserName} window.`);
    } catch (error) {
        console.error(`Error activating ${browserName} window: ${error.message}`);
    }
}

function reopenBrowserTabs(numTabs) {
    // Sending 'Ctrl+Shift+T' to the active window using xdotool
    for (let i = 0; i < numTabs; i++) {
        try {
            execSync('xdotool key --clearmodifiers ctrl+shift+t');

            // Adding short delay between each command to ensure proper execution
            execSync('sleep 1');
        } catch (error) {
            console.error(`Error reopening tabs: ${error.message}`);
        }
    }
    console.log(`Reopened ${numTabs} tabs.`);
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
        message: 'Enter the number of tabs to reopen :',
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
