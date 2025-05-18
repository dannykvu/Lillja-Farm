import React from 'react';

// Define types for daily hours
interface Hours {
  day: string;
  open: string;
  close: string;
}

// Weekly schedule
const weeklyHours: Hours[] = [
  { day: 'Monday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Saturday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Sunday', open: '9:00 AM', close: '4:00 PM' },
];

// Special closure days
const specialClosures: string[] = [
  'Christmas Day',
  "New Year's Day",
];

// StoreHours component
const StoreHours: React.FC = () => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Store Hours</h2>
    <ul>
      {weeklyHours.map(({ day, open, close }) => (
        <li key={day} className="flex justify-between py-1">
          <span className="font-medium text-gray-700">{day}</span>
          <span className="text-gray-600">{`${open} – ${close}`}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800">Closed On</h3>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        {specialClosures.map((holiday) => (
          <li key={holiday}>{holiday}</li>
        ))}
      </ul>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800">Location</h3>
      <address className="not-italic text-gray-600 mt-2">
        14602 Lillja Rd<br />
        Houston, TX 77060
      </address>
    </div>
  </div>
);

export default StoreHours;
