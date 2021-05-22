import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
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
                setError(null);
            })
            .catch(error => {
            
                if(error !== 'AbortError') {

                    if(error.message === 'Unexpected token < in JSON at position 0')
                        setError('');
                    else {

                        setError('An Error Occured (x_x)');
                        console.log(error.message);
                    }
                }
            });
        
        return () => abortCtrl.abort();
    }, [url]);

    return { data, error };
};

export default useFetch;