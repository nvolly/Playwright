const { config } = require('../fixtures/config');

class APIHelper {
    constructor(request) {
        this.request = request;
    }

    async login(username, password) {
        const response = await this.request.post('/login', {
            data: {
                username,
                password
            }
        });
        return response;
    }

    async getAuthToken() {
        const response = await this.login(
            config.users.standard.username,
            config.users.standard.password
        );
        const headers = response.headers();
        return headers['authorization'];
    }

    async makeAuthenticatedRequest(url, options = {}) {
        const token = await this.getAuthToken();
        return this.request.get(url, {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

module.exports = { APIHelper };
