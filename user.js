const fs = require('fs');
module.exports = async function() {
    if (!fs.existsSync('./config.js')) {
        const v3 = require('node-hue-api').v3,
            discovery = v3.discovery,
            hueApi = v3.api;

        const appName = 'node-hue-api';
        const deviceName = 'computer';

        async function discoverBridge() {
            const discoveryResults = await discovery.nupnpSearch();

            if (discoveryResults.length === 0) {
                console.error('Failed to resolve any Hue Bridges');
                return null;
            } else {
                // Ignoring that you could have more than one Hue Bridge on a network as this is unlikely in 99.9% of users situations
                return discoveryResults[0].ipaddress;
            }
        }

        async function discoverAndCreateUser() {
            const ipAddress = await discoverBridge();

            // Create an unauthenticated instance of the Hue API so that we can create a new user
            const unauthenticatedApi = await hueApi.createLocal(ipAddress).connect();

            let createdUser;
            try {
                createdUser = await unauthenticatedApi.users.createUser(appName, deviceName);
                console.log('*******************************************************************************\n');
                console.log('User has been created on the Hue Bridge. The following username can be used to\n' +
                    'authenticate with the Bridge and provide full local access to the Hue Bridge.\n' +
                    'YOU SHOULD TREAT THIS LIKE A PASSWORD\n');
                console.log(`Hue Bridge User: ${createdUser.username}`);
                console.log(`Hue Bridge User Client Key: ${createdUser.clientkey}`);
                console.log('*******************************************************************************\n');
                fs.writeFileSync('./config.js', `
module.exports = {
    address: '${ipAddress}',
    normalMode: {
        user: '${createdUser.username}'
    }
}
                `);

            } catch (err) {
                if (err.getHueErrorType() === 101) {
                    throw 'The Link button on the bridge was not pressed. Please press the Link button and try again.';
                } else {
                    throw `Unexpected Error: ${err.message}`;
                }
            }
        }

        // Invoke the discovery and create user code
        await discoverAndCreateUser();
    }
}