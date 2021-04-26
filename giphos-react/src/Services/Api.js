
export const API = {

    getGifs: function (URL) {
        return (
            new Promise((resolve, reject) => {
                fetch(URL)
                    .then(response => resolve(response.json()))
                    .catch(error => reject(error))
            })
        )
    }
};

//Endpoints
export const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=vr7eliKrqbn1J94gIPNQhs9Gx7ZUM15l&limit=3`;
export const TRENDING_SEARCH_TERMS_URL = `https://api.giphy.com/v1/trending/searches?api_key=vr7eliKrqbn1J94gIPNQhs9Gx7ZUM15l`;
export const SEARCH_SUGGESTIONS_URL = `https://api.giphy.com/v1/gifs/search/tags?api_key=vr7eliKrqbn1J94gIPNQhs9Gx7ZUM15l&limit=5&q=`
export const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=vr7eliKrqbn1J94gIPNQhs9Gx7ZUM15l&limit=12&q=`;


