import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  VerificationStyles,
  BackgroundStyles,
  ContentStyles,
} from './pageStyles/VerificationStyle/Verification.styled';
//import Container from 'components/Container/Container';
import { NavLink, useParams } from 'react-router-dom';
import { getIsDarkTheme } from '../redux/theme/themeSelectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [verStatus, setStatus] = useState(false);
  const { verToken } = useParams();
  const isDark = useSelector(getIsDarkTheme);

  useEffect(() => {
    axios
      .get(
        `https://dreamteam-water-server.onrender.com/api/users/verify/${verToken}`
      )
      .then(() => {
        setStatus(true);
      })
      .catch(() => {
        setStatus(false);
      });
  }, [verToken]);
  return (
    <VerificationStyles $isDark={isDark}>
      <BackgroundStyles>
        <ContentStyles>
          {verStatus && (
            <div className="box_textMessage">
              <p className="text_message">Verification successful!</p>
            </div>
          )}
          {!verStatus && (
            <div className="box_textMessage">
              <p className="text_message">
                Wrong link or user was already verify!
              </p>
            </div>
          )}
          <NavLink className="link" to="/login">
            <div className="btn_login">Login</div>
          </NavLink>
        </ContentStyles>
      </BackgroundStyles>
    </VerificationStyles>
  );
};

export default HomePage;
