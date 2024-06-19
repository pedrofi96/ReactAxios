import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to={'/'}>
            Blog
          </Link> 
        </h2> 
      </nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/new'} className='new-btn'>
            Novo Post
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar