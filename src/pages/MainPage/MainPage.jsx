import { StyledMainPage } from './MainPage.styled';
import background from '../../images/main-bg/Bottle-Main-sm.png';

const MainPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      MainPage
      <StyledMainPage className="bottle">
        <div className="dailyNormaSection">
          <h2>My Daily norma</h2>
          <span>1.5 L</span>
          <button type="button">Edit</button>
        </div>
      </StyledMainPage>
    </div>
  );
};

export default MainPage;
