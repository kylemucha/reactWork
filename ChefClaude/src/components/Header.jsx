import chefClaude from "../images/chefClaude.png"

export default function Header () {
    return (
        <header>
            <img className="chef-claude-icon" src={chefClaude} alt="Icon of a robot chef"/>
            <h1>Chef Claude</h1>
        </header>
    )
}