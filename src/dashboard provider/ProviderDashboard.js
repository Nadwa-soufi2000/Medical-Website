import { Outlet } from "react-router-dom";
import Navbar from "../New folder/Navbar";
import Footer from "../New folder/Footer";
import Sidebar2 from "./Sidebar2";

export default function ProviderDashboard()
{
    return(
        <div>
            <Navbar/>
            <div className='pare2'>
                <Sidebar2/>
                <div className='ch222'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}