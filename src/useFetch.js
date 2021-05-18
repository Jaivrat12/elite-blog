import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCtrl = new AbortController();
        
        fetch(url, { signal: abortCtrl.signal })
            .then(res => {

                if(!res.ok)
                    throw Error('Could not fetch the data for that resource');

                return res.json();
            })
            .then(data => {

                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
            
                if(error !== 'AbortError') {

                    setError(error.message);
                    setIsPending(false);
                }
            });
        
        return () => abortCtrl.abort();
        
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;