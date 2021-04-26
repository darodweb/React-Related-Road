import './styles.scss';


export const TrendingGifs = ({ gif }) => {


    return (


        <div className="trending-gifos-enclosure" key={gif.id}>
            <img className="trending-gifos-gif" src={gif.images.fixed_height.url} alt={gif.title} />
            <span className="trending-gifos-overlay"></span>


        </div>



    );
};


