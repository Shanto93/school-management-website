import React from 'react';

const InstituteInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-y-auto">
      {/* Header */}
      <div className="bg-indigo-900 text-white flex items-center justify-between px-6 py-4 shadow">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-10 w-10 rounded-full border border-white"
          />
          <span className="text-lg font-semibold">Morshadul Physics & ICT Hub</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xl">🔔</button>
          <img
            src="/profile.jpg" // Replace with profile image if needed
            alt="Profile"
            className="h-10 w-10 rounded-full border border-white"
          />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 px-6 py-2">
        Institute Information / <span className="font-semibold text-gray-800">Information</span>
      </div>

      {/* Banner */}
      <div className="w-full h-20 bg-gradient-to-r from-cyan-400 via-pink-100 to-pink-300"></div>

      {/* Institute Header */}
      <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <h2 className="text-lg font-bold">Morshadul Physics & ICT Hub</h2>
            <p className="text-sm text-gray-500">Combined School · BOALIA, Rajshahi</p>
          </div>
        </div>
        <button className="bg-indigo-700 text-white px-4 py-1 rounded">Active</button>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-4 px-6 py-6">
        {/* Left: Contact Information */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-md font-semibold mb-2">Contact Information</h3>
          <p><strong>Head Master:</strong> Md. Morshadul Islam</p>
          <p><strong>Head Master Mobile No:</strong> 01790238717</p>
          <p><strong>ICT Teacher / Incharge:</strong></p>
          <p><strong>Incharge Mobile:</strong></p>
          <p><strong>Incharge Email:</strong></p>
          <p><strong>Institute Email:</strong> morshadul.cse.hstu@gmail.com</p>
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com/morshadul.shohan" className="text-blue-600" target="_blank" rel="noreferrer">facebook.com/morshadul.shohan</a></p>
          <p><strong>Youtube Link:</strong></p>
          <p><strong>Institute Address:</strong> Red crisent road, shaheb bazar, Rajshahi</p>
        </div>

        {/* Right: Institute Information */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-md font-semibold mb-2">Institute Information</h3>
          <ul className="space-y-1">
            <li><strong>Institute Id:</strong> 232879</li>
            <li><strong>EIIN No:</strong> None</li>
            <li><strong>Name:</strong> Morshadul Physics & ICT Hub</li>
            <li><strong>Board:</strong> Rajshahi</li>
            <li><strong>Division:</strong> Rajshahi</li>
            <li><strong>District:</strong> Rajshahi</li>
            <li><strong>Thana/Upazila:</strong> BOALIA</li>
            <li><strong>Status:</strong> Active</li>
            <li><strong>Website:</strong> <a href="https://mpih.edutechbdl.com/" className="text-blue-600" target="_blank" rel="noreferrer">mpih.edutechbdl.com</a></li>
            <li><strong>Management Site:</strong> <a href="https://mpih.eduhubbd.online/" className="text-blue-600" target="_blank" rel="noreferrer">mpih.eduhubbd.online</a></li>
          </ul>
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
          EDIT
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white text-center py-4 text-sm">
        <div className='flex justify-between'>
            © 2025, made with ❤️ by <strong>EduHub</strong>
        </div>
        <div className="mt-2 flex justify-center gap-4 text-indigo-300">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default InstituteInfo;
