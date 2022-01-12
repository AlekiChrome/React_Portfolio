import { useState, useEffect} from 'react';
import splash from '../assets/C-geo-black.gif';
import App from '../App';

export default function SplashScreen() {
    const [splashDisplay, setSplashDisplay] = useState(false); 

    // DEBUG:
    useEffect(() => {
        setSplashDisplay(true);
        setTimeout(() => {
            setSplashDisplay(false)
        }, 3500);
    }, [])


    return (
        <div>
            { splashDisplay ? <div className='splash fade-out'><img className="appear" src={splash} /></div> : App }
        </div>
    )
}