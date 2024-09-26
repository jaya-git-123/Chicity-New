import "./App.css"
import Header from './components/Header';
import Banner from './components/Banner';
import FeatureSection from './components/FeatureSection';
import CollectionSection from './components/CollectionSection';
import CollectionCard from  './components/CollectionCard';
import TrendingProducts from './components/TrendingProducts';
import Logo from "./components/Logo";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FeatureSection />
      <CollectionSection />
      <CollectionCard />
      <TrendingProducts />
      <Logo />
      <Footer />
    </div>
  );
}
export default App;