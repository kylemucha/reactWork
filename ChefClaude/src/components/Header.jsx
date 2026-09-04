import chefClaude from "../images/chefClaude.png"

export default function Header () {
    return (
        <header>
            <img className="chef-claude-icon" src={chefClaude}/>
            <h1>Chef Claude</h1>
        </header>
    )
}