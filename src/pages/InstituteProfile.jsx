

import React from 'react';
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

const InstituteProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 -mt-4">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-xl py-6">
        Institute Information / <span className="font-semibold text-gray-600">Information</span>
      </div>

      {/* Banner */}
      <div className="mb-4 rounded">
        <div className="w-full h-28 bg-gradient-to-r from-cyan-400 via-pink-100 to-pink-300 rounded" />

        {/* Header */}
        <div className="bg-white shadow px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              className="-mt-16 border-4 rounded-lg border-white w-28 h-28 md:w-32 md:h-32"
              src="https://edudubbdbucket.s3.amazonaws.com/media/tenants/mpih/image/Physics_Logo-01_g9yqzzf.png"
              alt="Logo"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-700">Morshadul Physics & ICT Hub</h2>
              <p className="text-gray-400">Combined School · BOALIA, Rajshahi</p>
            </div>
          </div>
          <button className="bg-[#1d1e4e] text-white px-6 py-2 rounded w-full sm:w-auto">
            Active
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contact Info */}
        <div className="bg-white p-4 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Contact Information</h3>
          <p className="flex items-center gap-2 flex-wrap">
            <UserIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Head Master:</span>
            <span>Md. Morshadul Islam</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <PhoneIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Head Master Mobile No:</span>
            <span>01790238717</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <AcademicCapIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">ICT Teacher / Incharge:</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Incharge Mobile:</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Incharge Email:</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Institute Email:</span>
            <span>morshadul.cse.hstu@gmail.com</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <LinkIcon className="h-5 w-5 text-blue-500" />
            <span className="text-gray-500 font-medium">Facebook:</span>
            <a
              href="https://www.facebook.com/morshadul.shohan"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 break-all"
            >
              facebook.com/morshadul.shohan
            </a>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <LinkIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Youtube Link:</span>
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            <MapPinIcon className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium">Institute Address:</span>
            <span>Red crisent road, shaheb bazar, Rajshahi</span>
          </p>
        </div>

        {/* Institute Info */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Institute Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li><strong>Institute Id:</strong> 232879</li>
            <li><strong>EIIN No:</strong> None</li>
            <li><strong>Name:</strong> Morshadul Physics & ICT Hub</li>
            <li><strong>Board:</strong> Rajshahi</li>
            <li><strong>Division:</strong> Rajshahi</li>
            <li><strong>District:</strong> Rajshahi</li>
            <li><strong>Thana/Upazila:</strong> BOALIA</li>
            <li><strong>Status:</strong> Active</li>
            <li>
              <strong>Website:</strong>{' '}
              <a href="https://mpih.edutechbdl.com/" target="_blank" rel="noreferrer" className="text-blue-600 break-all">
                mpih.edutechbdl.com
              </a>
            </li>
            <li>
              <strong>Management Site:</strong>{' '}
              <a href="https://mpih.eduhubbd.online/" target="_blank" rel="noreferrer" className="text-blue-600 break-all">
                mpih.eduhubbd.online
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-center my-8">
        <button className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition text-lg w-full ">
          EDIT
        </button>
      </div>
    </div>
  );
};

export default InstituteProfile;