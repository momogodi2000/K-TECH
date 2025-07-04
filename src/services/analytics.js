
import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId && import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    ReactGA.initialize(measurementId);
    console.log('Google Analytics initialized');
  }
};

// Track page views
export const trackPageView = (page) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    ReactGA.send({ hitType: 'pageview', page });
  }
};

// Track events
export const trackEvent = (action, category = 'User Interaction', label = '', value = 0) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    ReactGA.event({
      action,
      category,
      label,
      value
    });
  }
};

// Track custom events
export const trackCustomEvent = (eventName, parameters = {}) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    ReactGA.event(eventName, parameters);
  }
};

// Business-specific tracking
export const trackQuoteRequest = (service, contactMethod) => {
  trackEvent('Quote Request', 'Business', `${service} via ${contactMethod}`);
};

export const trackServiceView = (serviceName) => {
  trackEvent('Service View', 'Services', serviceName);
};

export const trackContactClick = (method) => {
  trackEvent('Contact Click', 'Contact', method);
};
