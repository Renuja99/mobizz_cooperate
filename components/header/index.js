
const Header = ()=>{

    return(

        <header className='header'>
      <div className='container'>

          <a href="#">
            <img src="" alt="" />
          </a>
          
          <nav className='navbar' data-navbar>
            
            <div className='wrapper'>
              <a href="">
                <img src="" alt="" />
              </a>

              <button className='nav-close-btn'>
                
              </button>

            </div>


              <ul className="navbar-list">
                  <li className="navbar-item">
                    <a href="#home" className="navbar-link" data-nav-link>Home</a>
                  </li>

                  <li className="navbar-item">
                    <a href="#about" className="navbar-link" data-nav-link>About</a>
                  </li>

                  <li className="navbar-item">
                    <a href="#courses" className="navbar-link" data-nav-link>Courses</a>
                  </li>

                  <li className="navbar-item">
                    <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                  </li>

                  <li className="navbar-item">
                    <a href="#" className="navbar-link" data-nav-link>Contact</a>
                  </li>
              </ul>


          </nav>

          <div class="header-actions">

            <button class="header-action-btn" aria-label="toggle search" title="Search">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>

            <button class="header-action-btn" aria-label="cart" title="Cart">
              <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

              <span class="btn-badge">0</span>
            </button>

            <a href="#" class="btn has-before">
              <span class="span">Try for free</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>

            <button class="header-action-btn" aria-label="open menu" data-nav-toggler>
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>

          </div>
      </div>
    </header>
    )
}

export default Header