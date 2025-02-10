module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/features/step_definitions/*.js', 'tests/features/support/*.js'],
        format: ['@cucumber/pretty-formatter'],
        formatOptions: { snippetInterface: 'async-await' }
    }
} 
