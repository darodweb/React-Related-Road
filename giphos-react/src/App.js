import './App.css';
import { GifSearchContainer } from './components/Gif-Search-Container';
import { TrendingGifsContainer } from './components/Trending-Gifs-Container';
import { Footer } from './Parts/Footer/Footer';
import { Header } from './Parts/Header/Header';
import { Hero } from './Parts/Hero/Hero';
import { Trending } from './Parts/Trending/Trending';


function App() {
  return (
    <div className="page-wrapper">
      <div className="border-top">
        <Header />
        <Hero />
        <Trending />
        {/* <GifSearchContainer />
        <TrendingGifsContainer /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
