import url from './host'
import axios from 'axios'
const HOST = url.getHost()


const shortenURL = (url, callback) => {
    axios({
        method: "post",
        url: HOST + '/shorten-url',
        data: url,
        headers: { "Content-Type": "application/json" },
      })
    .then(callback)
    .catch(function (response) {
        console.log(response);
    });
}

const expandURL = (url, callback) => {
    axios({
        method: "post",
        url: HOST + '/expand-url',
        data: url,
        headers: { "Content-Type": "application/json" },
      })
    .then(callback)
    .catch(function (response) {
        console.log(response);
    });
}

export {
    shortenURL,
    expandURL
}
