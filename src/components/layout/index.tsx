import { IBaseProps } from "../../interfaces";
import Footer from "../Footer";
import Navigator from "../Navigator";

const Layout = ({ children }: IBaseProps) => {
    return (
        <>
            <Navigator />
            <div className="mt-100px mb-120px">{children}</div>
            <Footer></Footer>
        </>
    );
};

export default Layout;
