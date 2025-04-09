// import { useState } from "react";
// import MasterRunsModal from "./Modal/MasterRunsModal";

// const MasterRunsTable = ({ runs }) => {
  
//     const activities = [
//         {
//             "resource_state": 2,
//             "athlete": {
//                 "id": 70577838,
//                 "resource_state": 1
//             },
//             "name": "Morning Run",
//             "distance": 12745.7,
//             "moving_time": 5303,
//             "elapsed_time": 6084,
//             "total_elevation_gain": 81.0,
//             "type": "Run",
//             "sport_type": "Run",
//             "workout_type": null,
//             "id": 14092988586,
//             "start_date": "2025-04-06T02:08:39Z",
//             "start_date_local": "2025-04-06T07:38:39Z",
//             "timezone": "(GMT+05:30) Asia/Kolkata",
//             "utc_offset": 19800.0,
//             "location_city": null,
//             "location_state": null,
//             "location_country": null,
//             "achievement_count": 0,
//             "kudos_count": 6,
//             "comment_count": 0,
//             "athlete_count": 1,
//             "photo_count": 0,
//             "map": {
//                 "id": "a14092988586",
//                 "summary_polyline": "e{_nAomoxM?XNZjAGr@BLFz@Cx@M\\B\\Ox@@^PT@dAGfAJnAGd@BRGXk@FwAFa@LQFgC?qCG[YWk@w@Qa@QMeA[oAm@[iA[e@y@e@CIJe@@{@EU_@e@E[TgA?yA_@q@Uq@s@{@C_@@mAMYW?CK`@s@@SE]EuCEeAKu@aDcCUY_AuBMcAMc@u@qAg@m@Sm@?UGIUMcA]QV_@~A@PNJCVUz@E|@i@bDUpCHNDrAPZh@lBAd@GTIH_@J_COgBA_@KuAMOO_@CILDXRb@CP[hAEd@y@zDUd@Ch@Hn@Eb@QZYT]L_APu@Ee@F[JSRG\\Ah@DTX~@R`@RRt@`@\\DlA\\j@BnDr@|Ez@rG~@d@LHL?Fe@b@I^h@nBVnBXfAb@b@TBJPCD@PVd@nA?f@Dt@@j@Gp@@RK\\Cf@?ZFRJfE@vAGXQP[Ps@?cAT[?uDC}@Bs@iAiAWe@USiCkAISSy@OU}@k@IMHi@?}@IYYMISBq@L]DyAG[o@uAq@aAAeBGOIIM@KGBS`@i@IeAEkAGc@CwBGWqBwAUYc@YQUy@oBOmAUe@m@eAm@u@Ia@Q]gAm@I@OZ]dA?VLVAZS~@ShBWhAW`DJnBLj@f@tAH`@EZS\\]DeIc@o@YOAOF?d@PP@^]pAy@hEQl@C\\BfAEVO^]V_A`@_@BoAE_@J[TKjABVNb@NPPb@VZ`@XfDj@lDt@xC\\|Cn@fCZ`Bb@DFa@b@KVN~@Xt@d@|D\\TDJt@VET?HLb@nAC`BJb@Iz@?p@Of@Bn@NdDG`@EhBGZWF[DeAFc@JICgAFaAE}@@}AMUeBoBSMaBq@c@Wg@_BcAs@CMHQDWE}@Q[UIE[@MTcA@qAKa@a@y@{@gA?{BUOQ?AEd@}@IaAI{EI[SSyC}Be@q@i@mAIg@Cc@Mc@o@gAo@{@MW?YCKMMq@OWQO@Qp@O|@HTAXQz@OdBk@lDI`BJhA?VF^x@|BAb@IN[Ng@C_@EkDSe@KyAMc@KY?APX|@YfB_@dB[fBQj@CRFjAGd@UZYPa@J_AJk@E_@Bc@RS\\Kv@Nz@JRj@v@p@h@rI~AnALhMvBHPe@XMj@Xx@^hCBFN@",
//                 "resource_state": 2
//             },
//             "trainer": false,
//             "commute": false,
//             "manual": false,
//             "private": false,
//             "visibility": "everyone",
//             "flagged": false,
//             "gear_id": "g18945278",
//             "start_latlng": [
//                 12.947878,
//                 77.580562
//             ],
//             "end_latlng": [
//                 12.948324,
//                 77.581431
//             ],
//             "average_speed": 2.403,
//             "max_speed": 3.588,
//             "average_cadence": 81.4,
//             "has_heartrate": true,
//             "average_heartrate": 167.4,
//             "max_heartrate": 184.0,
//             "heartrate_opt_out": false,
//             "display_hide_heartrate_option": true,
//             "elev_high": 919.5,
//             "elev_low": 902.8,
//             "upload_id": 15043215325,
//             "upload_id_str": "15043215325",
//             "external_id": "garmin_ping_426342097456",
//             "from_accepted_tag": false,
//             "pr_count": 0,
//             "total_photo_count": 0,
//             "has_kudoed": false
//         },
//         {
//             "resource_state": 2,
//             "athlete": {
//                 "id": 70577838,
//                 "resource_state": 1
//             },
//             "name": "Morning Run",
//             "distance": 5026.1,
//             "moving_time": 1981,
//             "elapsed_time": 2247,
//             "total_elevation_gain": 13.0,
//             "type": "Run",
//             "sport_type": "Run",
//             "workout_type": null,
//             "id": 14064666082,
//             "start_date": "2025-04-03T01:39:33Z",
//             "start_date_local": "2025-04-03T07:09:33Z",
//             "timezone": "(GMT+05:30) Asia/Kolkata",
//             "utc_offset": 19800.0,
//             "location_city": null,
//             "location_state": null,
//             "location_country": null,
//             "achievement_count": 0,
//             "kudos_count": 8,
//             "comment_count": 0,
//             "athlete_count": 1,
//             "photo_count": 0,
//             "map": {
//                 "id": "a14064666082",
//                 "summary_polyline": "e{_nA{moxMEPDTHJJ@f@KhA@l@Fz@IXB`@ADC\\Ed@Bp@JZG^@ZDVC|@?`@@pACVQPUFoAAWEEY@a@C}@[aBa@]CeA?e@Ac@GwA_@kAKoA@e@Jg@h@u@Vg@De@KYSScAs@cCe@eAW[c@KoC_@qDq@}B]{Ba@}ASgAWa@WQQg@aAKe@Ae@Bi@Lm@ZWJCjAMp@DZE\\Kt@o@RM^@^B|Cb@~ALnDt@^DxDr@v@H`@J\\RXXR^Lb@FvAC\\QfAUf@m@t@_@TsA`@KFWXEX@PJNVz@@H?TTbALHh@HZGXOdAcAlBGj@LdALnAT|AJ`@@z@JpCp@\\?VNBhAEFMDcAB_DK{CJmCAuAFgAMmBAe@YYEKHCF@TLNT?d@YHAZP?PBVDPJ@`@ClAAN?PF^C|@@^A^Ih@C^BZL~AC|B?l@Ch@KNSHY?WD_@Gi@KCg@@sCy@e@G}@BeAEo@QmB[o@AyAFYNa@^",
//                 "resource_state": 2
//             },
//             "trainer": false,
//             "commute": false,
//             "manual": false,
//             "private": false,
//             "visibility": "everyone",
//             "flagged": false,
//             "gear_id": "g18945278",
//             "start_latlng": [
//                 12.947877,
//                 77.58062
//             ],
//             "end_latlng": [
//                 12.947711,
//                 77.581465
//             ],
//             "average_speed": 2.537,
//             "max_speed": 3.514,
//             "average_cadence": 82.3,
//             "has_heartrate": true,
//             "average_heartrate": 156.0,
//             "max_heartrate": 179.0,
//             "heartrate_opt_out": false,
//             "display_hide_heartrate_option": true,
//             "elev_high": 915.9,
//             "elev_low": 902.8,
//             "upload_id": 15013387392,
//             "upload_id_str": "15013387392",
//             "external_id": "garmin_ping_425390786082",
//             "from_accepted_tag": false,
//             "pr_count": 0,
//             "total_photo_count": 0,
//             "has_kudoed": false
//         },
//      ]
//   const [pageSize, setPageSize] = useState(25);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedActivity, setSelectedActivity] = useState(null);

//   const totalPages = Math.ceil(runs.length / pageSize);
//   const paginatedData = runs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   const handleView = (activity) => {
//     setSelectedActivity(activity);
//   };

//   const handlePageSizeChange = (e) => {
//     setPageSize(Number(e.target.value));
//     setCurrentPage(1); // Reset to first page when page size changes
//   };

//   return (
//     <div className="text-purple-400 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           Show{" "}
//           <select value={pageSize} onChange={handlePageSizeChange} className="text-black p-1 rounded">
//             {[25, 50, 75, 100].map((size) => (
//               <option key={size} value={size}>{size}</option>
//             ))}
//           </select>{" "}
//           entries
//         </div>
//         <div>
//           Page {currentPage} of {totalPages}
//         </div>
//       </div>

//       <table className="w-full border border-purple-400 text-sm">
//         <thead className="bg-black">
//           <tr>
//             <th className="border border-purple-400 p-2">Sl No</th>
//             <th className="border border-purple-400 p-2">Name</th>
//             <th className="border border-purple-400 p-2">Distance (m)</th>
//             <th className="border border-purple-400 p-2">Moving Time (s)</th>
//             <th className="border border-purple-400 p-2">Elapsed Time (s)</th>
//             <th className="border border-purple-400 p-2">Start Time</th>
//             <th className="border border-purple-400 p-2">Avg Speed (m/s)</th>
//             <th className="border border-purple-400 p-2">View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((activity, index) => (
//             <tr key={activity.id} className="text-center hover:bg-gray-800">
//               <td className="border border-purple-400 p-2">{(currentPage - 1) * pageSize + index + 1}</td>
//               <td className="border border-purple-400 p-2">{activity.name}</td>
//               <td className="border border-purple-400 p-2">{activity.distance}</td>
//               <td className="border border-purple-400 p-2">{activity.moving_time}</td>
//               <td className="border border-purple-400 p-2">{activity.elapsed_time}</td>
//               <td className="border border-purple-400 p-2">{activity.start_date_local}</td>
//               <td className="border border-purple-400 p-2">{activity.average_speed}</td>
//               <td
//                 className="border border-purple-400 p-2 text-blue-400 cursor-pointer hover:underline"
//                 onClick={() => handleView(activity)}
//               >
//                 View
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-end mt-4 gap-2">
//         <button
//           className="px-3 py-1 border border-white rounded disabled:opacity-30"
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {[...Array(totalPages)].map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentPage(idx + 1)}
//             className={`px-3 py-1 border border-white rounded ${
//               currentPage === idx + 1 ? "bg-white text-black" : ""
//             }`}
//           >
//             {idx + 1}
//           </button>
//         ))}
//         <button
//           className="px-3 py-1 border border-white rounded disabled:opacity-30"
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal */}
//       {selectedActivity && (
//         <MasterRunsModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
//       )}
//     </div>
//   );
// };

// export default MasterRunsTable;
import { useState } from "react";
import MasterRunsModal from "./Modal/MasterRunsModal";

const formatTime = (seconds) => {
  
  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const formatDate = (iso) => {
  const date = new Date(iso);
  const istDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const dd = istDate.getDate().toString().padStart(2, "0");
  const mm = (istDate.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = istDate.getFullYear();

  const hh = istDate.getHours().toString().padStart(2, "0");
  const min = istDate.getMinutes().toString().padStart(2, "0");
  const ss = istDate.getSeconds().toString().padStart(2, "0");

  return `${dd}-${mm}-${yyyy}`;
};
const MasterRunsTable = ({ runs }) => {
  const activities = [
    {
        "resource_state": 2,
        "athlete": {
            "id": 70577838,
            "resource_state": 1
        },
        "name": "Morning Run",
        "distance": 12745.7,
        "moving_time": 5303,
        "elapsed_time": 6084,
        "total_elevation_gain": 81.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null,
        "id": 14092988586,
        "start_date": "2025-04-06T02:08:39Z",
        "start_date_local": "2025-04-06T07:38:39Z",
        "timezone": "(GMT+05:30) Asia/Kolkata",
        "utc_offset": 19800.0,
        "location_city": null,
        "location_state": null,
        "location_country": null,
        "achievement_count": 0,
        "kudos_count": 6,
        "comment_count": 0,
        "athlete_count": 1,
        "photo_count": 0,
        "map": {
            "id": "a14092988586",
            "summary_polyline": "e{_nAomoxM?XNZjAGr@BLFz@Cx@M\\B\\Ox@@^PT@dAGfAJnAGd@BRGXk@FwAFa@LQFgC?qCG[YWk@w@Qa@QMeA[oAm@[iA[e@y@e@CIJe@@{@EU_@e@E[TgA?yA_@q@Uq@s@{@C_@@mAMYW?CK`@s@@SE]EuCEeAKu@aDcCUY_AuBMcAMc@u@qAg@m@Sm@?UGIUMcA]QV_@~A@PNJCVUz@E|@i@bDUpCHNDrAPZh@lBAd@GTIH_@J_COgBA_@KuAMOO_@CILDXRb@CP[hAEd@y@zDUd@Ch@Hn@Eb@QZYT]L_APu@Ee@F[JSRG\\Ah@DTX~@R`@RRt@`@\\DlA\\j@BnDr@|Ez@rG~@d@LHL?Fe@b@I^h@nBVnBXfAb@b@TBJPCD@PVd@nA?f@Dt@@j@Gp@@RK\\Cf@?ZFRJfE@vAGXQP[Ps@?cAT[?uDC}@Bs@iAiAWe@USiCkAISSy@OU}@k@IMHi@?}@IYYMISBq@L]DyAG[o@uAq@aAAeBGOIIM@KGBS`@i@IeAEkAGc@CwBGWqBwAUYc@YQUy@oBOmAUe@m@eAm@u@Ia@Q]gAm@I@OZ]dA?VLVAZS~@ShBWhAW`DJnBLj@f@tAH`@EZS\\]DeIc@o@YOAOF?d@PP@^]pAy@hEQl@C\\BfAEVO^]V_A`@_@BoAE_@J[TKjABVNb@NPPb@VZ`@XfDj@lDt@xC\\|Cn@fCZ`Bb@DFa@b@KVN~@Xt@d@|D\\TDJt@VET?HLb@nAC`BJb@Iz@?p@Of@Bn@NdDG`@EhBGZWF[DeAFc@JICgAFaAE}@@}AMUeBoBSMaBq@c@Wg@_BcAs@CMHQDWE}@Q[UIE[@MTcA@qAKa@a@y@{@gA?{BUOQ?AEd@}@IaAI{EI[SSyC}Be@q@i@mAIg@Cc@Mc@o@gAo@{@MW?YCKMMq@OWQO@Qp@O|@HTAXQz@OdBk@lDI`BJhA?VF^x@|BAb@IN[Ng@C_@EkDSe@KyAMc@KY?APX|@YfB_@dB[fBQj@CRFjAGd@UZYPa@J_AJk@E_@Bc@RS\\Kv@Nz@JRj@v@p@h@rI~AnALhMvBHPe@XMj@Xx@^hCBFN@",
            "resource_state": 2
        },
        "trainer": false,
        "commute": false,
        "manual": false,
        "private": false,
        "visibility": "everyone",
        "flagged": false,
        "gear_id": "g18945278",
        "start_latlng": [
            12.947878,
            77.580562
        ],
        "end_latlng": [
            12.948324,
            77.581431
        ],
        "average_speed": 2.403,
        "max_speed": 3.588,
        "average_cadence": 81.4,
        "has_heartrate": true,
        "average_heartrate": 167.4,
        "max_heartrate": 184.0,
        "heartrate_opt_out": false,
        "display_hide_heartrate_option": true,
        "elev_high": 919.5,
        "elev_low": 902.8,
        "upload_id": 15043215325,
        "upload_id_str": "15043215325",
        "external_id": "garmin_ping_426342097456",
        "from_accepted_tag": false,
        "pr_count": 0,
        "total_photo_count": 0,
        "has_kudoed": false
    },
    {
        "resource_state": 2,
        "athlete": {
            "id": 70577838,
            "resource_state": 1
        },
        "name": "Morning Run",
        "distance": 5026.1,
        "moving_time": 1981,
        "elapsed_time": 2247,
        "total_elevation_gain": 13.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null,
        "id": 14064666082,
        "start_date": "2025-04-03T01:39:33Z",
        "start_date_local": "2025-04-03T07:09:33Z",
        "timezone": "(GMT+05:30) Asia/Kolkata",
        "utc_offset": 19800.0,
        "location_city": null,
        "location_state": null,
        "location_country": null,
        "achievement_count": 0,
        "kudos_count": 8,
        "comment_count": 0,
        "athlete_count": 1,
        "photo_count": 0,
        "map": {
            "id": "a14064666082",
            "summary_polyline": "e{_nA{moxMEPDTHJJ@f@KhA@l@Fz@IXB`@ADC\\Ed@Bp@JZG^@ZDVC|@?`@@pACVQPUFoAAWEEY@a@C}@[aBa@]CeA?e@Ac@GwA_@kAKoA@e@Jg@h@u@Vg@De@KYSScAs@cCe@eAW[c@KoC_@qDq@}B]{Ba@}ASgAWa@WQQg@aAKe@Ae@Bi@Lm@ZWJCjAMp@DZE\\Kt@o@RM^@^B|Cb@~ALnDt@^DxDr@v@H`@J\\RXXR^Lb@FvAC\\QfAUf@m@t@_@TsA`@KFWXEX@PJNVz@@H?TTbALHh@HZGXOdAcAlBGj@LdALnAT|AJ`@@z@JpCp@\\?VNBhAEFMDcAB_DK{CJmCAuAFgAMmBAe@YYEKHCF@TLNT?d@YHAZP?PBVDPJ@`@ClAAN?PF^C|@@^A^Ih@C^BZL~AC|B?l@Ch@KNSHY?WD_@Gi@KCg@@sCy@e@G}@BeAEo@QmB[o@AyAFYNa@^",
            "resource_state": 2
        },
        "trainer": false,
        "commute": false,
        "manual": false,
        "private": false,
        "visibility": "everyone",
        "flagged": false,
        "gear_id": "g18945278",
        "start_latlng": [
            12.947877,
            77.58062
        ],
        "end_latlng": [
            12.947711,
            77.581465
        ],
        "average_speed": 2.537,
        "max_speed": 3.514,
        "average_cadence": 82.3,
        "has_heartrate": true,
        "average_heartrate": 156.0,
        "max_heartrate": 179.0,
        "heartrate_opt_out": false,
        "display_hide_heartrate_option": true,
        "elev_high": 915.9,
        "elev_low": 902.8,
        "upload_id": 15013387392,
        "upload_id_str": "15013387392",
        "external_id": "garmin_ping_425390786082",
        "from_accepted_tag": false,
        "pr_count": 0,
        "total_photo_count": 0,
        "has_kudoed": false
    },
 ]
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const totalPages = Math.ceil(activities.length / pageSize);
  const paginatedData = activities.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleView = (activity) => {
    setSelectedActivity(activity.id);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="text-purple-400 p-4 bg-black min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          Show{" "}
          <select value={pageSize} onChange={handlePageSizeChange} className="text-black p-1 rounded">
            {[25, 50, 75, 100].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>{" "}
          entries
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>

      <table className="w-full border border-purple-400 text-sm">
        <thead className="bg-black text-purple-300">
          <tr>
            <th className="border border-purple-400 p-2">Sl No</th>
            <th className="border border-purple-400 p-2">Date</th>
            <th className="border border-purple-400 p-2">Name</th>
            <th className="border border-purple-400 p-2">Distance (km)</th>
            <th className="border border-purple-400 p-2">Moving Time</th>
            <th className="border border-purple-400 p-2">Elapsed Time</th>
            <th className="border border-purple-400 p-2">Avg Speed (m/s)</th>
            <th className="border border-purple-400 p-2">View</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((activity, index) => (
            <tr key={activity.id} className="text-center hover:bg-gray-800">
              <td className="border border-purple-400 p-2">{(currentPage - 1) * pageSize + index + 1}</td>
              <td className="border border-purple-400 p-2">{formatDate(activity.start_date_local)}</td>
              <td className="border border-purple-400 p-2">{activity.name}</td>

              <td className="border border-purple-400 p-2">{(activity.distance / 1000).toFixed(2)}</td>
              <td className="border border-purple-400 p-2">{formatTime(activity.moving_time)}</td>
              <td className="border border-purple-400 p-2">{formatTime(activity.elapsed_time)}</td>
              <td className="border border-purple-400 p-2">{activity.average_speed.toFixed(2)}</td>
              <td
                className="border border-purple-400 p-2 text-blue-400 cursor-pointer hover:underline"
                onClick={() => handleView(activity)}
              >
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-4 gap-2">
        <button
          className="px-3 py-1 border border-white rounded disabled:opacity-30"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 border border-white rounded ${
              currentPage === idx + 1 ? "bg-white text-black" : ""
            }`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border border-white rounded disabled:opacity-30"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <MasterRunsModal activityId={selectedActivity} onClose={() => setSelectedActivity(null)} />
      )}
    </div>
  );
};

export default MasterRunsTable;
