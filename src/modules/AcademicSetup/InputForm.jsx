import { useState } from 'react';

const InputForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // You can send `formData` to an API here
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div className="text-gray-400 text-lg mb-6">
                Settings / <span className="text-gray-700 font-semibold">Academic Setup</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white shadow rounded-md p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">SELECT TYPE</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                        >
                            <option value="">-- Select Type --</option>
                            <option value="Class">Class</option>
                            <option value="Section">Section</option>
                            <option value="Group">Group</option>
                            <option value="Shift">Shift</option>
                            <option value="Subject">Subject</option>
                            <option value="Period">Period</option>
                            <option value="Mark Type">Mark Type</option>
                            <option value="Role Type">Role Type</option>
                            <option value="Admission Year">Admission Year</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">TYPE NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Item Name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="bg-[#1d1e4e] text-white px-6 py-2 rounded hover:bg-[#15163a] transition"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputForm;
