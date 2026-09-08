import chefClaude from "../images/chefClaude.png"

export default function Header () {
    return (
        <header>
            <img className="chef-claude-icon" src={chefClaude} alt="Chef Claude Tiny Chef Icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}