import React, { useRef } from 'react';

const EventVideo = ({ data }) => {
    const videoRef = useRef(null);
    // const camId = activeAlert?.camId ? String(activeAlert.camId).toUpperCase() : 'CAM1';
    const videoSrc = data?.video || '/asset/sample-video.mp4';

    return (
        <div className={`flex flex-col bg-[#1a1a1a] overflow-hidden border border-gray-800 flex-1`}>

            <div className="flex-1 relative">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-full object-cover"
                    muted
                    controls
                    playsInline
                />

                <div className='absolute flex flex-col top-3 left-3'>
                    <span className='text-[#FFFFFF] text-[1.5vh] font-medium'>EVENT VIDEO</span>
                    {/* <span className='text-[#FFFFFF] text-[1.5vh] font-medium'>{camId}</span> */}
                </div>
            </div>
        </div>
    );
};

export default EventVideo;