import MasterRunsTable from "../components/MasterRuns/MasterRunsTable";
import Header from "../components/Misc/Header";

const MasterRuns = ()=>{
    return(
        <div className="bg-black w-screen h-screen">
            <Header/>
           <MasterRunsTable/>
        </div>
    )
}


export default MasterRuns;