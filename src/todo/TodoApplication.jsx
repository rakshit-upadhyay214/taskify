import Login from "./LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./WelcomeComponent";
import Error from "./ErrorComponent";
import TodoList from "./TodoListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Logout from "./LogoutComponent";

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/welcome/:username" element={<Welcome/>}></Route>
                    <Route path="/todos" element={<TodoList/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>           
        </div>
    )
}