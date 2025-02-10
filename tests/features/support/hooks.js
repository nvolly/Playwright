const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber') 

BeforeAll(async function() {
    // Any setup that should happen once before all tests
}) 

AfterAll(async function() {
    // Any cleanup that should happen once after all tests
}) 

Before(async function() {
    await this.setup() 
}) 

After(async function() {
    await this.teardown() 
}) 
