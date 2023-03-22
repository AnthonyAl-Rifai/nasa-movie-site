import { useEffect, useState } from 'react';

export const useScrollEnd = (distanceFromEnd = 250) => {
  const [isNearEnd, setIsNearEnd] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (offsetHeight - (scrollTop + clientHeight) <= distanceFromEnd) {
        setIsNearEnd(true);
      } else {
        setIsNearEnd(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distanceFromEnd]);

  return { isNearEnd, setIsNearEnd };
};
