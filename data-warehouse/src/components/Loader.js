import loader from '../assets/loader.gif'

const Loader = () => {

    return (

        <>
            <div className="container mt-5 text-center" style={{ margin: '0 auto' }}>
                <img src={loader} />
            </div>

        </>
    );
}

export default Loader;