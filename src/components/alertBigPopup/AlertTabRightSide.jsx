import React from 'react'
import insightImage from "../../assets/ai-insight.svg";
import LiveFeed from './LiveFeed';
import EventVideo from './EventVideo';
import AlertTabMap from './AlertTabMap';
import AlertTabImageCarousel from './AlertTabImageCarousel';

const AlertTabRightSide = ({ data }) => {
    return (
        <div className='flex flex-col gap-2 h-full overflow-hidden px-2'>
            <div className='w-full lg:h-[25%] bg-[#222222] p-3 rounded-sm'>
                <div className='flex items-center gap-3 mb-1'>
                    <img src={insightImage} className='w-5 h-5' />
                    <span className='text-[#FBFBFB] text-sm sm:text-base lg:text-[2vh] font-semibold'>AI Insights</span>
                </div>
                <div className='flex flex-col mb-2'>
                    <span className='text-[#FBFBFB] font-normal text-xs sm:text-sm lg:text-[2vh]'>Compliance & Logging:</span>
                    <span className='text-[#FBFBFB] font-normal text-xs sm:text-sm lg:text-[2vh]'>Auto-log incident with timestamped video evidence.</span>
                    <span className='text-[#FBFBFB] font-normal text-xs sm:text-sm lg:text-[2vh]'>Generate compliance report for internal security audit.</span>
                    <span className='text-[#FBFBFB] font-normal text-xs sm:text-sm lg:text-[2vh]'>Notify local law enforcement if breach criteria met under SOP 9.2.</span>
                </div>
            </div>
            <div className='w-full flex-1 flex flex-col gap-1 overflow-hidden'>
                <div className='flex w-full h-[50%] gap-1 lg:gap-[0.6vw]'>
                    <LiveFeed
                        data={data}
                    />
                    <EventVideo
                        data={data}
                    />
                </div>
                <div className='flex w-full h-[50%] gap-1 lg:gap-[0.8vw]'>
                    <div className="w-full h-full">
                        <AlertTabMap
                            data={data}
                        />
                    </div>
                    <div className="w-full h-full">
                        <AlertTabImageCarousel
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertTabRightSide