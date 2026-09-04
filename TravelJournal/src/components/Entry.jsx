import marker from "../pictures/marker.png"

export default function Entry (props) {
    return (
        <div className="location-entry">
            <img className="location-picture" src={props.img.src} alt={props.img.alt}></img>
            <div className="location-information">
                <img className="location-marker" src={marker} alt="Map Marker Icon"></img>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}
                target="_blank"
                >View on Google Maps</a>  
                <h2>{props.title}</h2>
                <p className="location-dates">{props.dates}</p>   
                <p className="location-description">{props.text}</p>    
            </div>
        </div>
    )
}