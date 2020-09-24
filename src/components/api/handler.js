import axios from "axios";

export class APIHandler {
    constructor(APIPrefix) {
        if (!process.env.REACT_APP_BACKEND_URL || !APIPrefix)
            throw new Error(
                "fournir API prefix + URL de base pour effectuer des appels AJAX"
            );

        this.instance = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix,
        });
    }

    createOne(payload) {
        return this.instance.post("/", payload);
    }

    getAll(type) {
        return this.instance.get("/", {
            params: {
                mediaType: type
            }
        }); // retourne une Promesse
        // return axios.get("http://localhost:8888/api/products")
    }

    getById(id) {
        return this.instance.get("/" + id);
        // return axios.get("http://localhost:8888/api/products/${id}")
    }

    postOne(data) {
        return this.instance.post("/", data);
    }

    patchOne(id, data) {
        return this.instance.patch("/" + id, data);
    }

    deleteOne(id) {
        return this.instance.delete("/" + id);
    }

}