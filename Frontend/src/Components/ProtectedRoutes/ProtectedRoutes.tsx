import { Navigate } from 'react-router'

const ProtectedRoutes = ({element}: any) => {
    const authenticate = !!localStorage.getItem('authToken')
  return authenticate ? element : <Navigate to="/auth/login"/>
}

export default ProtectedRoutes