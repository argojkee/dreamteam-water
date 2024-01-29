import React, { useState, useEffect } from 'react';
import { UserLogoModalStyles } from './UserLogoModal.styled';
import vector from '../../icons/solid.png';
import { IoMdSettings } from 'react-icons/io';
import { IoExitOutline } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';
import { SettingModal } from 'components/SettingModal/SettingModal';
import { useSelector } from 'react-redux';
import {
  getUserName,
  getUserEmail,
  getUserAvatar,
  getdataUser,
} from '../../redux/auth/authSelectors';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


export default function UserLogoModal() {
  const [isOpen, setOpen] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  
  const userName1 = useSelector(getUserName);
  const userEmail1 = useSelector(getUserEmail);
  const userAvatarUrl1 = useSelector(getUserAvatar);
  const dataUser1 = useSelector(getdataUser);

  console.log('проверка');
  console.log(userName1);
  console.log(userEmail1);
  console.log(userAvatarUrl1);
  console.log(dataUser1);

  

  // let userEmail = userEmail1;
  // let userName = !'' ? userEmail : userName1;
  // let userAvatarUrl = ! undefined ? userEmail[0] : userAvatarUrl1;

  let userEmail = userEmail1;
  let userName = !'' ? userEmail : userName1;
  // let userName = 'ddddddddddddddddddddddddddddddddddddddd';
  let userAvatarUrl = '';

  useEffect(() => {
    console.log('ефект');
    console.log(userName);
    if (userAvatarUrl !== undefined) {
      return;
      
    }
    checkDataUser();
      
  });

  function checkDataUser() {
    userAvatarUrl = userEmail[0].toUpperCase(); 
    // if (!userName && !userAvatar) {
    //   console.log('нету имени и аватарки');
    //   userName = userEmail;
    //   userAvatar = userEmail[0].toUpperCase();
    // }
    // if (userName && !userAvatar) {
    //   console.log('нету аватарки');
    //   userAvatar = userName[0].toUpperCase();
    // }
    // if (!userName && userAvatar) {
    //   console.log('нету имени');
    //   userName = userEmail;
    // }
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
    <UserLogoModalStyles className="test">
      <div className="main-user-container">
        <div className="user-box">
          <div className="textName">{userName}</div>
          <ClickAwayListener
            className="user-box-item"
            onClickAway={handleClickAway}
          >
            <button
              className="menu-user-button"
              variant="contained"
              onClick={() => setOpen(!isOpen)}
            >
              <div className="user-items">
                <div className="avatarBox">
                  {userAvatarUrl && (
                    <img className="iconAvatar" src={userAvatarUrl} alt="" />
                  )}
                  {!userAvatarUrl && (
                    <div className="avatarBox">{userAvatarUrl}</div>
                  )}
                </div>
                <div className="стрелка">
                  <img src={vector} alt="iconVector" className="iconSolid" />
                </div>
              </div>
            </button>
          </ClickAwayListener>
        </div>

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
      </div>
    </UserLogoModalStyles>
  );
}
