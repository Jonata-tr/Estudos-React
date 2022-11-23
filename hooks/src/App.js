import './App.css'
import AssentosOnibus from './AssentosOnibus';
import ShowList from './wallpaperList'

function Main(){
  return(
    <div className='bg'>
      <HeaderNav />
      {/* <AssentosOnibus/> */}
    </div>
  )
}

function HeaderNav() {
  const callOptions = () => {
    const classHandle = document.querySelector('.categorias');
    classHandle.classList.toggle("show");
  }; 

  return(
    <nav>
      <div className='logo images'>
        <h1>SiteTeste</h1>
      </div>
      <div className='wallpaperDiv'>
        <button id='navBtn' onClick={callOptions}>Wallpaper</button>
        <ShowList />
      </div>
    </nav>
  )
}

export default Main;