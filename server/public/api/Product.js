import BaseApi from './BaseApi'
import $ from 'jquery'

class ApiProduct extends BaseApi {
    constructor() {
        super();

        this.apiExtention = 'product/'
    }

    fetch(id) {
        return this.get(this.apiExtention, {id: id});
    }
}

export default ApiProduct;