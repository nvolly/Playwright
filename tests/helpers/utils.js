async function waitForNetworkIdle(page, timeout = 5000) {
}

async function takeScreenshot(page, name) {
    await page.screenshot({ path: `tests/reports/screenshots/${name}.png` }) 
}

function generateRandomEmail() {
    return `test${Math.random().toString(36).substring(7)}@example.com` 
}

function formatDate(date) {
    return date.toISOString().split('T')[0] 
}

async function clearInputField(page, selector) {
    await page.fill(selector, '') 
}

module.exports = {
    waitForNetworkIdle,
    takeScreenshot,
    generateRandomEmail,
    formatDate,
    clearInputField
} 
