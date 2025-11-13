import { notification } from "antd";
import { createContext } from "react";

export const AntContext = createContext();

const AntProvider = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();
    return (
        <AntContext.Provider value={{ api }}>
            {contextHolder}
            {children}
        </AntContext.Provider>
    );
}

export default AntProvider;