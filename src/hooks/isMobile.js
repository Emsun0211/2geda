import { useEffect, useState } from "react";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 680);
      }
  
      // Initial check on mount
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isMobile;
  }
  
  export default useIsMobile;