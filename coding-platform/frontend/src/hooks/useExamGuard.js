import { useEffect, useState } from 'react';

export const useExamGuard = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  useEffect(() => {
    const blockClipboard = (event) => event.preventDefault();
    const handleVisibility = () => {
      if (document.hidden) {
        setTabSwitchCount((count) => count + 1);
      }
    };

    document.addEventListener('copy', blockClipboard);
    document.addEventListener('paste', blockClipboard);
    document.addEventListener('cut', blockClipboard);
    document.addEventListener('contextmenu', blockClipboard);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('copy', blockClipboard);
      document.removeEventListener('paste', blockClipboard);
      document.removeEventListener('cut', blockClipboard);
      document.removeEventListener('contextmenu', blockClipboard);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return { tabSwitchCount };
};
