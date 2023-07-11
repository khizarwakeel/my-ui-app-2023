import FeaturedProduct from "./featuredproducts";
import FieldArea from "./fieldarea";
import Header from "./header";
import HotDeals from "./hotdeals";
import MainProduct from "./mainProduct";
import Slidered from "./slidered";
import YouMightLike from "./youmightlike";

function App() {
  return (
    <div>
      <Header />
      <Slidered />
      <YouMightLike />
      <HotDeals />
      <MainProduct/>
      <FeaturedProduct/>
      <FieldArea />
    </div>
  );
}

export default App;
