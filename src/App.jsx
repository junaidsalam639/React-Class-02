import logo from './logo.svg';
import './App.css';
import MenuAppBar from './comp/Navbar';
import MultipleItems from './comp/Slider';
import Card from './comp/Card';
import NavbarDefault from './comp/Tailwind';
import CarouselCustomNavigation from './comp/Slider';
import EcommerceCard from './comp/Card1';

function App() {
  return (
   <>
   <MenuAppBar/>
   <Card/>
   <NavbarDefault/>
   <CarouselCustomNavigation/>
   <EcommerceCard/>
   <EcommerceCard/>
   <EcommerceCard/>
   <EcommerceCard/>
   </>
  );
}

export default App;
