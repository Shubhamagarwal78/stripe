import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;