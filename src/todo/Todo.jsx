import Login from "./LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./WelcomeComponent";


export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/welcome" element={<Welcome/>}></Route>
                </Routes>
            </BrowserRouter>
                
            
        </div>
    )
}