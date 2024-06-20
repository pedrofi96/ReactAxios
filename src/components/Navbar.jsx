import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap'


const Navbar = () => {
  return (
    <div className=''>
      <nav className=" navbar d-flex justify-content-between p-2 bg-dark bg-opacity-75 ">
        <h2>
          <Link to={'/'}>
            Blog
          </Link> 
        </h2> 
      <ul className='d-flex gap-2 align-items-center'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='btn btn-outline-primary'>
          <Link to={'/new'} >
            Novo Post
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar