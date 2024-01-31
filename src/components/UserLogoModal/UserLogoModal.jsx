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
} from '../../redux/auth/authSelectors';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const BASE_URL = 'https://dreamteam-water-server.onrender.com/';

export default function UserLogoModal() {
  const [isOpen, setOpen] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  const unpolished_userName = useSelector(getUserName);
  let unpolished_userEmail = useSelector(getUserEmail);
  const unpolished_userAvatarUrl = useSelector(getUserAvatar);
  unpolished_userEmail = 'Ruslana@ukr.net';
  let userAvatar = polishingAvatar();

  console.log('проверка!!!!!!!!!!!!!!');
  console.log(unpolished_userName);
  console.log(unpolished_userEmail);
  console.log(unpolished_userAvatarUrl);

 
  //ф-ция возвращает то, что будет выведено на аватарку (аватарка есть, то аватарка,
  //иначе имя[0] или емейл[0])
  function polishingAvatar() {
    let  avatar = unpolished_userEmail[0];    
    if (unpolished_userAvatarUrl ===  null && unpolished_userName !== null){  
      avatar = unpolished_userName[0];
    }
    else if (unpolished_userAvatarUrl) {
      avatar = BASE_URL + unpolished_userAvatarUrl;
    }
    return avatar;
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
          <div className="textName">
            {unpolished_userName
              ? unpolished_userName
              : unpolished_userEmail.split('@')[0]}
          </div>
          <ClickAwayListener onClickAway={handleClickAway}>
            <button
              className="menu-user-button"
              variant="contained"
              onClick={() => setOpen(!isOpen)}
            >
              <div className="user-items">
                <div className="avatarBox">
                  {!unpolished_userAvatarUrl && (
                    <div className="iconAvatarText">{userAvatar}</div>
                  )}

                  {unpolished_userAvatarUrl && (
                    <div className="avatarBox">
                      <img
                        className="iconAvatar"
                        src={BASE_URL+userAvatar}
                        alt="avatar"
                        width="28"
                        height="28"
                      />
                    </div>
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
