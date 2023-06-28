import { useCallback, useEffect, useState } from 'react';

export const useDarkMode = (isInitialDark = false) => {
  const [isDarkMode, toggleTheme] = useState(isInitialDark);

  const toggle = useCallback((isDark) => {
    if (typeof isDark === 'undefined') {
      toggleTheme((state) => !state);
      return;
    }

    toggleTheme(isDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
