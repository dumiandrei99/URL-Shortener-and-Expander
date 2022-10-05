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

const expandURL = (url, setSlugError, setShowSlugError, setSuccessMessage, setShowSuccessMessage, setShowExpandedURL, setExpandedURL, callback) => {
    axios({
        method: "post",
        url: HOST + '/api/expand-url',
        data: url,
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

        setSuccessMessage('')
        setShowSuccessMessage(false)
        setExpandedURL('')
        setShowExpandedURL(false)
    });
}

const analytics = (callback) => {
    axios({
        method: "get",
        url: HOST + '/api/analytics',
    })
    .then(callback)
    .catch((error) => {
        console.log(error)
    })
}

export {
    shortenURL,
    expandURL,
    analytics
}
