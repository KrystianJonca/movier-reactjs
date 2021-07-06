import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    if (mounted) {
      const fetchData = async () => {
        setData([]);
        setError('');
        const response = await fetch(url);
        const dataBuffer = await response.json();
        setData(dataBuffer.Search);
        setIsLoading(false);
        if (dataBuffer.Error)
          setError(`Sorry something is wrong: ${dataBuffer.Error}`);
      };
      fetchData();
    }

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
