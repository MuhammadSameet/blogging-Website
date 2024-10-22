import { headers } from "next/headers"
import Link from "next/link"


export default function Header(){
    return (
        <div className="header container" >
            <div><h1 className="logo">SameetShahid</h1></div>
            <ul className="header-button" id="header-button">
                <Link href="/"><li className="h-button">Home</li></Link>
                <Link href="/blogs"><li className="h-button">Blogs</li></Link>
                <Link href="/about"><li className="h-button">About</li></Link>
                <Link href="/contact"><li className="h-button">Contact</li></Link>
            </ul>
            <div className="nav-icon" id="nav-icon"><i className="fa-solid fa-bars"></i></div>
        </div>
    )
}