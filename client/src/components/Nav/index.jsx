import {Link} from 'react-router-dom'
import './index.scss'

export default function index() {
  return (

    <nav>
      <div className="container">
        <div className="row">
          <div className="brand">
            <Link to='' >
              <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/crud'>Crud</Link></li>
              <li><Link to='/'>Shop</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/'>Pages</Link></li>
              <li><Link to='/'>Contact</Link></li>
            </ul>
          </div>

          <div className="actions">
            <Link to='/search'> <i class="fa-solid fa-magnifying-glass"></i>  </Link>
            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
            <button> Buy Now </button>
          </div>

        </div>
      </div>
    </nav>
  )
}
