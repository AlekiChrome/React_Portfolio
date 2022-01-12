import { useState, useEffect} from 'react';
import splash from '../assets/C-geo-black.gif';
import App from '../App';
// import '../App.scss';

export default function SplashScreen() {
    const [splashDisplay, setSplashDisplay] = useState(false); 

    
    useEffect(() => {
        setSplashDisplay(true);
        setTimeout(() => {
            setSplashDisplay(false)
        }, 4000);
    }, [])


    return (
        <div className="splash-container">
            { splashDisplay ? <div className='splash fade-out'><img className="appear fade-out" src={splash} /></div> : App }
        </div>
    )
}