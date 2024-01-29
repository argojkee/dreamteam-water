import React, { useState, useEffect } from 'react';
import { UserLogoModalStyles } from './UserLogoModal.styled';
import vector from '../../icons/solid.png';
import { IoMdSettings } from 'react-icons/io';
import { IoExitOutline } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';
import { SettingModal } from 'components/SettingModal/SettingModal';
// import { useSelector } from 'react-redux';
import // getUserName,
// getUserEmail,
// getUserAvatar,
'../../redux/auth/authSelectors';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function UserLogoModal() {
  const [isOpen, setOpen] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  // const userName1 = useSelector(getUserName);
  // const userEmail1 = useSelector(getUserEmail);
  // const userAvatar1 = useSelector(getUserAvatar);

  // console.log('проверка');
  // console.log(userName1);
  // console.log(userEmail1);
  // console.log(userAvatar1);

  let userName = 'x'.toUpperCase();
  let userEmail = 'x';
  let userAvatar = '';

  useEffect(() => {
    if (userName && userAvatar) {
      return;
    }
    checkDataUser();
  });

  function checkDataUser() {
    if (!userName && !userAvatar) {
      userName = userEmail[0].toUpperCase();
      userAvatar = userEmail[0].toUpperCase();
    }
    if (userName && !userAvatar) {
      userName = userEmail[0].toUpperCase();
      userAvatar = userName[0].toUpperCase();
    }
    if (!userName && userAvatar) {
      userName = userEmail[0].toUpperCase();
    }
  }

  const onLogoutPress = () => {
    setIsShowLogoutModal(true);
  };

  const onSettingsClick = () => {
    setIsShowSettingsModal(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <UserLogoModalStyles>
      <ClickAwayListener
        // className="avatar-container"
        onClickAway={handleClickAway}
      >
        <button
          className="menu-user-button"
          variant="contained"
          onClick={() => setOpen(!isOpen)}
        >
          <div className="user-items">
            <div>
              <span className="textName">{userName}</span>
            </div>
            <div className="avatarBox">
              {userAvatar && (
                <img className="iconAvatar" src={userAvatar} alt="iconAvatar" />
              )}
              {!userAvatar && <div className="avatarBox">{userAvatar}</div>}
            </div>
            <div>
              <img src={vector} alt="iconVector" className="iconSolid" />
            </div>
          </div>
        </button>
      </ClickAwayListener>
      <nav className={`menu ${isOpen ? 'active' : ''}`}>
        <ul className="menu-list">
          <div className="box-menu-item" onClick={onSettingsClick}>
            <IoMdSettings className="icon" />
            <li className="menu-item">Settings</li>
          </div>
          <div className="box-menu-item" onClick={onLogoutPress}>
            <IoExitOutline className="icon" />
            <li className="menu-item">Log out</li>
          </div>
        </ul>
      </nav>

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
    </UserLogoModalStyles>
  );
}
