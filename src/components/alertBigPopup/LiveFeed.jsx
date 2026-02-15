import React, { useRef } from 'react';

const LiveFeed = ({ data }) => {
    const videoRef = useRef(null);
    const videoSrc = data?.video;

    const formatLiveTimestamp = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase().replace(/,/g, '');
        const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/:/g, ':');
        return { date, time };
    };
    const { date, time } = formatLiveTimestamp();

    return (
        <div className={`flex flex-col bg-[#1a1a1a] overflow-hidden border border-gray-800 flex-1`}>

            <div className="flex-1 relative">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                />

                <div className='absolute flex items-center gap-1 left-2 top-2'>
                    <svg width="10" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#E81C1C" />
                    </svg>

                    <span className='text-[#FFFFFF] text-[1.5vh] font-medium'>LIVE FEED</span>
                </div>
                {/* <span className='absolute left-6 top-6 text-[#FFFFFF] text-[1.4vh] font-medium'>{camId}</span> */}
            </div>
        </div>
    );
};

export default LiveFeed;