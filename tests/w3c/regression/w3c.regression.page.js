class W3CPage {
    constructor(page) {
        this.page = page
        this.url = 'https://www.w3.org/'
        this.searchInput = 'input[name="query"]'
        this.searchButton = 'button[type="submit"]'
        this.w3cSymbolLogo = 'img[src="https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg"]'
    }

    async goto() {
        await this.page.goto(this.url)
    }

    async clickElement(selector) {
        await this.page.click(selector)
    }

    async fillSearch(query) {
        await this.page.fill(this.searchInput, query)
        await this.page.click(this.searchButton)
    }

    async getTitle() {
        return await this.page.title()
    }

    async getMainHeader() {
        const header = await this.page.$('h1')
        return await header.innerText()
    }

    async isSearchInputVisible() {
        return await this.page.isVisible(this.searchInput)
    }
}

module.exports = W3CPage