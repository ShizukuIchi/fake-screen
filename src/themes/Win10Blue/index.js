import React from 'react';
import styled from 'styled-components';

const Win10Blue = ({ className }) => {
  return (
    <div className={className}>
      <div className="content">
        <div className="face">
          :<span className="mouth">(</span>
        </div>
        <div className="message">
          Your PC ran into a problem that it couldn't
        </div>
        <div className="message">handle, and now it needs to restart.</div>
        <div className="error">
          You can search for the error online:
          SYSTEM_THREAD_EXCEPTION_PONIES_NOT_HANDLED (pci.sys)
        </div>
        <div className="message">Restart your PC manually</div>
      </div>
    </div>
  );
};

export default styled(Win10Blue)`
  height: 100%;
  background: #0065cc;
  cursor: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI light', Arial;
  word-break: break-word;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 50px;
  }
  .face {
    font-size: 9em;
    margin-bottom: 50px;
    color: #fff;
  }
  .error {
    padding: 30px 0 70px 0;
    color: #5bdbea;
  }
  .message {
    font-size: 1.5em;
    margin-bottom: 5px;
    color: #fff;
  }
`;
