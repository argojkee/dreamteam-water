import React, { useState } from 'react';
import { UserLogoModalStyles } from './UserLogoModal.styled';
import vector from '../../icons/solid.png';
import { IoMdSettings } from 'react-icons/io';
import { IoExitOutline } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';
import { SettingModal } from 'components/SettingModal/SettingModal';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/authSelectors';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

//const BASE_URL = 'https://dreamteam-water-server.onrender.com/';

export default function UserLogoModal() {
  const [isOpen, setOpen] = useState(false);
  const [isShowLogoutModal, setIsShowLogoutModal] = useState(false);
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);

  const { email, name, avatarURL } = useSelector(getCurrentUser);

  //let newEmail = email[0].toUpperCase() + email.slice(1);
  // let unpolished_userEmail = '';
  // let unpolished_userName = '';
  // let unpolished_userAvatarUrl = '';

  //const get_water_Current_Month = useSelector(getCurrentMonth);
  let unpolished_userEmail = email; //email;
  let unpolished_userName = name;
  let unpolished_userAvatarUrl = avatarURL;

  let userAvatar = polishingAvatar();

  //ф-ция возвращает то, что будет выведено на аватарку (аватарка есть, то аватарка,
  //иначе имя[0] или емейл[0])
  function polishingAvatar() {
    if (email) {
      let avatar = unpolished_userEmail[0].toUpperCase();
      if (unpolished_userAvatarUrl === null && unpolished_userName !== null) {
        avatar = unpolished_userName[0].toUpperCase();
      } else if (unpolished_userAvatarUrl) {
        avatar = unpolished_userAvatarUrl;
      }
      return avatar;
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
    <>
      {email && (
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
                            src={userAvatar}
                            alt="avatar"
                            width="28"
                            height="28"
                          />
                        </div>
                      )}
                    </div>
                    <div className="стрелка">
                      <img
                        src={vector}
                        alt="iconVector"
                        className="iconSolid"
                      />
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
                  <SettingModal
                    closeModal={() => setIsShowSettingsModal(false)}
                  />
                }
              />
            )}
          </div>
        </UserLogoModalStyles>
      )}
    </>
  );
}
