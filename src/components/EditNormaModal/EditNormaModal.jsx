import { StyledDailyNormaContainer } from './EditNormaModal.styled';

const EditNormaModal = () => {
  return (
    <StyledDailyNormaContainer>
      <h1>My daily norma</h1>
      <form action="#" name="save_form">
        <ul className="list">
          <li className="link">
            <p className="form-text">
              For girl: <span className="formula"> V=(M*0.03) + (T*0.4)</span>
            </p>
          </li>
          <li className="link">
            <p className="form-text">
              For man: <span className="formula"> V=(M*0,04) + (T*0,6)</span>
            </p>
          </li>
        </ul>

        <p className="invisibleText">
          <span>&#42;</span>V is the volume of the water norm in liters per day,
          M is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </p>
        <h2>Calculate your rate:</h2>

        <label htmlFor="#" className="form-text">
          <input type="radio" name="gender" value="woman" />
          For woman
        </label>
        <label htmlFor="#" className="form-text">
          <input type="radio" name="gender" value="man" />
          For man
        </label>

        <label htmlFor="#" className="form-text">
          Your weight in kilograms:
          <input type="number" name="number" value="0" className="numberKilo" />
        </label>
        <p className="form-text">
          The required amount of water in liters per day:{' '}
          <span className="norma">1.8L</span>
        </p>

        <h2 className="water">Write down how much water you will drink:</h2>
        <input type="number" name="number" value="0" className="numberKilo" />

        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </StyledDailyNormaContainer>
  );
};

export default EditNormaModal;
