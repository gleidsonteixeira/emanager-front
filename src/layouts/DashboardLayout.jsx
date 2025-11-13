import { Outlet } from "react-router";
import Menu from "../components/Menu";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <Menu />
            <div className="flex-1 overflow-auto">
                <Outlet/>
            </div>
        </div>
    );
}

export default DashboardLayout;