import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  return(
    <>
    <Navbar />
    <Main />
    <main>
      <img className="react-logo" src="src/pictures/react-logo.png"></img>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
    </>
  )
}