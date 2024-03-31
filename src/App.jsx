import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
