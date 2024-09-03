import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with efforts by
        <a href="https://github.com/indrasenareddy91" target="_blank" style={{backgroundColor:"black" , padding:"3px" , color:"white" , margin:"5px" ,borderRadius:"5px" , fontStyle:"b"}}> Indrasena Reddy</a>
      </div>
    </div>
  );
};

export default AppLayout;
