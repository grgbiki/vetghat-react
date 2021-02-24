import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineCompass,
    AiFillCompass,
    AiOutlineMessage,
    AiFillMessage,
    AiOutlineHeart,
    AiFillHeart,
} from "react-icons/ai";
import HeaderNavItem from './HeaderNavItem';
import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    return (
        <div className="header">
            <div className="container">
                <div className="nav-container">
                    <h1 className="header-title">Vetghat</h1>
                    <div className="nav-bar">
                        <HeaderNavItem path="/" icon={location.pathname === "/" ? < AiFillHome size="30px" /> : < AiOutlineHome size="30px" />} />
                        <HeaderNavItem path="/explore" icon={location.pathname === "/explore" ? < AiFillCompass size="30px" /> : < AiOutlineCompass size="30px" />} />
                        <HeaderNavItem path="/message" icon={location.pathname === "/message" ? < AiFillMessage size="30px" /> : < AiOutlineMessage size="30px" />} />
                        <HeaderNavItem path="/notification" icon={location.pathname === "/notification" ? < AiFillHeart size="30px" /> : < AiOutlineHeart size="30px" />} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
