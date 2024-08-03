import { useState, useEffect } from 'react';

function Server(url) {
    const [serverStatus, setServerStatus] = useState('checking');

    useEffect(() => {
        const checkServer = async () => {
          try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
              setServerStatus('available');
            } else {
              setServerStatus('unavailable');
            }
          } catch (error) {
            setServerStatus('unavailable');
          }
        };
        checkServer();
        const interval = setInterval(checkServer, 30000); // Check every 30 seconds
    
        return () => clearInterval(interval);
      }, [url]);
    
      return serverStatus;
    }


export default Server;