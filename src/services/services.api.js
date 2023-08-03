/**
 * here you have all the global methods to fetch data from back end
 * use axios or fetch
 * you can add any other method to this file (PUT, DELETE..)
 * consume the response by converting it into a json object in the repository --> .then(response => response.json())
 */

import axios from "axios";

export const get = async (endpoint, data) => {
    return await axios.get(endpoint, {
        params: data,
    });
};

export const post = async (endpoint, data) => {
    return await axios.post(endpoint, data);
};