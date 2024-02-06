import axios from 'axios';

import { useEffect, useState } from 'react';

import { BackgroundContainer, ContentContainer } from './HomePage.styled';
import { VerificationStyles } from './pageStyles/VerificationStyle/Verification.styled';
import Container from 'components/Container/Container';
import { NavLink, useParams } from 'react-router-dom';

const HomePage = () => {
  const [verStatus, setStatus] = useState(false);
  const { verToken } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://dreamteam-water-server.onrender.com/api/users/verify/${verToken}`
      )
      .then(() => {
        setStatus(true);
      })
      .catch(() => {
        setStatus(false);
      });
  }, [verToken]);
  return (
    <>
      <BackgroundContainer>
        <Container>
          <ContentContainer>
            <VerificationStyles>
              <div className="box">
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
              </div>
            </VerificationStyles>
          </ContentContainer>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default HomePage;
