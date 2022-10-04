import React, {useState} from 'react';
import './App.css';
import PageSelector from './components/PageSelector';

function App() {
  const [shortenerPressed, setShortenerPressed] = useState(true)
  const [expanderPressed, setExpanderPressed] = useState(false)
  const [analyticsPressed, setAnalyticsPressed] = useState(false)

  const shortenerOnPress = () => {
    setShortenerPressed(true)
    setExpanderPressed(false)
    setAnalyticsPressed(false)
  }

  const expanderOnPress = () => {
    setShortenerPressed(false)
    setExpanderPressed(true)
    setAnalyticsPressed(false)
  }

  const analyticsOnPress = () => {
    setShortenerPressed(false)
    setExpanderPressed(false)
    setAnalyticsPressed(true)
  }

  return (
    <div className="App">
      <div className='page-selector-wrapper'>
        <PageSelector 
          shortenerPressed={shortenerPressed}
          expanderPressed={expanderPressed}
          analyticsPressed={analyticsPressed}
          shortenerOnPress={shortenerOnPress}
          expanderOnPress={expanderOnPress}
          analyticsOnPress={analyticsOnPress}
        />
      </div>

      <div className="main-div">
        {shortenerPressed &&
          <div> Shortener </div>
        }

        {expanderPressed && 
          <div> Expander </div>
        }

        {analyticsPressed &&
          <div> Analytics </div>
        }
      </div>
    </div>
  );
}

export default App;
