import marker from '../assets/marker.png'
import './index.css'
export function Component(props){
    console.log(props)
    return(
       <>
           <div className='journal-entry'>
               <div className='main-image-container'>
                   <img className='main-image'
                       src={props.img.src} alt={props.img.alt}/>
               </div>
               <div className='main-info-container'>
                   <img src={marker} className='marker' alt="marker"/>
                   <span className='country'>{props.country}</span>
                   <div className='map-container'>
                       <a href={props.googleMapsLink}
                          target="_blank" className="map-link">
                           View on Google Maps
                       </a>
                       <div className='map-wrapper'>
                           <iframe
                               src={props.mapLink}
                               allowFullScreen
                               loading="lazy"
                           ></iframe>
                       </div>
                   </div>
                   <h2 className='entry-title'>{props.title}</h2>
                   <p className='trip-dates'>{props.dates}</p>
                   <p>{props.text}</p>
               </div>
           </div>
       </>
    )
}