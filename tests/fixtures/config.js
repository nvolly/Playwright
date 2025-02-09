require('dotenv').config();

const defaultConfig = {
    baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
    timeouts: {
        global: 30000,
        navigation: 15000,
        waitFor: 5000
    },
    users: {
        standard: {
            username: process.env.STANDARD_USER || 'tomsmith',
            password: process.env.STANDARD_PASS || 'SuperSecretPassword!'
        },
        admin: {
            username: process.env.ADMIN_USER || 'admin',
            password: process.env.ADMIN_PASS || 'admin123'
        }
    }
};

module.exports = {
    config: defaultConfig
};
