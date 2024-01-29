import { DailyNormStyles } from './DailyNormStyles.styled';

const DailyNorm = () => {
  return (
    <DailyNormStyles>
      <div className="dailyNormaSection">
        <h2>My Daily norma</h2>
        <span>1.5 L</span>
        <button type="button">Edit</button>
      </div>
    </DailyNormStyles>
  );
};

export default DailyNorm;
