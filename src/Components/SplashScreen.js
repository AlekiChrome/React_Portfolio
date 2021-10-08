import { useState, useEffect} from 'react';
import splash from '../assets/C-geo-black.gif';
import App from '../App';

export default function SplashScreen() {
    const [splashDisplay, setSplashDisplay] = useState(false); 

    useEffect(() => {
        setSplashDisplay(true);
        setTimeout(() => {
            setSplashDisplay(false)
        }, 3500);
    })


    return (
        <div className="splash">
            { splashDisplay ? <img className="appear" src={splash} /> : App}
            
        </div>
    )
}