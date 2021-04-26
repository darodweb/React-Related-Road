import { useState, useEffect } from 'react';
import './styles.scss';
import { TRENDING_URL } from '../../Services/Api'
import { TrendingGifs } from '../Trending-Gifs';
import { useFetchTrendingGifs } from '../../useFetchTrendingGifs';
import { API } from '../../Services/Api'
import { useToggleState } from '../../useToggleState';

export const TrendingGifsContainer = () => {
    const { trendingGifs, setTrendingGifs } = useFetchTrendingGifs(TRENDING_URL);
    const [offset, setOffset] = useState(1);
    const [isOn] = useToggleState();


    const handleGetMoreGIfs = () => {
        setOffset(Number(offset * 3));

        let URL = `${TRENDING_URL}&offset=${offset}`

        API.getGifs(URL)
            .then(response => {
                let loadMoreGifs = response.data;
                setTrendingGifs(loadMoreGifs);
            })
    }

    useEffect(() => {
        handleGetMoreGIfs();
        console.log('Component re-rendered')
            ;
    }, [isOn])


    return (
        <>

            <section className="trending-gifos">
                <div className="trending-gifos-text">
                    <h2 className="trending-gifos-text-title">Trending GIFOS</h2>
                    <div className="trending-gifos-text-content-container">
                        <p className="trending-gifos-text-text-content">Mira los últimos &nbsp;</p>
                        <p className="trending-gifos-text-text-content"> GIFOS de nuestra comunidad.</p>
                    </div>
                </div>

                <div className="trending-gifos-gif-container">

                    {trendingGifs ? trendingGifs.map((gif) =>
                        <TrendingGifs
                            key={gif.id}
                            gif={gif}
                        />
                    ) : <h4>No available images at this time.</h4>}

                </div>

            </section>
            <div className="trending-btn__container" onClick={() => handleGetMoreGIfs()} style={{ textAlign: 'center' }}>
                <button class="btn-find-more" style={{ marginBottom: '50px' }}>Load more trending gifs</button>
            </div>



        </>
    )
}