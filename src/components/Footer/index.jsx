import { useState, useEffect } from 'react';
import '../../styles/footer.css'

function Footer() {
    const [HP,setHp] = useState(80);
    const [HitP,setHitp] = useState(0);
    const [LEVEL,setLevel] = useState(0);
    const [AP,setAP] = useState(60);
    const [ActP,setActP] = useState(60);

    useEffect(() => {
        randomNumberHP();
    }, []);

    function randomNumberHP(){
        const min = 1;
        const max = 100;
        const newLevel = Math.floor(Math.random() * (max - min -1) + min);
        const newHp = Math.floor(80 + (newLevel - 1));
        const newHitp = Math.max(0, Math.floor(newHp - Math.random() * (newHp - min -1) + min));
        const newAP = Math.floor(60 + (10 * Math.random() * (10 - 1 - 1) + 1));
        const newActP = Math.max(0, Math.floor(newAP - (10 * Math.random() * (10 - 1 - 1) + 1)));
    
        setLevel(newLevel);
        setHp(newHp);
        setHitp(newHitp);
        setAP(newAP);
        setActP(newActP);
    }
    


    return (
        <div className='footer' >
            <div className="footer-item footer-HP" >
                <p>HP: { HitP }/{ HP }</p>
            </div>
            <div className="footer-item footer-Level" >
                <p>LEVEL { LEVEL }&nbsp; &nbsp;</p>
                <span className="footer-Level-bar-container"> <div className="footer-Level-bar" style={{ width: `${(LEVEL / 100) * 100}%` }} ></div> </span> 
            </div>
            
            <div className="footer-item footer-AP" >
                <p>AP { ActP }/{ AP }</p>
            </div>
        </div>
    )
}

export default Footer