import React, { useState } from 'react'
import alertIcon from "../assets/alert.svg";
import mapImage from "../assets/airport-security.png";
import imageImg from "../assets/image.svg";
import videoImg from "../assets/video.svg";
import AlertBigPopup from './alertBigPopup/AlertBigPopup';
import VideoDialog from './VideoDialog';
import ImageDialog from './ImageDialog';

const MapImp = ({ alertData, selectedAlert, setSelectedAlert }) => {
    // for bigger popup.....
    const [showDetailsDialog, setShowDetailsDialog] = useState(false);
    const [showVideoDialog, setShowVideoDialog] = useState(false);
    const [showImageDialog, setShowImageDialog] = useState(false);
    const alerts = alertData?.alerts || [];

    return (
        <>
            <div
                className="relative w-full h-full bg-[#111111] flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedAlert(null)}
            >
                {/* Map Image Container */}
                <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={mapImage}
                        alt="Airport Map"
                        className="w-full h-full object-cover block opacity-90"
                    />

                    <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                    {/* Alert Icons */}
                    {alerts.map((alert) => (
                        <div
                            key={alert.id}
                            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 z-[5]"
                            style={{ left: alert.x, top: alert.y }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedAlert(alert);
                            }}
                        >
                            <img src={alertIcon} alt="Alert" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                        </div>
                    ))}

                    {/* Alert Popup */}
                    {selectedAlert && (() => {
                        const xPos = parseInt(selectedAlert.x);
                        const yPos = parseInt(selectedAlert.y);
                        const isNearLeft = xPos < 35;
                        const isNearRight = xPos > 65;
                        const isNearTop = yPos < 25;
                        const isNearBottom = yPos > 75;

                        let positionClass = "";
                        let arrowClass = "";
                        let containerStyle = {
                            left: selectedAlert.x,
                            top: selectedAlert.y,
                        };

                        if (isNearLeft) {
                            // Open to the right
                            positionClass = "translate-y-[-50%] ml-7";
                            arrowClass = "top-1/2 -left-[6px] -translate-y-1/2 border-l border-b";
                        } else if (isNearTop && !isNearRight) {
                            // Open to the bottom
                            positionClass = "-translate-x-1/2 mt-7";
                            arrowClass = "left-1/2 -top-[6px] -translate-x-1/2 border-l border-t";
                            containerStyle.top = selectedAlert.y;
                        } else if (isNearBottom && !isNearRight) {
                            // Open to the top
                            positionClass = "-translate-x-1/2 -translate-y-full -mt-7";
                            arrowClass = "left-1/2 -bottom-[6px] -translate-x-1/2 border-r border-b";
                        } else {
                            // Default: Open to the left
                            positionClass = "-translate-x-full -translate-y-1/2 -ml-7";
                            arrowClass = "top-1/2 -right-[6px] -translate-y-1/2 border-r border-t";
                        }

                        return (
                            <div
                                className={`absolute z-20 transform transition-all duration-300 ${positionClass} `}
                                style={containerStyle}
                            >
                                <div className="bg-[#000000] text-white p-3 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-[#FF0000] w-full relative">
                                    <div className="flex justify-between items-center gap-7">
                                        <h3 className="font-semibold text-xs sm:text-sm lg:text-[1vw] tracking-wide">{selectedAlert.title}</h3>
                                        <div className="flex items-center gap-1">
                                            <img
                                                src={imageImg}
                                                className='w-5 h-5 cursor-pointer'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowImageDialog(true);
                                                }}
                                            />
                                            <img
                                                src={videoImg}
                                                className='w-5 h-5 cursor-pointer'
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowVideoDialog(true);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6 flex items-center gap-1 mt-2">
                                        <span className="text-[10px] sm:text-xs lg:text-[0.8vw] font-medium text-[#ffffff]">{selectedAlert.camera.name}</span>
                                        <span className="text-[#ffffff]">|</span>
                                        <div className='flex items-center gap-1'>
                                            <svg width="10" height="13" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.49291 0.66125C4.03516 -0.234865 5.93084 -0.219202 7.45862 0.702278C8.97138 1.64253 9.8908 3.3206 9.88229 5.12573C9.84702 6.91901 8.86115 8.60471 7.6288 9.90783C6.91753 10.6633 6.12184 11.3314 5.25801 11.8984C5.16904 11.9498 5.07159 11.9843 4.97046 12C4.87313 11.9959 4.77834 11.9671 4.69465 11.9163C3.37583 11.0644 2.21882 9.97697 1.27929 8.70633C0.49312 7.64567 0.0464714 6.36424 0 5.03606L0.00351969 4.84284C0.0677097 3.10916 1.00574 1.52536 2.49291 0.66125ZM5.5816 3.55396C4.95464 3.28746 4.23179 3.43225 3.75058 3.92072C3.26936 4.40919 3.12469 5.14498 3.38411 5.78455C3.64354 6.42412 4.25589 6.8413 4.93525 6.84131C5.38031 6.8445 5.80813 6.66623 6.12339 6.34622C6.43866 6.02621 6.61516 5.59104 6.6136 5.13768C6.61596 4.44567 6.20856 3.82046 5.5816 3.55396Z" fill="#6C6C6C" />
                                            </svg>
                                            <span className='text-[10px] sm:text-xs lg:text-[0.8vw] font-medium text-[#ffffff]'>{selectedAlert.location.label}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-2 gap-6">
                                        <span className="text-[10px] sm:text-xs lg:text-[0.8vw] text-[#ffffff] font-normal">
                                            {selectedAlert.humanized}
                                        </span>
                                        <button
                                            className="bg-[#ff0000] hover:bg-[#cc0000] cursor-pointer text-white text-[10px] sm:text-xs lg:text-[0.7vw] font-semibold py-2 px-4 rounded-sm transition-colors uppercase tracking-wider"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowDetailsDialog(true);
                                            }}
                                        >
                                            Take Action
                                        </button>
                                    </div>

                                    {/* Callout Arrow */}
                                    <div
                                        className={`absolute w-3 h-3 bg-[#000000] border-[#333333] rotate-45 ${arrowClass}`}
                                    ></div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </div>

            {/* Bigger Popup..... */}
            {showDetailsDialog && (
                <AlertBigPopup
                    activeAlert={selectedAlert}
                    onClose={() => setShowDetailsDialog(false)}
                />
            )}

            {/* videoDialog */}
            {showVideoDialog && (
                <VideoDialog
                    activeAlert={selectedAlert}
                    onClose={() => setShowVideoDialog(false)}
                />
            )}

            {/* Image Dialog */}
            {showImageDialog && (
                <ImageDialog
                    activeAlert={selectedAlert}
                    onClose={() => setShowImageDialog(false)}
                />
            )}
        </>

    )
}

export default MapImp