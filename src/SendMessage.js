import { useState } from "react";
import Footer from "./New folder/Footer";
import Logo from "./New folder/Logo";
import Navbar from "./New folder/Navbar";
import { useNavigate } from "react-router-dom";

export default function SendMessage()
{
    const[Email , setEmail] = useState('');
    let nav = useNavigate();
    function submit(e)
    {
        //e.PreventDefault();
        nav('/Verfication');
    }
    return(
        <div>
               <Navbar/>
                 <div className="totalDiv">
                    <Logo />
                  <div className="Div2">
                    <h1>Create Account</h1>
                    <form className="formStyles" onSubmit={submit}>
                           <div className="lab1s">
                              <label htmlFor="2">Email:</label>
                               <input 
                                     value={Email}
                                     type="email" 
                                     id="2" onChange={(e) => setEmail(e.target.value)}
                                     placeholder="Enter your email..."
                                    />
                            </div>  
                          <div className="DivButos">
                            <label></label>
                            <button className="Buto">Send Message</button>
                          </div>
                    </form>
                  </div>
            </div>
             <Footer />
        </div>
    )
}