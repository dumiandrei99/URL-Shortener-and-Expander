import React, {useState} from 'react';
import '../App.css';
import * as API from '../api/api'

function Customizer() {
    const [oldSlug, setOldSlug] = useState('')
    const [newSlug, setNewSlug] = useState('')
    const [oldSlugError, setOldSlugError] = useState('')
    const [newSlugError, setNewSlugError] = useState('')
    const [showOldSlugError, setShowOldSlugError] = useState(false)
    const [showNewSlugError, setShowNewSlugError] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [shortenedURL, setShortenedURL] = useState('')
    const [showShortenedURL, setShowShortenedURL] = useState(false)

    const onShorten = () => {
        const oldAndNewSlug = {
            old_slug: oldSlug,
            new_slug: newSlug
        }

        API.customizeURL(oldAndNewSlug, setOldSlugError, setShowOldSlugError, setNewSlugError, setShowNewSlugError, setSuccessMessage, setShowSuccessMessage, setShowShortenedURL, setShortenedURL, (response) => {
            setOldSlugError(false)
            setNewSlugError(false)
            setShowOldSlugError(false)
            setShowNewSlugError(false)
            setOldSlugError('')
            setNewSlugError('')
            setOldSlug('')
            setNewSlug('')

            setShowSuccessMessage(true)
            setShowShortenedURL(true)
            setSuccessMessage(response.data.success.message)
            setShortenedURL(response.data.success.url)
        })
    }

    return (
        <div>
            <div className="input-and-error-wrapper">
                <input placeholder="Enter the slug you want to customize..." value={oldSlug} onChange={(e) => setOldSlug(e.target.value)}/>
                {showOldSlugError && <div className="input-error">{oldSlugError}</div>}
            </div>

            <div className="input-and-error-wrapper"> 
                <input placeholder="Enter your customized slug..." value={newSlug} onChange={(e) => setNewSlug(e.target.value)}/>
                {showNewSlugError && <div className="input-error">{newSlugError}</div>}
            </div>

            <div className="button-shortener-or-expander-wrapper">
                <button className="shortener-or-expander" onClick={onShorten}> Customize URL </button>
                {showSuccessMessage && <div className="success">{successMessage}</div>}
            </div>

            {showShortenedURL && 
                <div className="shortened-or-expanded-url">
                    <label for="shortened-url">Your customized URL: </label>
                    <a id='shortened-url' href={shortenedURL}>{shortenedURL}</a>
                </div>
            }

        </div>
    );
}

export default Customizer;