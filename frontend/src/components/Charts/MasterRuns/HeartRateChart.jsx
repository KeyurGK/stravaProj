
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
  
const HeartRateChart = ({ data }) => (
  <div className="mb-6">
    <h3 className="text-md font-semibold mb-2">Heart Rate Trends</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="split" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="average_heartrate" stroke="#ff4d4f" name="Heart Rate" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);


export default HeartRateChart;