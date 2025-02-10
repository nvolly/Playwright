const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('button[type="submit"]')
        this.errorMessage = page.locator('.flash.error')
        this.successMessage = page.locator('.flash.success')
    }

    async goto() {
        await this.page.goto('/login')
    }

    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async getErrorMessage() {
        await expect(this.errorMessage).toBeVisible()
        return this.errorMessage.textContent()
    }

    async getSuccessMessage() {
        await expect(this.successMessage).toBeVisible()
        return this.successMessage.textContent()
    }
}

module.exports = { LoginPage }
