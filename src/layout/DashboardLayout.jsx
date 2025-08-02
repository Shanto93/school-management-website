import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-12'>
        {/* sidebar */}
      <div className='col-span-3 min-h-screen bg-amber-400'>sidebar here</div>
      {/* content here */}
      <div className='col-span-9 ml-5'><Outlet /></div>
    </div>
  );
};

export default DashboardLayout;
