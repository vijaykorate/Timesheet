// import React, { useState } from 'react';
// import TimesheetForm from './components/TimesheetForm';
// import TimesheetList from './components/TimesheetList';

// function App() {
//   const [timesheets, setTimesheets] = useState([]);

//   const addTimesheet = (timesheet) => {
//     setTimesheets([...timesheets, timesheet]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center mb-4">Timesheet App</h1>
//       <TimesheetForm onAddTimesheet={addTimesheet} />
//       <TimesheetList timesheets={timesheets} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TimesheetForm from './components/TimesheetForm';
import TimesheetList from './components/TimesheetList';

function App() {
  const [timesheets, setTimesheets] = useState([]);

  const addTimesheet = (timesheet) => {
    const day = new Date(timesheet.date).getDate();

    const formattedTimesheet = {
      ...timesheet,
      fullDate: `${day} ${new Date(timesheet.date).toLocaleString('default', { month: 'short' })}`,
      hoursPerDay: Array(6).fill(0),
    };

    const dayIndex = day - 5;
    if (dayIndex >= 0 && dayIndex < 6) {
      formattedTimesheet.hoursPerDay[dayIndex] = timesheet.hours;
    }

    setTimesheets([...timesheets, formattedTimesheet]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Timesheet App</h1>
      <TimesheetForm onAddTimesheet={addTimesheet} />
      <TimesheetList timesheets={timesheets} />
    </div>
  );
}

export default App;
