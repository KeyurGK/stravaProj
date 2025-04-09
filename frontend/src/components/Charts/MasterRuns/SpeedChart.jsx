import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
  
const SpeedChart = ({ data }) => (
  <div className="mb-6">
    <h3 className="text-md font-semibold mb-2">Speed Over Splits</h3>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="split" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="average_speed" stroke="#8884d8" name="Speed (m/s)" />
        <Line type="monotone" dataKey="average_grade_adjusted_speed" stroke="#82ca9d" name="GAP Speed (m/s)" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SpeedChart;