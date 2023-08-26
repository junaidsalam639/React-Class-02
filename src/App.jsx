import logo from './logo.svg';
import './App.css';
import MenuAppBar from './comp/Navbar';
import MultipleItems from './comp/Slider';
import Card from './comp/Card';
import NavbarDefault from './comp/Tailwind';

function App() {
  return (
   <>
   <MenuAppBar/>
   <Card/>
   <NavbarDefault/>
   </>
  );
}

export default App;
