//import DisplayMap from "./DisplayMap";
//import PatientAccount from "./PatientAccount";
//import Test from "./Test";
//import ProviderAccount from "./ProviderAccount"
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import PatientAccount from './PatientAccount'
import ProviderAccount from './ProviderAccount'
import ContactUs from './ContactUs'
import LandingPage from './LandingPage'
import DoctorDetailsPage from './DoctorDetailsPage'
import ProductDetailsPage from './ProductDetailsPage'
import UpdatePatient from './dashboard patient/UpdatePatient'
import PatinetDashboard from './dashboard patient/PatinetDashboard'
import Payment from './dashboard patient/Payment'
import Cart from './dashboard patient/Cart'
import ProviderDashboard from './dashboard provider/ProviderDashboard'
import Account from './dashboard provider/Account'
import EditAccount from './dashboard provider/EditAccount'
import AddServices from './dashboard provider/AddServices'
import AddProducts from './dashboard provider/AddProducts'
import NewProduct from './dashboard provider/NewProduct'
import Products from './dashboard provider/Products'
import EditProduct from './dashboard provider/EditProduct'
import NewService from './dashboard provider/NewService'
import EditServcie from './dashboard provider/EditService'
import Services from './dashboard provider/Services'
import Filters from './Filters'
import AdminDashboard from './dashboard Admin/AdminDashboard'
import Providers from './dashboard Admin/Providers'
import EditProviderFromAdmin from './dashboard Admin/EditProviderFromAdmin'
import Patients from './dashboard Admin/Patients'
import ServicesManagment from './dashboard Admin/ServicesManagment'
import Reservation from './dashboard Admin/Reservations'
import ProductsManagment from './dashboard Admin/ProductsManagment'
import EditServcieFromAdmin from './dashboard Admin/EditServiceFromAdmin'
import EditProductFromAdmin from './dashboard Admin/EditProductFromAdmin'
import SendMessage from './SendMessage'
import ResetPassword from './ResetPassword'
import ConfirmCode from './ConfirmCode'
import Admins from './dashboard Admin/Admins'
import UpdateAdmin from './dashboard Admin/UpdateAdmin'
import Reports from './dashboard Admin/Reports'
import Login2 from './Login2'
import EditPatientFromAdmin from './dashboard Admin/EditPatientFromAdmin'

export default function App()
{
  return(
    <div>
     
      <Routes>
        <Route path='/login' element={<Page2 />}/>
        <Route path='/create' element={<Page3 />}/>
        <Route path='/firstPage' element={<Page1/>}/>
        <Route path='/createPatinet' element={<PatientAccount/>}/>
        <Route path='/createProvider' element={<ProviderAccount/>}/>
        <Route path='/logPatient' element={<Login/>}/>
        <Route path='/logProvider' element={<Login2/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/doctorDetails' element={<DoctorDetailsPage/>}/>
        <Route path='/productDetails' element={<ProductDetailsPage/>}/>
        <Route path='/filter' element={<Filters/>}/>
        <Route path='/sendMessage' element={<SendMessage/>}/>
        <Route path='/Reset' element={<ResetPassword/>}/>
        <Route path='/verfication' element={<ConfirmCode/>}/>

        <Route path='/patientDashboard' element={<PatinetDashboard/>}>
            <Route path='/patientDashboard' element={<UpdatePatient/>}/>
            <Route path='updatePatient' element={<UpdatePatient/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='cart' element={<Cart/>}/>
        </Route>

        <Route path='/providerDashboard' element={<ProviderDashboard/>}>
        <Route path='/providerDashboard' element={<Account/>}/>
           <Route path='providerAccount' element={<Account/>}/>
           <Route path='updateProvider' element={<EditAccount/>}/>
           <Route path='addServices' element={<AddServices/>}/>
           <Route path='addProducts' element={<AddProducts/>}/>
           <Route path='newProduct' element={<NewProduct/>}/>
           <Route path='newService' element={<NewService/>}/>
           <Route path='products' element={<Products/>}/>
           <Route path='products/1' element={<EditProduct/>}/>
           <Route path='services' element={<Services/>}/>
           <Route path='services/1' element={<EditServcie/>}/>
        </Route>


        <Route path='/adminDashboard' element={<AdminDashboard/>}>
          <Route path='providers' element={<Providers/>}/>
          <Route path='providers/1' element={<EditProviderFromAdmin/>}/>
          <Route path='patients' element={<Patients/>}/>
          <Route path='patients/1' element={<EditPatientFromAdmin/>}/>
          <Route path='servicesManagment' element={<ServicesManagment/>}/>
          <Route path='servicesManagment/1' element={<EditServcieFromAdmin/>}/>
          <Route path='productsManagment' element={<ProductsManagment/>}/>
          <Route path='productsManagment/1' element={<EditProductFromAdmin/>}/>
          <Route path='reservation' element={<Reservation />}/>
          <Route path='adminManagment' element={<Admins/>}/>
          <Route path='adminManagment/1' element={<UpdateAdmin/>}/>
          <Route path='reports' element={<Reports/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}