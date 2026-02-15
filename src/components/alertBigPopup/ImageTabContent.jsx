import React from 'react'

const ImageTabContent = ({ data }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {data.img ? (
                <img
                    src={data.img}
                    alt="image"
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="text-gray-500 flex flex-col items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>No Image Available</span>
                </div>
            )}
        </div>
    )
}

export default ImageTabContent
