import { Route,Routes } from "react-router-dom"
import Home from "../home"
import Form from "../form"
import Contact from "../contact"
import Blog from "../blog"

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    )
}