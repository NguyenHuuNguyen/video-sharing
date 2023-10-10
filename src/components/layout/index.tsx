import { useSelector } from "react-redux";
import { IBaseProps } from "../../interfaces";
import Navigator from "../Navigator";
import { RootState } from "../../store";
import LoginPage from "../../pages/login";

const Layout = ({ children }: IBaseProps) => {
    const isShowLogin = useSelector((state: RootState) => state.auth.isShowLogin);
    return (
        <>
            <Navigator />
            <div className="ml-300px">{children}</div>
            {isShowLogin ? <LoginPage></LoginPage> : null}
        </>
    );
};

export default Layout;
