import { useEffect, useState } from 'react';

const getActiveTheme = () => {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
};

export const useActiveTheme = () => {
  const [theme, setTheme] = useState(getActiveTheme);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => setTheme(getActiveTheme()));

    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    setTheme(getActiveTheme());

    return () => observer.disconnect();
  }, []);

  return theme;
};
