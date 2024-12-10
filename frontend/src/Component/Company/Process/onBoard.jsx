import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";

export default function onBoard(){
    return(
        <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    )
}