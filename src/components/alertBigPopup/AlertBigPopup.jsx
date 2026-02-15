import React, { useState } from 'react'
import AlertTabContent from './AlertTabContent';
import ImageTabContent from './ImageTabContent';
import VideoTabContent from './VideoTabContent';

const AlertBigPopup = ({ activeAlert, onClose }) => {
    console.log("ActiveAlert:", activeAlert);

    const [activeTab, setActiveTab] = useState('Alerts');
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 animate-in fade-in duration-200">
            <div className="absolute inset-0" onClick={onClose} />
            <div className='bg-[#000000DE] w-[95%] sm:w-[90%] lg:w-[85%] h-[90vh] rounded-xl flex flex-col overflow-hidden relative shadow-2xl z-10 animate-in zoom-in-95 duration-200'>
                <div className="flex items-center justify-between px-6 bg-[#000000DE] h-[7vh]">
                    <h2 className='text-[#FFFFFF] text-sm sm:text-base lg:text-[2vh] font-semibold'>{activeAlert?.camera?.name} - {activeAlert?.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tab Header.... */}
                <div className="flex items-center px-6 border-b border-gray-800 bg-[#000000] gap-8">
                    {['Alerts', 'Image', 'Video'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 text-sm font-medium transition-colors cursor-pointer relative tracking-wide ${activeTab === tab
                                ? 'text-white'
                                : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute -bottom-1 left-0 w-full h-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* content Area...... */}
                <div className="flex-1 overflow-hidden relative">
                    {activeTab === "Alerts" && (
                        <div className="w-full h-full p-4">
                            <AlertTabContent data={activeAlert} />
                        </div>
                    )}

                    {activeTab === "Image" && (
                        <div className="w-full h-full p-4">
                            <ImageTabContent data={activeAlert} />
                        </div>
                    )}

                    {activeTab === "Video" && (
                        <div className="w-full h-full p-4">
                            <VideoTabContent data={activeAlert} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default AlertBigPopup