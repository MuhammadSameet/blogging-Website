import footers from "@/app/components/footer"
import Link from "next/link"

export default function footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
            <h1>SameetShahid</h1>
            <h3 className="f-button">lets connect with our social</h3>
            <ul>
                <Link href="https://www.linkedin.com/in/muhammad-sameet-shahid/"><li className="h-button">Linkedin</li></Link>
                <Link href="https://github.com/MuhammadSameet"><li className="h-button">Github</li></Link>
            </ul>
            </div>
            <div className="footer-website">
            <h2>Website</h2>
            <ul className="footer-button">
                <Link href="/"><li className="h-button">Home</li></Link>
                <Link href="/blogs"><li className="h-button">Blogs</li></Link>
                <Link href="/about"><li className="h-button">About</li></Link>
                <Link href="/contact"><li className="h-button">Contact</li></Link>
            </ul>
            </div>
        </div>
    )
}