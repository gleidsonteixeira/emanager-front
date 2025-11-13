import { QueryClientProvider } from "@tanstack/react-query";
import Paths from "./routes/Paths";
import { queryClient } from "./services";
import { ToastContainer } from "react-toastify";
import AntProvider from "./contexts/AntProvider";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AntProvider>
          <Paths />
        </AntProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;