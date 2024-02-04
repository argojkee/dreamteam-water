import { StyledDailyNormaContainer } from './EditNormaModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editDailyNorm } from '../../redux/water/waterFunctions';
import { getIsEditingNorm } from '../../redux/water/waterSelectors';
import { PiSpinnerGap } from 'react-icons/pi';
import { useState } from 'react';
// import { getUserGender } from '../../redux/auth/authSelectors';

const EditNormaModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsEditingNorm);

  // const { gender, useGender } = useState(null);
  const { weight, setWeight } = useState(null);
  const { time, setTime } = useState(null);
  // const { amountOfWater, setAmountOfWater } = useState([]);

  // const userGender = useSelector(getUserGender);

  const handleChange = ({ target }) => {
    if (target.name === 'weight') {
      setWeight(target.value);
    } else if (target.name === 'time') {
      setTime(target.value);
    }
  };

  const getCalculateDailyNorma = (weight, time) => {
    return (weight * 0.03 + time * 0.4).toFixed(1);
  };
  console.log(getCalculateDailyNorma());

  const onSubmit = async e => {
    e.preventDefault();

    //После валидации и всего прочего, передаёшь норму, которую получишь по формуле или какая там логика...
    await dispatch(editDailyNorm(2000));
    getCalculateDailyNorma();
    // setWeight(0);
    // setTime(0);
    // resetForm();
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

        <div className="radio-buttons-container">
          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              name="gender"
              value="woman"
              id="woman"
              // checked={true}
            />
            <label htmlFor="woman" className="form-radio">
              For woman
            </label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="radio"
              name="gender"
              value="man"
              id="man"
              // checked={false}
            />
            <label htmlFor="man" className="form-radio">
              For man
            </label>
          </div>
        </div>

        <label htmlFor="weight" className="form-text">
          Your weight in kilograms:
          <input
            id="weight"
            type="text"
            name="numberKilo"
            // value="0"
            className="numberKilo"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
        <div className="norma-container">
          <p className="form-text">
            The required amount of water in liters per day:{' '}
          </p>
          <span className="norma">1.8L</span>
        </div>

        <h2 className="water">Write down how much water you will drink:</h2>
        <input
          type="text"
          name="number"
          // value="0"
          className="numberKilo"
        />

        <button type="submit" className="btn-save">
          {isLoading ? <PiSpinnerGap className="spinner" size={16} /> : 'Save'}
        </button>
      </form>
    </StyledDailyNormaContainer>
  );
};

export default EditNormaModal;
