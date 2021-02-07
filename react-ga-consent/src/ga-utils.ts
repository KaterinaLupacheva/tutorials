import * as ReactGA from 'react-ga';
// import { getCookieConsentValue } from 'react-cookie-consent';

export const initGA = (id: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(id);
  }
};

// export const pageView = () => {
//   const isConsent = getCookieConsentValue();
//   if (process.env.NODE_ENV === 'production' && isConsent === 'true') {
//     ReactGA.pageview(window.location.pathname + window.location.search);
//   }
// };
