import Login from "./LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./WelcomeComponent";
import Error from "./ErrorComponent";
import TodoList from "./TodoListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Logout from "./LogoutComponent";
import AddTodo from "./TodoFormComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";


function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated){
        return(children)
    }
    return(
        <Login/>
    )
    
}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/welcome/:username" element={<AuthenticatedRoute><Welcome/></AuthenticatedRoute>}></Route>
                        <Route path="/todos" element={<AuthenticatedRoute><TodoList/></AuthenticatedRoute>}></Route>
                        <Route path="/logout" element={<AuthenticatedRoute><Logout/></AuthenticatedRoute>}></Route>
                        <Route path="/addtodos/:id" element={<AuthenticatedRoute><AddTodo/></AuthenticatedRoute>}></Route>
                        <Route path="*" element={<Error/>}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>           
        </div>
    )
}