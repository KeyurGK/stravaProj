// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { HeartPulse, Move, Timer, GaugeCircle, BarChart3 } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSpecificActivity } from '../../../Redux/Activities/StravaActivitySlice';
// import { useEffect } from 'react';

// const MasterRunsModal = ({ activityId, onClose }) => {
//   // const heartRateData = activity.heart_rate_series || [];
//   console.log(activityId,'idddd')
// const dispatch = useDispatch();
// useEffect(()=>{
// dispatch(getSpecificActivity(activityId))
// },[])

// const {specificActivity} = useSelector((state) => state.stravaActivities);
// console.log(specificActivity,'specccccc')
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//       <div className="bg-[#111] p-6 rounded-xl border border-purple-400 text-white w-full max-w-xl shadow-xl relative">
//         <button onClick={onClose} className="absolute top-2 right-3 text-white text-xl">&times;</button>
//         <h2 className="text-xl font-bold mb-4">{specificActivity.name}</h2>

//         <div className="grid grid-cols-2 gap-4">
//           <p><Move className="inline mr-2" /> <strong>Distance:</strong> {specificActivity.distance} m</p>
//           <p><Timer className="inline mr-2" /> <strong>Moving Time:</strong> {specificActivity.moving_time} s</p>
//           <p><GaugeCircle className="inline mr-2" /> <strong>Average Speed:</strong> {specificActivity.average_speed} m/s</p>
//           <p><BarChart3 className="inline mr-2" /> <strong>Cadence:</strong> {specificActivity.average_cadence}</p>
//           <p><strong>Elevation High:</strong> {specificActivity.elev_high} m</p>
//           <p><strong>Elevation Low:</strong> {specificActivity.elev_low} m</p>
//           <p><HeartPulse className="inline mr-2" /> <strong>Heart Rate:</strong> {specificActivity.average_heartrate}/{specificActivity.max_heartrate}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MasterRunsModal;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  HeartPulse,
  Move,
  Timer,
  GaugeCircle,
  BarChart3
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpecificActivity } from '../../../Redux/Activities/StravaActivitySlice';
import SpeedChart from '../../Charts/MasterRuns/SpeedChart';
import HeartRateChart from '../../Charts/MasterRuns/HeartRateChart';
import SplitBreakdownTable from '../../Charts/MasterRuns/SplitBreakdownTable';

const StatRow = ({ icon: Icon, label, value, unit }) => (
  <p className="flex items-center">
    <Icon className="inline mr-2" /> <strong>{label}:</strong> {value} {unit}
  </p>
);

// const SpeedChart = ({ data }) => (
//   <div className="mb-6">
//     <h3 className="text-md font-semibold mb-2">Speed Over Splits</h3>
//     <ResponsiveContainer width="100%" height={200}>
//       <LineChart data={data}>
//         <XAxis dataKey="split" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="average_speed" stroke="#8884d8" name="Speed (m/s)" />
//         <Line type="monotone" dataKey="average_grade_adjusted_speed" stroke="#82ca9d" name="GAP Speed (m/s)" />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// const HeartRateChart = ({ data }) => (
//   <div className="mb-6">
//     <h3 className="text-md font-semibold mb-2">Heart Rate Trends</h3>
//     <ResponsiveContainer width="100%" height={200}>
//       <LineChart data={data}>
//         <XAxis dataKey="split" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="average_heartrate" stroke="#ff4d4f" name="Heart Rate" />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// const SplitBreakdownTable = ({ data }) => (
//   <div>
//     <h3 className="text-md font-semibold mb-2">Split Breakdown</h3>
//     <div className="overflow-x-auto">
//       <table className="w-full text-sm border-collapse">
//         <thead>
//           <tr className="bg-purple-900 text-black">
//             <th className="p-2">Split</th>
//             <th className="p-2">Speed (m/s)</th>
//             <th className="p-2">HR</th>
//             <th className="p-2">Elev Change</th>
//             <th className="p-2">Pace Zone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((split, index) => {
//             const hrColor = split.average_heartrate > 170
//               ? 'bg-red-200'
//               : split.average_heartrate > 150
//               ? 'bg-yellow-100'
//               : 'bg-green-100';

//             return (
//               <tr key={index} className={`${hrColor} text-black border-b border-gray-700 text-center`}>
//                 <td className="p-2">{split.split}</td>
//                 <td className="p-2">{split.average_speed.toFixed(2)}</td>
//                 <td className="p-2">{Math.round(split.average_heartrate)}</td>
//                 <td className="p-2">{split.elevation_difference.toFixed(1)} m</td>
//                 <td className="p-2">{split.pace_zone}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

const MasterRunsModal = ({ activityId, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificActivity(activityId));
  }, [activityId, dispatch]);

  const { specificActivity } = useSelector((state) => state.stravaActivities);
  const splitsData = specificActivity?.splits_metric || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-auto">
      <div className="bg-[#111] p-6 rounded-xl border border-purple-400 text-white w-full max-w-6xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-white text-xl">&times;</button>

        <h2 className="text-xl font-bold mb-4">{specificActivity?.name}</h2>
<div className='grid md:grid-cols-3'>
<div className="grid grid-cols-1 mb-6">
          <StatRow icon={Move} label="Distance" value={specificActivity?.distance} unit="m" />
          <StatRow icon={Timer} label="Moving Time" value={specificActivity?.moving_time} unit="s" />
          <StatRow icon={GaugeCircle} label="Avg Speed" value={specificActivity?.average_speed} unit="m/s" />
          <StatRow icon={BarChart3} label="Cadence" value={specificActivity?.average_cadence} unit="" />
          <StatRow icon={HeartPulse} label="Heart Rate" value={`${specificActivity?.average_heartrate}/${specificActivity?.max_heartrate}`} unit="bpm" />
          <StatRow icon={GaugeCircle} label="Elevation High/Low" value={`${specificActivity?.elev_high}/${specificActivity?.elev_low}`} unit="m" />
        </div>
        <div className='grid md:gird-rows-2'>
        <SpeedChart data={splitsData} />
        <HeartRateChart data={splitsData} />
        </div>
        <div>
           <SplitBreakdownTable data={splitsData} />
        </div>
</div>
        

      
       
      </div>
    </div>
  );
};

export default MasterRunsModal;

