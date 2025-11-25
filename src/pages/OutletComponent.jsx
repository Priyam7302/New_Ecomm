import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


function OutletComponent() {
    return (
        <>
            <Header />
            <main id="app-main" className="app-main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default OutletComponent;