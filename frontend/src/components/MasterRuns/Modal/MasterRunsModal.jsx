// import React from "react";

// const MasterRunsModal = ({ activities, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="bg-black text-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl animate-fade-in border border-gray-400">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Master Runs</h2>
//           <button onClick={onClose} className="text-white text-2xl hover:text-gray-400">&times;</button>
//         </div>
//         <div className="space-y-4 max-h-[70vh] overflow-y-auto">
//           {activities && activities.length > 0 ? (
//             activities.map((activity, idx) => (
//               <div key={idx} className="border border-gray-700 p-4 rounded-lg">
//                 <p><strong>{activity.name}</strong></p>
//                 <p className="text-sm text-gray-300">Distance: {activity.distance}m</p>
//                 <p className="text-sm text-gray-300">Date: {activity.date}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400">No activities found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MasterRunsModal;
const MasterRunsModal = ({ activity, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-[#111] p-6 rounded-xl text-white w-full max-w-xl shadow-xl relative">
          <button onClick={onClose} className="absolute top-2 right-3 text-white text-xl">&times;</button>
          <h2 className="text-xl font-bold mb-4">{activity.name}</h2>
          <div className="space-y-2">
            <p><strong>Distance:</strong> {activity.distance} m</p>
            <p><strong>Moving Time:</strong> {activity.moving_time} s</p>
            <p><strong>Elapsed Time:</strong> {activity.elapsed_time} s</p>
            <p><strong>Start Time:</strong> {activity.start_date_local}</p>
            <p><strong>Average Speed:</strong> {activity.average_speed} m/s</p>
            <p><strong>Heart Rate (avg/max):</strong> {activity.average_heartrate}/{activity.max_heartrate}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MasterRunsModal;
  