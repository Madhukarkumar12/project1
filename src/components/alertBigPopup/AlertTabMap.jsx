import React from 'react'
import alertIcon from "../../assets/alert.svg";
import mapImage from "../../assets/airport-security.png";

const AlertTabMap = ({ data }) => {
    return (
        <div className='relative w-full h-full bg-[#111111] overflow-hidden'>
            <img
                src={mapImage}
                alt="Airport Map"
                className="w-full h-full object-cover block opacity-80"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            
            {data?.x && data?.y && (
                <div
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 z-[10]"
                    style={{ left: data.x, top: data.y }}
                >
                    <img 
                        src={alertIcon} 
                        alt="Alert" 
                        className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]" 
                    />
                </div>
            )}
        </div>
    )
}

export default AlertTabMap
