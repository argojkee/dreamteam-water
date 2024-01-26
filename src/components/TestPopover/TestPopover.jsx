import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PopoverStyles } from './TestPopoverStyled';
import avatar from '../../icons/outline.png';
import vector from '../../icons/solid.png';

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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <NavLink to="registration">Settings</NavLink>
        </Typography>
        <Typography sx={{ p: 2 }}>Log out</Typography>
      </Popover>
    </PopoverStyles>
  );
}
