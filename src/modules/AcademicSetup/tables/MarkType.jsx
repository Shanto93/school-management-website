import React from 'react';

const MarkType = ({ data = ['MCQ', 'Written', 'Practical'] }) => {
    return (
        <div className="bg-white shadow rounded overflow-x-auto mb-6">
            <div className="bg-indigo-100 text-center py-3 font-semibold text-gray-600 text-lg">
                Mark Type List
            </div>
            <table className="w-full table-auto text-center">
                <thead>
                    <tr className="text-gray-500 text-sm">
                        <th className="px-4 py-3 font-medium">ID</th>
                        <th className="px-4 py-3 font-medium">MARK TYPE NAME</th>
                        <th className="px-4 py-3 font-medium">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index} className="border-t text-sm text-gray-500">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{item}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button className="bg-[#1d1e4e] text-white px-3 py-1 rounded text-sm">Edit</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarkType;