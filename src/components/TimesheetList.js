// import React from 'react';

// function TimesheetList({ timesheets }) {
//   return (
//     <div className="max-w-md mx-auto mt-4">
//       <h2 className="text-xl font-bold mb-2">Timesheet List</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border-b">Employee</th>
//             <th className="px-4 py-2 border-b">Project Name</th>
//             <th className="px-4 py-2 border-b">Hours Worked</th>
//             <th className="px-4 py-2 border-b">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {timesheets.map((timesheet, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="px-4 py-2 border-b">{timesheet.employeeName}</td>
//               <td className="px-4 py-2 border-b">{timesheet.projectName}</td>
//               <td className="px-4 py-2 border-b">{timesheet.hours}</td>
//               <td className="px-4 py-2 border-b">{timesheet.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TimesheetList;





// import React from 'react';

// function TimesheetList({ timesheets }) {
//   // Assuming that timesheets contain data for the week of August 5th to August 10th
//   const weekDates = ['5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug'];

//   return (
//     <div className="max-w-md mx-auto mt-4">
//       <div className="flex justify-between mb-4">
//         <h1 className="text-xl font-bold">Project Name</h1>
//         <h1 className="text-xl font-bold">Employee Name</h1>
//       </div>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             {weekDates.map((date, index) => (
//               <th key={index} className="px-4 py-2 border-b">
//                 {date}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {timesheets.map((timesheet, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="px-4 py-2 border-b">{timesheet.employeeName} - {timesheet.projectName}</td>
//               {weekDates.map((date, dateIndex) => (
//                 <td key={dateIndex} className="px-4 py-2 border-b">
//                   {timesheet.hoursPerDay[dateIndex] || 0}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TimesheetList;

import React from 'react';

function TimesheetList({ timesheets }) {
  const weekDates = ['5', '6', '7', '8', '9', '10'];

  return (
    <div className="max-w-lg mx-auto mt-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Employee / Project</th>
            <th className="px-4 py-2 border-b">Date</th>
            {weekDates.map((date, index) => (
              <th key={index} className="px-4 py-2 border-b">{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">
                {timesheet.employeeName} / {timesheet.projectName}
              </td>
              <td className="px-4 py-2 border-b">{timesheet.fullDate || 'N/A'}</td>
              {weekDates.map((date, dateIndex) => (
                <td key={dateIndex} className="px-4 py-2 border-b">
                  {timesheet.hoursPerDay?.[dateIndex] || 0}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimesheetList;
