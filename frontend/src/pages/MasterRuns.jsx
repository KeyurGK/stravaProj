// import { useEffect } from "react";
// import MasterRunsTable from "../components/MasterRuns/MasterRunsTable";
// import Header from "../components/Misc/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllActivities } from "../Redux/Activities/StravaActivitySlice";

// const MasterRuns = ()=>{
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         dispatch(getAllActivities());
//     },[])

//     const {allActivities}=useSelector(state => state.stravaActivities);
//     console.log(allActivities,'all')
//     return(
//         <div className="bg-black w-screen h-screen">
//             <Header/>
//            <MasterRunsTable/>
//         </div>
//     )
// }


// export default MasterRuns;

import { useEffect } from "react";
import MasterRunsTable from "../components/MasterRuns/MasterRunsTable";
import Header from "../components/Misc/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../Redux/Activities/StravaActivitySlice";

const MasterRuns = () => {
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllActivities());
//   }, [dispatch]);

//   const { allActivities } = useSelector((state) => state.stravaActivities);

//   const runningActivities = allActivities?.filter(
//     (activity) => activity.sport_type === "Run"
//   );

  return (
    <div className="bg-black w-screen min-h-screen">
      <Header />
      {/* <MasterRunsTable runs={runningActivities} /> */}
      <MasterRunsTable/>
    </div>
  );
};

export default MasterRuns;
