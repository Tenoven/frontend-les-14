import './App.css'
import logo from './assets/logo-white.png'
import HomePage from "./pages/HomePage/HomePage.jsx";
import OverzichtPagina from "./pages/overzichtPagina/OverzichtPagina.jsx";
import Newpost from "./pages/NewPost/newpost.jsx";
import ErrorPagina from "./pages/ErrorPagina/ErrorPagina.jsx";
import Nav from "./pages/navbar/Nav.jsx";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import posts from "./constants/data.json"

function App() {
    // console.log(posts)
    return (
        <div className="page-container">
            <Nav/>
            <img src={logo} alt="Company logo"/>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/overzichtpagina" element={<OverzichtPagina/>} />
                <Route path="/newpost" element={<Newpost/>}/>
                <Route path="/post/:id" element={<BlogPage/>}/>
                <Route path="*" element={<ErrorPagina/>}/>
            </Routes>
        </div>
    )
}

export default App
