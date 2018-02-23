module.exports = {
    isValidAPIKey: function(APIKey) {
        return APIKey === process.env.API_KEY;
    },

    validateAPIKey: function(context, callback, APIKey) {
        if (!this.isValidAPIKey(APIKey)) {
            throw new Error('Invalid API Key');
        }
    }
};