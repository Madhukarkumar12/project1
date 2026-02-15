import React, { useRef } from 'react'

const VideoDialog = ({ activeAlert, onClose }) => {
    const videoRef = useRef(null);
    const videoSrc = activeAlert?.video || '/asset/sample-video.mp4';
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 animate-in fade-in duration-200">
            <div className="absolute inset-0" onClick={onClose} />
            <div className='bg-[#000000DE] w-[85%] h-[90vh] rounded-xl flex flex-col overflow-hidden relative shadow-2xl z-10 animate-in zoom-in-95 duration-200'>
                <div className="flex items-center justify-between px-6 bg-[#000000DE] h-[7vh]">
                    <h2 className='text-[#FFFFFF] text-[2vh] font-semibold'>{activeAlert?.camera?.name} - {activeAlert?.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 w-full h-full min-h-0 p-4">
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        autoPlay
                        muted
                        controls
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoDialog
