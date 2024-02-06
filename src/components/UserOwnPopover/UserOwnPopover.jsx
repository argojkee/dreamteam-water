import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { UserOwnPopoverStyles } from './UserOwnPopoverStyles.styled';
import vector from '../../icons/solid.png';
import iconSettings from '../../icons/settings.png';
import iconExit from '../../icons/exit.png';
import { Button } from '@mui/material';
import { Modal } from 'components/Modal/Modal';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';
import { SettingModal } from 'components/SettingModal/SettingModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function UserOwnPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  let userName = 'Ruslana';
  let userAvatar = null;
  let userEmail = 'Ruslana@gmail.com';

  useEffect(() => {
    if (userName && userAvatar) {
      return;
    }
    checkDataUser();
  });

  function checkDataUser() {
    if (!userName && !userAvatar) {
      userName = userEmail[0];
      userAvatar = userEmail[0];
    }
    if (userName && !userAvatar) {
      userName = userEmail[0];
      userAvatar = userName[0];
    }
    if (!userName && userAvatar) {
      userName = userEmail[0];
    }
  }

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
      <Button
        className="buttonPopover"
        variant="contained"
        onClick={handleClick}
      >
        <div className="avatarContainer">
          <div>
            <span className="textName">{userName}</span>
          </div>
          <div>
            {userAvatar && (
              <img className="iconAvatar" src={userAvatar} alt="iconAvatar" />
            )}
            {!userAvatar && <div className="avatarBox">{userAvatar}</div>}
          </div>
          <div>
            <img src={vector} alt="iconVector" className="iconSolid" />
          </div>
        </div>
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
        <div className="containerPopover">
          <div className="buttonBox">
            <Link onClick={onSettingsClick}>
              <img src={iconSettings} alt="iconSettings" />
              <span className="textSettings">Settings</span>
            </Link>
          </div>

          <div className="logOutBox">
            <Link onClick={onLogoutPress}>
              <img src={iconExit} alt="iconExit" />
              Log out
            </Link>
          </div>
        </div>
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
          children={
            <SettingModal closeModal={() => setIsShowSettingsModal(false)} />
          }
        />
      )}
    </UserOwnPopoverStyles>
  );
}
