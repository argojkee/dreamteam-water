import { ContainerStyles } from './ContainerStyles.styled';

const Container = ({ children }) => {
  return <ContainerStyles className="containerHeader">{children}</ContainerStyles>;
};

export default Container;
