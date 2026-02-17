import "./App.css";
import Layout from "@/components/Layout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import Dashboard from "./pages/Dashboard";
// AppContent 컴포넌트를 별도로 만들어서 인증 상태와 로딩 상태를 처리하도록 분리

const AppContent = () => {
  const { isAuthenticate, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticate ? <Navigate to="/" replace /> : <Login />}
        />

        <Route
          element={isAuthenticate ? <Layout /> : <Navigate to="/login" replace />}
        >
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={isAuthenticate ? "/" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
};


function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;