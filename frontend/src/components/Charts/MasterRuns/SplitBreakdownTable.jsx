const SplitBreakdownTable = ({ data }) => (
    <div>
      <h3 className="text-md font-semibold mb-2">Split Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-purple-900 text-black">
              <th className="p-2">Split</th>
              <th className="p-2">Speed (m/s)</th>
              <th className="p-2">HR</th>
              <th className="p-2">Elev Change</th>
              <th className="p-2">Pace Zone</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((split, index) => {
              const hrColor = split.average_heartrate > 170
                ? 'bg-red-200'
                : split.average_heartrate > 150
                ? 'bg-yellow-100'
                : 'bg-green-100';
  
              return (
                <tr key={index} className={`${hrColor} text-black border-b border-gray-700 text-center`}>
                  <td className="p-2">{split.split}</td>
                  <td className="p-2">{split.average_speed.toFixed(2)}</td>
                  <td className="p-2">{Math.round(split.average_heartrate)}</td>
                  <td className="p-2">{split.elevation_difference.toFixed(1)} m</td>
                  <td className="p-2">{split.pace_zone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  
export default SplitBreakdownTable;