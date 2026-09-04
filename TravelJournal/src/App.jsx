import Header from "./components/Header"
import Entry from "./components/Entry"
import Data from "./data"

/**
 * Challenge:
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App () {

  const locationEntries = Data.map((location) => {
    return (
      <>
    <Entry 
      img={location.img}
      title={location.title}
      country={location.country}
      googleMapsLink={location.country}
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