import CardWidget from "./CardWidget/CardWidget"
import images from "./CardWidget/assets/images.jpeg"

import 'bootstrap/dist/css/bootstrap.min.css'; 

const NavBar=()=> {
 return(
    <nav>
  
     <div>

        <img src={images} className="card-img-top" alt="Card Widget" style={{width:"25rem"}}/>
      
            <button>Camisetas</button>
            <button>Pantalones</button>
            <button>Abrigos</button>
            <button>Botines</button>
            <button>Accesorios</button>

        </div>
        <CardWidget/>
     
    </nav>
 )
}
export default NavBar;