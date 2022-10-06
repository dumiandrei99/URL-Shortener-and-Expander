import url from './host'
import axios from 'axios'
const HOST = url.getHost()


const shortenURL = (url, setUrlError, setShowUrlError, setSuccessMessage, setShowSuccessMessage, setShowShortenedURL, setShortenedURL, callback) => {
    axios({
        method: "post",
        url: HOST + '/api/shorten-url',
        data: url,
        headers: { "Content-Type": "application/json" },
      })
    .then(callback)
    .catch(function (error) {

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

const expandURL = (slug, setSlugError, setShowSlugError, setSuccessMessage, setShowSuccessMessage, setShowExpandedURL, setExpandedURL, callback) => {
    axios({
        method: "post",
        url: HOST + '/api/expand-url',
        data: slug,
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

const customizeURL = (oldAndNewSlug, setOldSlugError, setShowOldSlugError, setNewSlugError, setShowNewSlugError, setSuccessMessage, setShowSuccessMessage, setShowShortenedURL, setShortenedURL, callback) => {
    axios({
        method: "post",
        url: HOST + '/api/customize-slug',
        data: oldAndNewSlug,
        headers: { "Content-Type": "application/json" },
      })
    .then(callback)
    .catch(function (error) {

        if (error.response.data.errors.old_slug) {
            setShowOldSlugError(true)
            setOldSlugError(error.response.data.errors.old_slug)
        } else {
            setShowOldSlugError(false)
            setOldSlugError('')
        }

        if (error.response.data.errors.new_slug) {
            setShowNewSlugError(true)
            setNewSlugError(error.response.data.errors.new_slug)
        } else {
            setShowNewSlugError(false)
            setNewSlugError('')
        }

        setSuccessMessage('')
        setShowSuccessMessage(false)
        setShortenedURL('')
        setShowShortenedURL(false)
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
    customizeURL,
    analytics
}
