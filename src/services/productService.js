import axios from "axios"

export default class ProductService {

    getProducts() {
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductName(productName) {
        return axios.get("http://localhost:8080/api/products/getByProductName?productName")
        //üstteki satırın sonuna =+ productName yazmak gerekiyor. Backend eksik olduğu için yazamıyorum
    }
}
