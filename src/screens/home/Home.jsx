import HeroSection from './heroSection/HeroSection.jsx';
import StatisticalData from './statisticalData/StatisticalData.jsx';
import HomeSection from './homeSection/HomeSection.jsx';
import Catagory from './catagory/Catagory.jsx';
import Rating from './customerRate/Rating.jsx';
import useCountdown from './homeSection/count_down.jsx';
import products from './homeSection/productsArray.js';


const filterSaleProduct = products.filter((card) => card.saleTag === "SALE");
const filterNewProduct = products.filter((card) => card.tag === 'NEW');
const filterTopProduct = products.filter((card) => card.tag === 'TOP');

function Home() {
  const countdown = useCountdown((1 * 60 * 60) + (30 * 60));
  return (
    <div className='body'>
      {/* <StickBar /> */}
      {/* <Header /> */}
      <HeroSection></HeroSection>
      <StatisticalData></StatisticalData>
      <HomeSection
        sectionName='flash-sale'
        sectionTitle='flash-sale-title'
        bigTitle='FLASH SALE'
        littleTitle={countdown}
        smallTitle='countdown'
        filterProduct={filterSaleProduct}
        page= './products'
      />
      <HomeSection
        sectionName='newProducts'
        sectionTitle='newArrivals'
        bigTitle='HÀNG MỚI VỀ'
        littleTitle='Sản phẩm mới đã cập bến Luxury Shop! Nhanh tay lựa ngay deal hời các tình yêu ơi <3'
        smallTitle='smallTitle'
        section={products}
        filterProduct={filterNewProduct}
      />
      <HomeSection
        sectionName='topProducts'
        sectionTitle='topSeller'
        bigTitle='TOP BÁN CHẠY'
        littleTitle='Các sản phẩm được nhiều khách hàng ủng hộ tại Luxury Shop'
        smallTitle='smallTitle'
        section={products}
        filterProduct={filterTopProduct}
      />
      <Catagory />
      <Rating />
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
