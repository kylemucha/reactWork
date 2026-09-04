import Header from "./components/Header"
import Entry from "./components/Entry"
import Data from "./data"

export default function App () {

  const locationEntries = Data.map((location) => {
    return (
    <>
      <Entry 
      key={location.id}
      img={location.img}
      title={location.title}
      country={location.country}
      googleMapsLink={location.googleMapsLink}
      dates={location.dates}
      text={location.text}
    />
    <hr className="split"/>
    </>
    )
  })

  return (
    <>
      <Header />
      {locationEntries}  
    </>
  )
}