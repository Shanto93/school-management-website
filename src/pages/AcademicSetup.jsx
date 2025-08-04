
import InputForm from '../modules/AcademicSetup/InputForm';
import ClassTable from '../modules/AcademicSetup/tables/ClassTable';
import SectionTable from '../modules/AcademicSetup/tables/SectionTable';
import GroupTable from '../modules/AcademicSetup/tables/GroupTable';
import ShiftTable from '../modules/AcademicSetup/tables/ShiftTable';
import PeriodTable from '../modules/AcademicSetup/tables/PeriodTable';
import MarkType from '../modules/AcademicSetup/tables/MarkType';
import SubjectTable from '../modules/AcademicSetup/tables/SubjectTable';
import RoleType from '../modules/AcademicSetup/tables/RoleType';
import AdmissionYear from '../modules/AcademicSetup/tables/AdmissionYear';


// const tableData = {
//   Class: ['HSC 27', 'HSC 26', 'HSC 25', 'SSC 26'],
//   Section: ['A', 'B', 'C', 'D'],
//   Group: ['Science', 'Business Studies', 'Humanities'],
//   Shift: ['Morning', 'Day', 'Evening'],
//   Subject: ['Math', 'Physics', 'Chemistry', 'Biology'],
//   Period: ['1st Period', '2nd Period', '3rd Period'],
//   'Mark Type': ['MCQ', 'Written', 'Practical'],
//   'Role Type': ['Admin', 'Teacher', 'Student'],
//   'Admission Year': ['2022', '2023', '2024'],
// };

const AcademicSetup = () => {
  // const types = Object.keys(tableData);

  return (
    <div className="p-4 md:p-6">
      <InputForm></InputForm>
      <ClassTable></ClassTable>
      <SectionTable></SectionTable>
      <GroupTable></GroupTable>
      <SubjectTable></SubjectTable>
      <ShiftTable></ShiftTable>
      <PeriodTable></PeriodTable>
      <MarkType></MarkType>
      <RoleType></RoleType>
      <AdmissionYear></AdmissionYear>

      {/* Tables */}
      {/* {types.map((type) => (
        <div key={type} className="bg-white shadow rounded overflow-x-auto mb-6">
          <div className="bg-indigo-100 text-center py-3 font-semibold text-gray-600 text-lg">
            {type} List
          </div>
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">{type.toUpperCase()} NAME</th>
                <th className="px-4 py-3 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {tableData[type].map((item, index) => (
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
      ))} */}
    </div>
  );
};

export default AcademicSetup;
