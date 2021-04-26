import { useState, useEffect } from 'react';
import { API } from './Services/Api';


export const useFetchTrendingTerms = (URL) => {
    const [trendingTerms, setTrendingTerms] = useState([]);


    useEffect(() => {
        let results = []
        const getTrendingTerms = () => {

            API.getGifs(URL)
                .then(response => {
                    let aux = response.data;
                    aux.forEach((result) =>
                        results.push(result)
                    )
                    setTrendingTerms([...trendingTerms, results]);
                })

        }

        getTrendingTerms();

    }, []);

    return { trendingTerms };

}



