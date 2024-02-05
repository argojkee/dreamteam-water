import { StyledDailyNormaContainer } from './EditNormaModal.styled';
import { useDispatch, useSelector } from 'react-redux';

import { useSpring, animated } from '@react-spring/web';
import { editDailyNorm } from '../../redux/water/waterFunctions';
import { getIsEditingNorm } from '../../redux/water/waterSelectors';
import { PiSpinnerGap } from 'react-icons/pi';
import { getUserGender } from '../../redux/auth/authSelectors';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditNormaModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsEditingNorm);
  const gender = useSelector(getUserGender);

  const animaDynamic = [
    { paddingLeft: '20px' },
    { paddingLeft: '0' },
    { paddingLeft: '15px' },
    { paddingLeft: '0' },
    { paddingLeft: '10px' },
    { paddingLeft: '0' },
    { paddingLeft: '5px' },
    { paddingLeft: '0' },
  ];

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      weight: '',
      activity: '',
      drink: '',
    },

    //yup stored own validate functions (for weight, activity...etc)
    validationSchema: Yup.object({
      weight: Yup.number().notRequired()
        .positive()
        .max(400, 'Max value 400kg')
        .min(40, 'Min value 40kg'),
      activity: Yup.number().notRequired()
        .positive()
        .max(24, 'Max value 24h')
        .min(0.1, 'Min value 0.1h'),
      drink: Yup.number().notRequired()
        .positive()
        .max(7, 'Max value 7L')
        .min(0.1, 'Min value 0.1h'),
    }),

    //! 'values' contains ended values all Form inputs.
    //! They will can get: 'values.<field name>' or change values on {email, password}
    onSubmit: ({ weight, activity, drink }) => {
      
      if(drink === '') {

        if (gender === 'woman') {
          dispatch(editDailyNorm((weight * 0.03 + activity * 0.4) * 1000));
        } else {
          dispatch(editDailyNorm((weight * 0.04 + activity * 0.6) * 1000));
        }

      } else {
        
        dispatch(editDailyNorm(drink * 1000));

      };

      if (getIsEditingNorm) closeModal();
    },
  });

  const springs = useSpring({
    from: { paddingLeft: '0' },
    to: [...animaDynamic],

    config: { duration: 100 },
  });

  return (
    <StyledDailyNormaContainer
      $errors={{
        weightError: formik.errors.weight,
        activityError: formik.errors.activity,
        drinkError: formik.errors.drink,
      }}
    >
      <div className={'modal-container'}>
        <h1>My daily norma</h1>

        <div className="theory">
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
            <span>&#42; </span>V is the volume of the water norm in liters per
            day, M is your body weight, T is the time of active sports, or
            another type of activity commensurate in terms of loads (in the
            absence of these, you must set 0)
          </p>
        </div>

        <form action="#" name="save_form" onSubmit={formik.handleSubmit}>
          <div className="calculate">
            <h2>Calculate your rate:</h2>

            <div className="radio-buttons-container">
              <div className="radio">
                <input
                  className="custom-radio"
                  type="radio"
                  name="woman"
                  defaultChecked={gender === 'woman' ? true : false}
                  disabled={gender === 'woman' ? false : true}
                  id="woman"
                />
                <label htmlFor="woman" className="form-radio">
                  For woman
                </label>
              </div>

              <div className="radio">
                <input
                  className="custom-radio"
                  type="radio"
                  name="man"
                  defaultChecked={gender === 'man' ? true : false}
                  disabled={gender === 'man' ? false : true}
                  id="man"
                />
                <label htmlFor="man" className="form-radio">
                  For man
                </label>
              </div>
            </div>

            <label htmlFor="weight">
              <p className="formcalc-text">Your weight in kilograms:</p>

              <input
                id="weight"
                type="text"
                name="weight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
                className="numberKilo weightError"
              />
            </label>

            <label htmlFor="activity">
              <p className="formcalc-text">
                The time of active participation in sports or other activities
                with a high physical. load in hours:
              </p>

              <input
                id="activity"
                type="text"
                name="activity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.activity}
                className="numberKilo activityError"
              />
            </label>

            <div className="norma-container">
              <p className="formcalc-text">
                The required amount of water in liters per day:{' '}
              </p>
              <span className="norma">1.8 L</span>
            </div>
          </div>

          <div className="activity">
            <label htmlFor="drink">
              <h2 className="water">
                Write down how much water you will drink:
              </h2>

              <input
                type="text"
                name="drink"
                id="drink"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.drink}
                className="numberKilo drinkError"
              />
            </label>
          </div>

          <div className="errors">
            <animated.div style={{ ...springs }}>
              {formik.errors.weight
                ? formik.errors.weight
                : formik.errors.activity && !formik.errors.weight
                ? formik.errors.activity
                : formik.errors.drink && !formik.errors.activity
                ? formik.errors.drink
                : ''}
            </animated.div>
          </div>

          <button type="submit" className="btn-save">
            {isLoading ? (
              <PiSpinnerGap className="spinner" size={16} />
            ) : (
              'Save'
            )}
          </button>
        </form>
      </div>
    </StyledDailyNormaContainer>
  );
};

export default EditNormaModal;
