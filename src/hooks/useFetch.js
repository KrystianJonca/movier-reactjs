import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setError('');
      setData([]);
      try {
        const response = await fetch(url);
        const dataBuffer = await response.json();
        setData(dataBuffer.Search);
        setIsLoading(false);
        if (dataBuffer.Error)
          setError(`Sorry something is wrong: ${dataBuffer.Error}`);
      } catch (e) {
        setError(`Error while sending request: ${e}`);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
