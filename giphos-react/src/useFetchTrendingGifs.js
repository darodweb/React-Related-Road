import { useState, useEffect } from 'react';
import { API } from './Services/Api';


export const useFetchTrendingGifs = (URL) => {
    const [trendingGifs, setTrendingGifs] = useState([]);


    useEffect(() => {
        const getData = () => {
            API.getGifs(URL)
                .then(response => {
                    setTrendingGifs(response.data)

                })
        }
        getData();

    }, [URL]);

    return { trendingGifs, setTrendingGifs }
}



