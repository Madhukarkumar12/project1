import React, { useState } from 'react'

const AlertSidebar = ({ alertdata, selectedAlert, setSelectedAlert }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const filteredAlerts = alertdata?.alerts?.filter(alert => 
        alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.location.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.camera.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className="h-full bg-gray-50 border-l border-[#F2F5F9] flex flex-col overflow-hidden">
            <div className="bg-[#F4F6F9] border-b border-[#E5E9F2] px-4 pt-3 flex flex-col flex-shrink-0">
                <div className="flex items-end justify-between w-full mb-2">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <h2 className="text-sm sm:text-base lg:text-[2vh] font-bold text-[#2C3E50]">
                            Alerts
                        </h2>
                        <div className="w-12 h-[0.3vh] bg-[#132740] mt-2 rounded-full"></div>
                    </div>

                    {/* Search Toggle Button */}
                    <button 
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className={`w-7 h-7 cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ${isSearchVisible ? 'bg-gray-200 text-gray-600' : 'bg-[#56C1D6] text-white hover:bg-[#3BB3CA]'}`}
                    >
                        {isSearchVisible ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Search Input Field */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchVisible ? 'max-h-12 opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search alerts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-gray-300 rounded-md py-1.5 pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#56C1D6] focus:border-[#56C1D6] transition-all"
                            autoFocus={isSearchVisible}
                        />
                        <svg className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>


            {/* Alert List */}
            <div className="flex-1 overflow-y-auto space-y-3 p-2">
                {filteredAlerts.length > 0 ? (
                    filteredAlerts.map((alert) => {
                        const isSelected = selectedAlert?.id === alert.id;
                        return (
                            <div
                                key={alert.id}
                                onClick={() => setSelectedAlert(alert)}
                                className={`cursor-pointer border-b border-gray-200 p-2 transition-all duration-200 rounded-md shadow-sm ${
                                    isSelected 
                                    ? "bg-[#000000] border-[#FF0000] border-2" 
                                    : "bg-[#FFFFFF] hover:bg-gray-50"
                                }`}
                            >
                                {/* Alert Title */}
                                <h3 className={`text-sm font-semibold mb-2 ${isSelected ? "text-white" : "text-gray-800"}`}>
                                    {alert.title}
                                </h3>

                                {/* Location */}
                                <div className="flex items-start mb-3">
                                    <svg className={`w-4 h-4 mt-0.5 mr-2 ${isSelected ? "text-white" : "text-blue-600"}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className={`text-[10px] sm:text-xs lg:text-[1.5vh] ${isSelected ? "text-white" : "text-gray-600"}`}>{alert.location.label}</span>
                                </div>

                                <div className={`w-full h-[0.01vh] mb-2 ${isSelected ? "bg-gray-700" : "bg-gray-300"}`}></div>

                                <div className="flex items-center justify-between text-xs">
                                    <span className={`font-semibold text-[10px] sm:text-xs lg:text-[1.5vh] ${isSelected ? "text-white" : "text-[#132740]"}`}>{alert.camera.name}</span>
                                    <span className={`font-medium text-[10px] sm:text-xs lg:text-[1.5vh] ${isSelected ? "text-gray-400" : "text-[#8693A8]"}`}>{alert.humanized}</span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                        <svg className="w-10 h-10 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-sm">No alerts found</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlertSidebar;