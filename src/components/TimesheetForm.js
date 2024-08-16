import React, { useState } from 'react';

function TimesheetForm({ onAddTimesheet }) {
  const [employeeName, setEmployeeName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [hours, setHours] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timesheet = { employeeName, projectName, hours, date };
    onAddTimesheet(timesheet);
    setEmployeeName('');
    setProjectName('');
    setHours('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Employee Name</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Hours Worked</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          min="0"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Timesheet</button>
    </form>
  );
}

export default TimesheetForm;
