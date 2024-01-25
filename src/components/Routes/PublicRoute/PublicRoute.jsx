import { Navigate } from 'react-router-dom';
import { getToken } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component }) => {
  const token = useSelector(getToken);

  return <>{token ? <Navigate to="main" /> : <Component />}</>;
};

export default PublicRoute;
