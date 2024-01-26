import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { UserOwnPopoverStyles } from './UserOwnPopoverStyles.styled';
import vector from '../../icons/solid.png';
import iconSettings from '../../icons/settings.png';
import iconExit from '../../icons/exit.png';
import { Button } from '@mui/material';
import { Modal } from 'components/Modal/Modal';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';

export default function UserOwnPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  const onLogoutPress = () => {
    setIsShowLogoutModal(true);
    handleClose();
  };

  const onSettingsClick = () => {
    setIsShowSettingsModal(true);
    handleClose();
  };

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <UserOwnPopoverStyles>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <img src={vector} alt="iconVector" className="iconSolid" />
      </Button>

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
          <button className="settingsBox" onClick={onSettingsClick}>
            <img src={iconSettings} alt="iconSettings" />
            <span>Settings</span>
          </button>
        </Typography>

        <Typography sx={{ p: 2 }}>
          <button className="logOutBox" onClick={onLogoutPress}>
            <img src={iconExit} alt="iconExit" />
            Log out
          </button>
        </Typography>
      </Popover>

      {isShowLogoutModal && (
        <Modal
          closeModal={() => setIsShowLogoutModal(false)}
          children={
            <LogoutDeleteModalContent
              closeModal={() => setIsShowLogoutModal(false)}
            />
          }
        />
      )}

      {isShowSettingsModal && (
        <Modal
          closeModal={() => setIsShowSettingsModal(false)}
          children={<div>Settings</div>}
        />
      )}
    </UserOwnPopoverStyles>
  );
}
