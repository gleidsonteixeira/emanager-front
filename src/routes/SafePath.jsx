import { Navigate } from "react-router";
import { API } from "../services";

const SafePath = ({ children }) => {
    const token = sessionStorage.getItem("token") || "";
    API.defaults.headers.common.Authorization = `Bearer ${token}`;

    return token ? children : <Navigate to={"/"} />;
}

export default SafePath;