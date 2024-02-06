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
  selectedMonth,
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

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const anchor = isMobile ? 'anchorPosition' : 'anchorEl'
  const halfWidthPopover = 280/2;
  const screenWidth = window.innerWidth/2;
  const leftCoordinate = screenWidth + halfWidthPopover

  return (
    <>
      <>
        <PopoverButton
          data-fulfilled={percent > 100 ? 'true' : 'false'}
          disabled={percent === '' ? true : false}
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
        anchorReference= {anchor}
        anchorPosition={{ top: 0, left: leftCoordinate }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
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
            Fulfillment of the daily norm: <span>{percent}%</span>
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