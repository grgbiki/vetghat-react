import { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderNavItem({ path, icon, }) {

    const [hovererd, setHovered] = useState(false)
    const onMouseEnter = () =>
        setHovered(true)
    const onMouseLeave = () =>
        setHovered(false)
    return (
        <Link to={path}>
            <div className={`nav-button ${hovererd ? 'nav-button-hovered' : ''}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {icon}
            </div>
        </Link>

    )
}

export default HeaderNavItem
