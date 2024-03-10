import { Navigate } from "react-router"

const ProtectedRoutes = ({element}: any) => {
  const isAuthenticate = !!localStorage.getItem('authToken')
  return isAuthenticate ? element : <Navigate to="auth/login"/>
}

export default ProtectedRoutes