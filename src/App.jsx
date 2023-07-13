import FeaturedProduct from "./featuredproducts";
import FieldArea from "./fieldarea";
import Footer from "./footer";
import Header from "./header";
import HotDeals from "./hotdeals";
import ImageSlider from "./imageslider";
import MainProduct from "./mainProduct";
import Slidered from "./slidered";
import YouMightLike from "./youmightlike";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Slidered />
      <YouMightLike />
      <HotDeals />
      <MainProduct />
      <FeaturedProduct />
      <ImageSlider />
      <FieldArea />
      <Footer />
    </div>
  );
}

export default App;