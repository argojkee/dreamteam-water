import axios from 'axios';

import { useEffect, useState } from 'react';

import { BackgroundContainer, ContentContainer } from './HomePage.styled';
import { VerificationStyles } from './pageStyles/VerificationStyle/Verification.styled';
import Container from 'components/Container/Container';
import { NavLink, useParams } from 'react-router-dom';

// const getVer = async token => {
//   const { data } = await axios.get(
//     `http://localhost:3001/api/users/verify/${token}`
//   );
//   return data;
// };

const HomePage = () => {
  const [verStatus, setStatus] = useState(false);
  const { verToken } = useParams();

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
                      You have not verified your email. To confirm, go to your
                      email and follow the verification link!
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
