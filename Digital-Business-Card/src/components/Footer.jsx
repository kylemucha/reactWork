import facebook from "../pictures/facebook-icon.png"
import github from "../pictures/github-icon.png"
import instagram from "../pictures/instagram-icon.png"
import twitter from "../pictures/twitter-icon.png"

export default function Footer () {
    return (
        <footer>
            <div className="social-icon-container">
                <a href="https://x.com/" target="_blank">
                    <img className="social-icon" src={twitter}></img>
                </a>
                <a href="https://facebook.com/" target="_blank">
                    <img className="social-icon" src={facebook}></img>
                </a>
                <a href="https://instagram.com/" target="_blank">
                    <img className="social-icon" src={instagram}></img>
                </a>
                <a href="https://github.com/" target="_blank">
                    <img className="social-icon" src={github}></img>
                </a>
            </div>
        </footer>
    )
}