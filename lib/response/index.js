/**
 * @copyright 2017 InspiringApps
 * @link http://www.inspiringapps.com
 *
 * Module that houses strings and methods for HTTP responses back to the integration
 * response of the AWS API Gateway.
 */
'use strict';

// Module exports
module.exports = {
    // Response messages (string management)
    notAuthorized:         'Not authorized',
    invalidCredentials:    'Invalid credentials',
    invalidRequestBody:    'Invalid request object',
    invalidSearchParams:   'Invalid search parameters',
    invalidUserId:         'Invalid user ID',
    invalidMobileNumber:   'Invalid mobile number',
    mobileNumberInUse:     'Mobile number already in use',
    emailInUse:            'Email already in use',
    userNameInUse:         'Username already in use',
    userDeviceInUse:       'User device already in use',
    activationCodeInvalid: 'The activation code is invalid',
    activationCodeExpired: 'The activation code has expired',
    userNotFound:          'User not found',
    noRecordsFound:        'No record(s) found',

    /**
     * Construct the common response headers. Accepts an optional object
     * that can be used to add custom headers to the response.
     * @param  {Object} [addHeaders]
     * @return {Object}
     */
    commonHeaders: function (addHeaders) {
        var headers = {};

        // Set common headers
        headers['Access-Control-Allow-Origin'] = '*';

        // Include additional headers
        if (typeof addHeaders === 'object') {
            Object.keys(addHeaders).forEach(function (header) {
                headers[header] = addHeaders[header];
            });
        }

        return headers;
    },

    /**
     * Helper method to build server APIG/HTTP responses.
     * @param  {Number} statusCode
     * @param  {Object} body
     * @return {Object} response
     */
    responseObject: function (statusCode, body, addHeaders = {}) {
        var response = {
                statusCode: statusCode,
                headers: this.commonHeaders(addHeaders),
                body: JSON.stringify(body)
            };

        return response;
    },

};
