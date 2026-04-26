import "./header.css";

function Header() {
   return (
      <header className='heading'>
         <span>FareCity?</span>
         <nav>
            <a href='#map'>Map</a>
            <a href='#about'>About</a>
         </nav>
      </header>
   );
}

export default Header;
