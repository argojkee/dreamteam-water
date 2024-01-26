import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PopoverStyles } from './TestPopoverStyled';
import vector from '../../icons/solid.png';
import iconSettings from '../../icons/settings.png';
import iconExit from '../../icons/exit.png';

export default function BasicPopover() {
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
    <PopoverStyles>
      <div className="iconSolid">
        <img
          src={vector}
          alt="iconVector"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        
      >
        <Typography sx={{ p: 2 }}>
          <NavLink to="registration">
            <settingsBox>
              <img src={iconSettings} alt="iconSettings" />
              <span>Settings</span>
            </settingsBox>
          </NavLink>
        </Typography>

        <Typography sx={{ p: 2 }}>
          <NavLink to="registration">
            <div className="logOutBox">
              <img src={iconExit} alt="iconExit" />
              Log out
            </div>
          </NavLink>
        </Typography>
      </Popover>
    </PopoverStyles>
  );
}
