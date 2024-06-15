
// import StickBar from '../../components/sticky-bar/Sticky-bar.jsx';
// import Header from '../../components/header/Header.jsx';
import HeroSection from '../home/heroSection/HeroSection.jsx';
import StatisticalData from '../home/statisticalData/StatisticalData.jsx';
import HomeSection from '../home/homeSection/HomeSection.jsx';
import Catagory from '../home/catagory/Catagory.jsx';
import Rating from '../home/customerRate/Rating.jsx';
// import Footer from '../../components/footer/Footer.jsx';
import useCountdown from '../home/homeSection/count_down.jsx';
import products from '../home/homeSection/productsArray.js';


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
