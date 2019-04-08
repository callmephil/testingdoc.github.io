import axios from 'axios';
import * as auth0Client from '../auth/Auth';
import {API_URL} from "../constants";
// Import ENV here.

const onGet = async (url) => {
    const answer = await request(url);
    if (!answer.success)
        return;

    return answer.result;
}

const onGetList = async (url, props) => {
    const answer = await request(url, {
        params: {
            ...props,
        }
    });
    if (!answer.success)
        return;

    return answer.result;
}

const onDelete = async (url) => {
    const answer = await request(url);
    if (!answer.success || !answer.result)
        return;
}

// onCreate
// onUpdate

const request = async (path, options) => {
    try {
        if (options && options.data) {
            const data = new FormData();
            Object.keys(options.data).forEach(key => {
                const value = options.data[key]
                if (Array.isArray(value) || value instanceof FileList) {
                    let i = 0
                    while (i < value.length) {
                        data.append(`${key}[${i}]`, value[i++]);
                    }
                } else if (value !== null && typeof value !== 'undefined') {
                    data.append(key, value);
                }
            })
            options.data = data;
        }
        const config = {
            method: "get", 
            url: `${API_URL}/${path}`,
            headers: {
                Authorization: `Bearer ${auth0Client.getIdToken()}`,
                'Content-Type': options && options.data ? 'multipart/form-data' : undefined
            },
            ...options
        }
        const response  = await axios(config);
        const answer = response.data;
        if (answer.success)
        {

        } else
            console.log(`client error : ${answer.message}`);

        return answer;
    } catch (err) {
        console.log(`client error : ${err.message}`);
        return { success: false}
    }
};

export {
    request,
    onGet,
    onGetList,
    onDelete
}