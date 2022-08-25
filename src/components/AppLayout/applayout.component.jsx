import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Navigation />
        <Outlet />
    </div>;
};

export default AppLayout;
