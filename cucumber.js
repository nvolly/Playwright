module.exports = {
    default: {
        requireModule: ['@cucumber/pretty-formatter'],
        require: ['tests/features/step_definitions/*.js', 'tests/features/support/*.js'],
        format: ['@cucumber/pretty-formatter'],
        formatOptions: { snippetInterface: 'async-await' },
        publishQuiet: true
    }
};
