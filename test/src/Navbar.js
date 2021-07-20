import {useState} from 'react'
import { Link } from 'react-router-dom'
 function Navbar()
{
    var [title,setTitle]=useState("Pratham's Cake Gallery")
 
return(
    
    <nav class="navbar navbar-expand-lg navbar-white bg-danger p-2">
  <Link to="/" style={{textDecoration:'none'}}><h5 className="text-white">{title}</h5></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

      <form style={{marginLeft:'10em'}} class="d-flex mr-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Link to="/Search"><button class="btn bg-dark text-white my-2 my-sm-0" type="submit">Search</button></Link>
      
      
     <Link to="/Login"><button type="button"  style={{marginLeft:'38em'}}  class="btn bg-dark text-white my-2 my-sm-0" type="submit">Login</button></Link> 
     </form>
</nav>
)
}
export default Navbar