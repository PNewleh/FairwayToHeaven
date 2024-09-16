import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles.css"

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Fairway To Heaven
            </Link>
            <ul>
                <CustomLink to="/players">Players</CustomLink>
                <CustomLink to="/scores">Scores</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}