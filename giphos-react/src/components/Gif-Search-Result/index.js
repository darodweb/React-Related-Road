




export const GifSearchResult = (gif) => {


    return (
        <>
            <div class="gif-container">
                <img src={gif.gif.images.fixed_height.url} class="search__results-gif" alt={gif.title} />
                <span className="search-results-overlay"></span>
            </div>
        </>
    );
};
