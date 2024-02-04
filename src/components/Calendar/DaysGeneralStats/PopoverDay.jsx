import { Popover } from '@mui/material';
import { useState } from 'react';
import { getMonthsArr } from '../helpers/getMonthsArr';
import { TfiClose } from 'react-icons/tfi';
import { PopoverDayStyles } from './PopoverDayStyles.styled';
import { PopoverButton } from './PopoverButton.styled';

const PopoverDay = ({
  date,
  percent,
  drinks,
  norm,
  disabled,
  statistic,
  selectedMonth,
  dataFulfilled,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <>
        <PopoverButton
          data-fulfilled={dataFulfilled}
          disabled={disabled}
          aria-describedby={id}
          $variant="contained"
          onClick={handleClick}
        >
          {date}
        </PopoverButton>
      </>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <PopoverDayStyles>
          <div>
            <p>
              {date},{' '}
              {getMonthsArr(selectedMonth.year)[selectedMonth.month].name}
            </p>
            <button onClick={handleClose}>
              <TfiClose />
            </button>
          </div>
          <p>
            Daily norma: <span>{norm}</span>
          </p>
          <p>
            Fulfillment of the daily norm: <span>{percent}</span>
          </p>
          <p>
            How many servings of water: <span>{drinks}</span>
          </p>
        </PopoverDayStyles>
      </Popover>
    </>
  );
};

export default PopoverDay;
