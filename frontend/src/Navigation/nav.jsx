import{FiHeart} from 'react-icons/fi'
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./nav.css"

export default function nav({handleInputChange,query}) {
  return (
    <nav>
    <div className="nav-container">
      <input type="text" className="search-input" 
      onChange={handleInputChange}
      value={query
      }placeholder="Enter your search"
      />
    </div>
    <div className="profile-container">
      <a href="#">
<FiHeart className="nav-icons"/>
      </a>

      <a href="#">
        <CiShoppingCart className="nav-icons"/>
      </a>
      <a href="#">
      <AiOutlineUserAdd className="nav-icons"/>
      </a>
    </div>
    </nav>
  )
}
