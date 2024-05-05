import React from 'react';
const queue = [
  {
    id: 1,
    ssn: 220102278,
  },
  {
    id: 12,
    ssn: 220102278,
  },
  {
    id: 14,
    ssn: 2234278,
  },
  {
    id: 17,
    ssn: 220123102278,
  },
  {
    id: 13,
    ssn: 220123402278,
  },
  {
    id: 19,
    ssn: 22011302278,
  },
  {
    id: 23,
    ssn: 223120102278,
  },
];



const AdminPage = () => {
  return (
    <div className="bg-purple-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-purple-600 text-white font-bold rounded-lg shadow-lg p-6">
        <h2 className="text-2xl mb-4">Get Things Done!</h2>
        <div className="space-y-3">
          {queue.map(task => (
            <div key={task.id} className="flex justify-between items-center bg-purple-500 p-3 rounded">
              {task.id}
              <span>{task.ssn}</span>
              <div>
                <button className="text-purple-200 hover:text-white">
                  Done
                </button>
                <button className="text-purple-200 hover:text-white ml-2">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
