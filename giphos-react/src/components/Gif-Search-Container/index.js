import { useState } from 'react';
import { API, SEARCH_SUGGESTIONS_URL, SEARCH_URL, TRENDING_SEARCH_TERMS_URL } from '../../Services/Api';
import '../../Parts/Hero/Hero.scss';
import Hero_Image from '../../assets/img/ilustra_header.png';
import { GifSearchResult } from '../Gif-Search-Result';
import { TrendingSearchTerm } from '../Trending-Search-Term';
import { useFetchTrendingTerms } from '../../useFetchTrendingTerms';


export const GifSearchContainer = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [termSearched, setTermSearched] = useState('');
    const { trendingTerms } = useFetchTrendingTerms(TRENDING_SEARCH_TERMS_URL);


    //----------------------Function that will query Search Endpoint and get gifs----------------------
    let initialSearchResults = [];
    const getSearchedGifs = (inputtedText) => {

        let SEARCH_URL_QUERY = SEARCH_URL.concat(inputtedText)

        API.getGifs(SEARCH_URL_QUERY)
            .then(response => {

                initialSearchResults = [];
                for (let i = 0; i < response.data.length; i++) {
                    initialSearchResults = [...initialSearchResults, response.data[i]]
                }
                setSearchResults(initialSearchResults);
            })
    }


    //---------Handler that will trigger the getSearchedGifs function when the Enter key is pressed----------------------
    const handleOnKeyPressEvent = (e) => {
        if (e.charCode === 13) {
            setSearchInputValue(e.target.value)
            getSearchedGifs(e.target.value);
            setSearchInputValue('');
            setTermSearched(searchInputValue)
            console.log('Enter Key was pressed');
        }
    }



    //--------Function that will query Autocomplete endpoint----------------------
    const getSearchSuggestions = () => {
        const SEARCH_SUGGESTIONS_URL_SENT = SEARCH_SUGGESTIONS_URL.concat(searchInputValue);
        API.getGifs(SEARCH_SUGGESTIONS_URL_SENT)
            .then(response => {
                const firstResults = response.data
                firstResults.forEach(element => {
                    setSearchSuggestions([...searchSuggestions, element.name])
                });
            })
    }

    const handleInput = (e) => {
        setSearchInputValue(e.target.value);
        getSearchSuggestions();
        setTermSearched(searchInputValue)
    }

    const handleSearchTerm = (term) => {
        console.log(`${term} clicked`)
    }


    return (


        <section className="hero">
            <div className="hero__container">
                <h1>Inspírate, busca, guarda, y crea los mejores <span className="hero__container-gifos">GIFOS</span></h1>
                <div className="hero-image__container">
                    <img src={Hero_Image} className="hero__image" alt="hero" />
                </div>
                <div className="hero-search">
                    <input className="hero-search__input" name="hero-search__input" type="text" placeholder="Busca GIFOS y más"
                        value={searchInputValue}
                        onChange={handleInput}
                        onKeyPress={handleOnKeyPressEvent} />
                    <div className="hero-line-separator"></div>
                    <ul className="hero-search-suggestions-container">

                        {searchInputValue ? searchSuggestions.map((element, index) =>
                            <li className="hero-search-suggestions" key={index}>{element}</li>
                        ) : null}

                    </ul>
                    <button type="submit" id="hero__search"><i className="hero__search-icon" onClick={handleInput}></i></button>

                </div>
            </div>

            <div className="hero__trending">
                <p className="hero__trending--title">Trending:</p>
                <div style={{ display: "flex" }}>

                    {trendingTerms ? trendingTerms.map((term, index) =>
                        <TrendingSearchTerm
                            onClick={() => handleSearchTerm()}
                            term={term}
                            key={index}
                        />
                    ) : null}
                </div>

            </div>

            <div className="search-results">
                <h3 className="search-title">{termSearched}</h3>
                <div className="search-results-container">
                    {searchResults ? searchResults.map((gif) =>
                        <GifSearchResult gif={gif} key={gif.id} />
                    ) : null}
                </div>
            </div>

        </section>
    )
}