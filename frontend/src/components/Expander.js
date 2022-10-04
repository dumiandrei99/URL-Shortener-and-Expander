import React, {useState} from 'react';
import '../App.css';
import * as API from '../api/api'

function Expander() {
    const [slug, setSlug] = useState('')
    const [slugError, setSlugError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showSlugError, setShowSlugError] = useState(false)
    const [expandedURL, setExpandedURL] = useState('')
    const [showExpandedURL, setShowExpandedURL] = useState(false)

    const onShorten = () => {
        const slugJSON = {
            slug: slug
        }

        API.expandURL(slugJSON, setSlugError, setShowSlugError, setSuccessMessage, setShowSuccessMessage, setShowExpandedURL, setExpandedURL, (response) => {
            setShowSlugError(false)
            setSlugError('')
            setSlug('')

            setShowSuccessMessage(true)
            setShowExpandedURL(true)
            setSuccessMessage(response.data.success.message)
            setExpandedURL(response.data.success.url)
        })
    }

    return (
        <div>

            <div className="input-and-error-wrapper"> 
                <input placeholder="Enter a slug..." value={slug} onChange={(e) => setSlug(e.target.value)}/>
                {showSlugError && <div className="input-error">{slugError}</div>}
            </div>

            <div className="button-shortener-or-expander-wrapper">
                <button className="shortener-or-expander" onClick={onShorten}> Expand URL </button>
                {showSuccessMessage && <div className="success">{successMessage}</div>}
            </div>

            {showExpandedURL && 
                <div className="shortened-or-expanded-url">
                    <label for="shortened-url">Your expanded URL: </label>
                    <a id='shortened-url' href={expandedURL}>{expandedURL}</a>
                </div>
            }

        </div>
    );
}

export default Expander;