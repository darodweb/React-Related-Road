import './style.scss'


export const TrendingSearchTerm = ({ term }) => {


    let terms = term.slice(1, 4);




    return (
        <>
            {terms ? terms.map((term, index) =>
                <span className="hero__trending--text" key={index} >{term},</span>
            ) : <p>...loading</p>}




        </>
    );
};
