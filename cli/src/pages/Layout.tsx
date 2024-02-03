import {FC} from "react";
import { Outlet } from "react-router-dom";

 const Layout: FC =() => {
    return<div className="min-h-screen bg-slate-900 font-roboto rext-white pb-20">
        <div>HEADER</div>
        <div className="container">
            <Outlet></Outlet>
        </div>
    </div>;
 };

 export default  Layout;