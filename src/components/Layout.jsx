import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header className="flex-shrink-0" />
            <main className="flex-grow overflow-hidden relative">
                <Outlet />
            </main>
            <Footer className="flex-shrink-0" />
        </div>
    );
};

export default Layout;
