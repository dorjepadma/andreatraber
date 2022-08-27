import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

const AppLayout = () => {
    return <div style={{
        padding: '0px 0px 0px 0px'
    }}>
        <Navigation />
        <Outlet />
    </div>;
};

export default AppLayout;
