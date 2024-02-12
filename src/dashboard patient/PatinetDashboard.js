import { Outlet } from 'react-router-dom'
import Navbar from '../New folder/Navbar'
import Sidebar from './Sidebar'
import Footer from '../New folder/Footer'
export default function PatinetDashboard()
{
    return(
        <div>
            <Navbar/>
            <div className='pare'>
                <Sidebar/>
                <div className='ch22'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}