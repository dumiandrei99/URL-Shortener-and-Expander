import React, {useState, useEffect} from 'react';
import '../App.css';
import * as API from '../api/api'

function Analytics() {
    const [analytics, setAnalytics] = useState([])

    useEffect(() => {
        API.analytics((response) => {
            setAnalytics(response.data)
        })
    }, [])

    return (
        <div>
            <div className="headers">
                <div className="header"> SLUG </div>
                <div className= "header"> TIMES CLICKED </div>
            </div>
            {analytics.length === 0 ?
                <div> No data available yet... </div>
                :
                analytics.map((analytic, index) => {
                    return(
                        <div className="headers"> 
                            <a href={analytic.slug} className="slug">{analytic.slug}</a>
                            <div className="times-clicked">{analytic.times_clicked}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Analytics;