import url from './host'
import axios from 'axios'
const HOST = url.getHost()


const shortenURL = (slugAndURL, setUrlError, setShowUrlError, setSlugError, setShowSlugError, setSuccessMessage, setShowSuccessMessage, setShowShortenedURL, setShortenedURL, callback) => {
    axios({
        method: "post",
        url: HOST + '/api/shorten-url',
        data: slugAndURL,
        headers: { "Content-Type": "application/json" },
      })
    .then(callback)
    .catch(function (error) {
        if (error.response.data.errors.slug) {
            setShowSlugError(true)
            setSlugError(error.response.data.errors.slug)
        } else {
            setShowSlugError(false)
            setSlugError('')
        }
        if (error.response.data.errors.expanded_url) {
            setShowUrlError(true)
            setUrlError(error.response.data.errors.expanded_url)
        } else {
            setShowUrlError(false)
            setUrlError('')
        }

        setSuccessMessage('')
        setShowSuccessMessage(false)
        setShortenedURL('')
        setShowShortenedURL(false)
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
