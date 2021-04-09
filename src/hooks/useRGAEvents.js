import React from 'react'
import ReactGA from 'react-ga'
const useRGAEvents = (category = 'Event Category') => {
  const eventTracker = (action = 'action', label = 'label') => {
    ReactGA.event({ category, action, label })
  }
  return eventTracker
}
export default useRGAEvents
