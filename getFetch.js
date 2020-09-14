var fetchGet = (function mainGetFunction() {
    'use-strict'


    /**
     * Get Request that recievs params as objects
     * This basically uses fetch , make sure you have that
     * 
     * 
     * @param {String} url url with out params
     * @param {Object} options params with key and value pair
     * @param {Object} headers objects to put as header for your request
     */

    function Get(url, options = {}, headers = {}) {
        return fetch(optionsToUrl(url , options), {
            method: 'GET',
            headers: headers
        });
    }

    /**
     * Put Request that recievs params as objects
     * This basically uses fetch , make sure you have that
     * 
     * 
     * @param {String} url url with out params
     * @param {Object} options params with key and value pair
     * @param {Object} headers objects to put as header for your request
     */

    function Put(url, options = {}, headers = {}) {
        return fetch(optionsToUrl(url, options), {
            method: 'PUT',
            headers: headers
        });
    }


    /**
     * Put Request that recievs params as objects
     * This basically uses fetch , make sure you have that
     * 
     * 
     * @param {String} url url with out params
     * @param {Object} options params with key and value pair
     * @param {Object} headers objects to put as header for your request
     */

    function Post(url, options = {}, headers = {}) {
        return fetch(url, {
            method: 'PUT',
            headers: headers ,
            body: JSON.stringify(options)
        });
    }





    function optionsToUrl(url, options) {

        var optionsKey = Object.keys(options);
        var optionsKeyLenght = optionsKey.length;

        for (var i = 0; i < optionsKeyLenght; i++) {
            if (i == 0) {
                url += `?${encodeURIComponent(optionsKeyLenght[i])}=${encodeURIComponent(options[optionsKeyLenght[i]])}`;
            }
            url += `&${encodeURIComponent(optionsKeyLenght[i])}=${encodeURIComponent(options[optionsKeyLenght[i]])}`;
        }
        return url;
    }
    return {Get,Put,Post};
})();

exports.default = fetchGet;

