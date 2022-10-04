import React, {useState} from 'react';
import '../App.css';
import * as API from '../api/api'

function Shortener() {
    const [URL, setURL] = useState('')
    const [slug, setSlug] = useState('')
    const [urlError, setUrlError] = useState('')
    const [slugError, setSlugError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showUrlError, setShowUrlError] = useState(false)
    const [showSlugError, setShowSlugError] = useState(false)
    const [shortenedURL, setShortenedURL] = useState('')
    const [showShortenedURL, setShowShortenedURL] = useState(false)

    const onShorten = () => {
        const slugAndURL = {
            expanded_url: URL,
            slug: slug
        }

        API.shortenURL(slugAndURL, setUrlError, setShowUrlError, setSlugError, setShowSlugError, setSuccessMessage, setShowSuccessMessage, setShowShortenedURL, setShortenedURL, (response) => {
            setShowSlugError(false)
            setShowUrlError(false)
            setSlugError('')
            setUrlError('')
            setURL('')
            setSlug('')

            setShowSuccessMessage(true)
            setShowShortenedURL(true)
            setSuccessMessage(response.data.success.message)
            setShortenedURL(response.data.success.url)
        })
    }

    return (
        <div>
            <div className="input-and-error-wrapper">
                <input placeholder="Enter the full URL you want to shorten..." value={URL} onChange={(e) => setURL(e.target.value)}/>
                {showUrlError && <div className="input-error">{urlError}</div>}
            </div>

            <div className="input-and-error-wrapper"> 
                <input placeholder="Enter a slug..." value={slug} onChange={(e) => setSlug(e.target.value)}/>
                {showSlugError && <div className="input-error">{slugError}</div>}
            </div>

            <div className="button-shortener-or-expander-wrapper">
                <button className="shortener-or-expander" onClick={onShorten}> Shorten URL </button>
                {showSuccessMessage && <div className="success">{successMessage}</div>}
            </div>

            {showShortenedURL && 
                <div className="shortened-or-expanded-url">
                    <label for="shortened-url">Your shortened URL: </label>
                    <a id='shortened-url' href={shortenedURL}>{shortenedURL}</a>
                </div>
            }

        </div>
    );
}

export default Shortener;