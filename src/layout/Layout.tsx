import { Outlet } from 'react-router-dom'
import { Footer, Header, Loading, Navbar } from '../components'

export const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}
