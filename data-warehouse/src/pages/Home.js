import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {

    return (
        <>
            <Header />
            <div className="row">
                <div class="col-lg-6">
                    <SearchBar />
                </div>

                <div className="col-lg-4 d-flex justify-content-end">
                    Column
                </div>
            </div>
        </>

    );
}

export default Home;