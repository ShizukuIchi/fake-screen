import React from 'react';
import styled from 'styled-components';

import user from './user.svg';
import settings from './settings.svg';
import ubuntu from './ubuntu.svg';

function Login({
  className,
  onPasswordChange,
  password,
  hint,
  onSubmit,
  onPasswordClear,
}) {
  return (
    <div className={className}>
      <header />
      <div className="ubuntu1804-login-container">
        <section className="content">
          <div className="user-detail">
            <img className="avatar" src={user} alt="avatar" />
            <div className="name">User</div>
          </div>
          <div className="input-container">
            <div className="label" htmlFor="password">
              Password:
            </div>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <div className="buttons">
            <div className="cancel">
              <button id="cancel" onClick={onPasswordClear}>
                Cancel
              </button>
            </div>
            <div className="sign">
              <div className="settings">
                <img src={settings} alt="settings" />
                <div className="popup">
                  <div className="popup-item">Ubuntu</div>
                  <div className="popup-item">
                    Ubuntu with communitheme snap
                  </div>
                  <div className="popup-item">Ubuntu on Wayland</div>
                  <div className="popup-item">Ubuntu on Xorg</div>
                  <div className="popup-item">Unity</div>
                </div>
              </div>
              <button id="sign-in" onClick={onSubmit}>
                Sign In
              </button>
            </div>
            <div className="hint">{hint}</div>
          </div>
        </section>
        <footer>
          <div className="text">ubuntu</div>
          <div className="img">
            <img src={ubuntu} alt="ubuntu" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default styled(Login)`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,500');

  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 25px;
    border: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .ubuntu1804-login-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #2b0720;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      height: 100%;
      width: 340px !important;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      padding-bottom: 20px;
      .user-detail {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .avatar {
          width: 63px;
          height: 63px;
          border: 2px rgba(255, 255, 255, 0.8) solid;
          padding: 5px;
          border-radius: 3px;
        }
        .name {
          margin-left: 16px;
          color: rgba(255, 255, 255, 0.9);
        }
      }
      .input-container {
        margin-top: 25px;
        width: 100%;
        .label {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.6px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
        input {
          margin-top: 10px;
          border: none;
          background: rgb(40, 40, 40);
          box-shadow: inset 0px 1px 7px rgb(15, 15, 15);
          border-radius: 3px;
          height: 26px;
          width: 100%;
          color: rgba(255, 255, 255, 0.75);
          font-size: 15px;
          letter-spacing: 0.7px;
          padding-left: 8px;
        }
      }
      .buttons {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        button {
          font-family: Ubuntu;
          border: 1px black solid;
          border-radius: 3px;
          font-weight: 300;
          line-height: 24px;
          color: rgba(255, 255, 255, 0.75);
          text-shadow: 1px 1px 1px rgb(20, 20, 20, 1);
          width: 80px;
          height: 24px;
          font-size: 14px;
          text-align: center;
          background: rgb(50, 50, 50);
        }
        .sign {
          display: flex;
          position: relative;
          .settings {
            margin-right: 7px;
            display: flex;
            align-items: center;
            img {
              filter: drop-shadow(0 0 0.5px black);
              width: 15px;
              height: 15px;
            }
          }
          .popup {
            position: absolute;
            display: none;
          }
          .popup-item {
            height: 1.8em;
          }
        }
        .hint {
          visibility: hidden;
          transform: translateY(60px);
          position: absolute;
          color: red;
          opacity: 0.7;
          text-shadow: none;
        }
      }
    }
    footer {
      position: fixed;
      bottom: 5%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      .text {
        color: rgb(255, 255, 255, 0.8);
        font-weight: 200;
        font-size: 2.5em;
        text-shadow: 0px 0px 10px rgb(255, 255, 255, 0.8);
      }
      .img {
        margin-top: 10px;
        margin-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px rgb(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.8);
        img {
          transform: translate(-1px, -1px);
          opacity: 0.6;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;
