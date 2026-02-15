import React from 'react'

const VideoTabContent = ({ data }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black/20 ">
            {data.video ? (
                <video
                    controls
                    className="w-full h-full object-cover"
                    src={data.video}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="text-gray-500 flex flex-col items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>No Video Available</span>
                </div>
            )}
        </div>
    )
}

export default VideoTabContent
