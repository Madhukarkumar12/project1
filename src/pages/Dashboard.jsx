import React, { useState, useMemo } from 'react'
import AlertSidebar from '../components/AlertSidebar';
import alertData from "../data/alertData.json";
import MapImp from '../components/MapImp';
import { getHumanizedDateTime } from '../utils/humanize';

const Dashboard = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Initialize alerts with unique random times once
  const synchronizedAlertData = useMemo(() => {
    return {
      ...alertData,
      alerts: alertData.alerts.map(alert => ({
        ...alert,
        humanized: getHumanizedDateTime()
      }))
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
      <div className='w-full lg:w-[78%] h-[60%] lg:h-full'>
        <MapImp
          alertData={synchronizedAlertData}
          selectedAlert={selectedAlert}
          setSelectedAlert={setSelectedAlert}
        />
      </div>
      <div className='w-full lg:w-[22%] h-[40%] lg:h-full'>
        <AlertSidebar
          alertdata={synchronizedAlertData}
          selectedAlert={selectedAlert}
          setSelectedAlert={setSelectedAlert}
        />
      </div>
    </div>
  )
}

export default Dashboard
