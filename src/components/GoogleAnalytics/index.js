import { useEffect } from 'react';
import ga from 'react-ga';

function GoogleAnalytics({ location }) {
  useEffect(() => {
    ga.initialize('UA-135148027-1');
  }, []);
  useEffect(() => {
    if (window.location.hostname === 'localhost') return;
    ga.set({ page: location.pathname });
    ga.pageview(location.pathname);
  }, [location.pathname]);
  return null;
}

export default GoogleAnalytics;
