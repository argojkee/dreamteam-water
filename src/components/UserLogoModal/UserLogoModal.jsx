import React, { useState } from 'react';
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

const defaultAvatarURL = 'avatars\\avatarDefault.png';

export default function UserLogoModal() {
  const [isOpen, setOpen] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  const userName1 = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const userAvatarUrl1 = useSelector(getUserAvatar);
  
  let userName = userName1==='' ? userEmail : userName1;
  let userAvatarUrl = userAvatarUrl1 === defaultAvatarURL ? userEmail[0]
    : 'https://dreamteam-water-server.onrender.com/' + userAvatarUrl1;
  
  
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
                  {userAvatarUrl1 === defaultAvatarURL && (
                    <div className="iconAvatarText">{userAvatarUrl}</div>
                  )}
                  
                  {userAvatarUrl1 !== defaultAvatarURL && (                    
                    <img
                      className="iconAvatar"
                      src={userAvatarUrl}
                      alt="avatar"
                      width="28"
                      height="28"
                    />
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
