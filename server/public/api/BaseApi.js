import $ from 'jquery'

class BaseApi {
    constructor() {
        this.baseUrl = 'api/';
    }

    post(url, data) {
        var config = {
            url: this.baseUrl + url,
            type: 'POST',
            data: data
        };

        return $.ajax(config);
    }

    get(url, params) {
        var config = {
            url: this.baseUrl + url,
            type: 'GET',
            data: params
        };

        return $.ajax(config);
    }
}

export default BaseApi;