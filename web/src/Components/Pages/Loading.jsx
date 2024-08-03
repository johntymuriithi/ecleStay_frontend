
import { useState, useEffect } from 'react';

function Loading  () {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000); 
    
        return () => clearTimeout(timer);
      }, []);
      return isLoading;

}

export default Loading;


  

