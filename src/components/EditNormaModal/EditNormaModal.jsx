import { StyledDailyNormaContainer } from './EditNormaModal.styled';
import { useDispatch } from 'react-redux';
import { editDailyNorm } from '../../redux/water/waterFunctions';

const EditNormaModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    //После валидации и всего прочего, передаёшь норму, которую получишь по формуле или какая там логика...
    dispatch(editDailyNorm(2000));
    closeModal();
  };
  return (
    <StyledDailyNormaContainer>
      <h1>My daily norma</h1>
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
        <span>&#42; </span>V is the volume of the water norm in liters per day,
        M is your body weight, T is the time of active sports, or another type
        of activity commensurate in terms of loads (in the absence of these, you
        must set 0)
      </p>
      <form action="#" name="save_form" onSubmit={onSubmit}>
        <h2>Calculate your rate:</h2>

        <div className="radio">
          <input
            className="custom-radio"
            type="radio"
            name="gender"
            value="woman"
            id="woman"
          />
          <label htmlFor="woman">For woman</label>
        </div>

        <div className="radio">
          <input
            className="custom-radio"
            type="radio"
            name="gender"
            value="man"
            id="man"
          />
          <label htmlFor="man">For man</label>
        </div>

        <br />
        <label htmlFor="weight" className="form-text">
          Your weight in kilograms:
          <input
            id="weight"
            type="text"
            name="numberKilo"
            // value="0"
            className="numberKilo"
          />
        </label>
        <p>
          The time of active participation in sports or other activities with a
          high physical. load in hours:
        </p>
        <label htmlFor="activity" className="form-text time">
          <input
            id="activity"
            type="text"
            name="amountOfTime"
            className="numberKilo"
            // value=0
          />
        </label>
        <p className="form-text">
          The required amount of water in liters per day:{' '}
          <span className="norma">1.8L</span>
        </p>

        <h2 className="water">Write down how much water you will drink:</h2>
        <input
          type="text"
          name="number"
          // value="0"
          className="numberKilo"
        />

        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </StyledDailyNormaContainer>
  );
};

export default EditNormaModal;
