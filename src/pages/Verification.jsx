import axios from 'axios';

import { useEffect, useState } from 'react';

import { BackgroundContainer, ContentContainer } from './HomePage.styled';
import {} from './pageStyles/VerificationStyle/Verification.styled';
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
            <>
              {verStatus && (
                <>
                  <div>
                    <h1>Verification successful</h1>
                  </div>
                </>
              )}
              {!verStatus && (
                <>
                  <div>
                    <h1>Wrong link or user was olredy verify</h1>
                  </div>
                </>
              )}
              <NavLink to="/login">
                <h1>login</h1>
              </NavLink>
            </>
          </ContentContainer>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default HomePage;
