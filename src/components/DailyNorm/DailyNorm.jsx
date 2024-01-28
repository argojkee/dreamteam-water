import { DailyNormStyles } from './DailyNormStyles.styled';
import { Modal } from '../Modal/Modal';

const DailyNorm = () => {
  return (
    <DailyNormStyles>
      <div className="dailyNormaSection">
        <h2>My daily norma</h2>
        <div className="button-info-container">
          <span>1.5 L</span>
          <button type="button">Edit</button>
        </div>
      </div>

      <Modal>
        <h1>My daily norma</h1>
        <form action="#">
          <p>For girl: V=(M*0.03) + (T*0.4)</p>
          <p>For man: V=(M*0,04) + (T*0,6)</p>
          <span>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
          </span>
          <h2>Calculate your rate:</h2>
          <label htmlFor="#">
            <input type="radio" name="gender" value="woman" />
            For woman
          </label>
          <label htmlFor="#">
            <input type="radio" name="gender" value="man" />
            For man
          </label>
          <br />
          <label htmlFor="#">
            Your weight in kilograms:
            <br />
            <input type="number" name="number" value={0} />
          </label>
          <p>The required amount of water in liters per day: 1.8 L</p>

          <h2>Write down how much water you will drink:</h2>
          <input type="number" name="number" value={0} />
          <br />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </DailyNormStyles>
  );
};

export default DailyNorm;
