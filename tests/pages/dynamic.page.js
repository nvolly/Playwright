class DynamicPage {
    constructor(page) {
        this.page = page
        this.addElementButton = page.locator('button[onclick="addElement()"]') 
        this.deleteButtons = page.locator('.added-manually') 
        
        // Dynamic Controls
        this.enableButton = page.locator('button[onclick*="enable"]') 
        this.disableButton = page.locator('button[onclick*="disable"]') 
        this.removeButton = page.locator('button[onclick*="remove"]') 
        this.addButton = page.locator('button[onclick*="add"]') 
        this.checkbox = page.locator('#checkbox') 
        this.input = page.locator('input[type="text"]') 
        this.message = page.locator('#message') 
        
        // Dynamic Loading
        this.startButton = page.locator('button:has-text("Start")') 
        this.loadingIndicator = page.locator('#loading') 
        this.finishText = page.locator('#finish') 
    }

    // Add/Remove Elements
    async gotoAddRemove() {
        await this.page.goto('/add_remove_elements/') 
    }

    async addElement() {
        await this.addElementButton.click() 
    }

    async getDeleteButtonCount() {
        return await this.deleteButtons.count() 
    }

    async deleteElement(index) {
        const buttons = await this.deleteButtons.all() 
        if (buttons[index]) {
            await buttons[index].click() 
        }
    }

    // Dynamic Controls
    async gotoDynamicControls() {
        await this.page.goto('/dynamic_controls') 
    }

    async toggleCheckbox() {
        await this.checkbox.click() 
    }

    async removeCheckbox() {
        await this.removeButton.click() 
        await this.message.waitFor() 
    }

    async addCheckbox() {
        await this.addButton.click() 
        await this.message.waitFor() 
    }

    async enableInput() {
        await this.enableButton.click() 
        await this.message.waitFor() 
    }

    async disableInput() {
        await this.disableButton.click() 
        await this.message.waitFor() 
    }

    async typeInInput(text) {
        await this.input.fill(text) 
    }

    // Dynamic Loading
    async gotoDynamicLoading(example = '1') {
        await this.page.goto(`/dynamic_loading/${example}`) 
    }

    async startLoading() {
        await this.startButton.click() 
        await this.loadingIndicator.waitFor() 
        await this.loadingIndicator.waitFor({ state: 'hidden' }) 
        await this.finishText.waitFor() 
    }

    async getFinishText() {
        return await this.finishText.textContent() 
    }
}

module.exports = { DynamicPage } 
