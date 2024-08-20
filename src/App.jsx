import Categories from './components/categories/Categories';
import Navbar from './components/navbar/Navbar';
import ImageSlide from './components/imageslides/ImageSlide';
import Zara from './components/zara/Zara';
import Nike from './components/nike/Nike';
import Gshock from './components/gshock/Gshock';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Categories/>
      <ImageSlide/>
      <Zara/>
      <Nike/>
      <Gshock/>
    </div>
  )
}

export default App;
