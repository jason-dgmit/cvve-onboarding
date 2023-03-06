import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SettingsHeader() {

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
    {/* Page header */}
    <div className="mb-8">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">설정 ✨</h1>
    </div>
    </>
  );
}

export default SettingsHeader;