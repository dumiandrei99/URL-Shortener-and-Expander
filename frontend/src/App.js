import React, {useState} from 'react';
import './App.css';
import PageSelector from './components/PageSelector';
import Shortener from './components/Shortener';
import Expander from './components/Expander';
import Customizer from './components/Customizer';
import Analytics from './components/Analytics';

function App() {
  const [shortenerPressed, setShortenerPressed] = useState(true)
  const [expanderPressed, setExpanderPressed] = useState(false)
  const [customizerPressed, setCustomizerPressed] = useState(false)
  const [analyticsPressed, setAnalyticsPressed] = useState(false)

  const shortenerOnPress = () => {
    setShortenerPressed(true)
    setExpanderPressed(false)
    setCustomizerPressed(false)
    setAnalyticsPressed(false)
  }

  const expanderOnPress = () => {
    setShortenerPressed(false)
    setExpanderPressed(true)
    setCustomizerPressed(false)
    setAnalyticsPressed(false)
  }

  const customizerOnPress = () => {
    setShortenerPressed(false)
    setExpanderPressed(false)
    setCustomizerPressed(true)
    setAnalyticsPressed(false)
  }
 
  const analyticsOnPress = () => {
    setShortenerPressed(false)
    setExpanderPressed(false)
    setCustomizerPressed(false)
    setAnalyticsPressed(true)
  }

  return (
    <div className="App">
      <div className='page-selector-wrapper'>
        <PageSelector 
          shortenerPressed={shortenerPressed}
          expanderPressed={expanderPressed}
          customizerPressed={customizerPressed}
          analyticsPressed={analyticsPressed}
          shortenerOnPress={shortenerOnPress}
          expanderOnPress={expanderOnPress}
          customizerOnPress={customizerOnPress}
          analyticsOnPress={analyticsOnPress}
        />
      </div>

      <div className="main-div">
        {shortenerPressed && <Shortener />}

        {expanderPressed && <Expander />}

        {customizerPressed && <Customizer />}

        {analyticsPressed && <Analytics />}
      </div>
    </div>
  );
}

export default App;
