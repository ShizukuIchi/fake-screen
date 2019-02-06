import React from 'react';
import styled from 'styled-components';

import bitcoin from './bitcoin.jpg';
import doge from './doge.ico';
import wannacry from './wannacry.jpg';

function WannaCryWindow({
  className,
  remainLoseTime,
  remainRaiseTime,
  raiseProgress,
  loseProgress,
  payment,
  onDecrypt,
  onCheck,
  onCopy,
  raiseDeadline,
  loseDeadline,
  onExit,
}) {
  return (
    <div className={className}>
      <div className="container">
        <header>
          <img src={doge} alt="icon" />
          <span>Wana Decrypt0r 2.0</span>
          <button onClick={onExit} id="exit" />
        </header>
        <div className="content">
          <section className="left">
            <div className="logo">
              <img src={wannacry} alt="wannacry" />
            </div>
            <div className="infos-container">
              <div className="infos-title">Payment will be raised on</div>
              <div className="infos-content">
                <div className="infos">
                  <div className="info">{raiseDeadline}</div>
                  <div className="info" />
                  <div className="info">Time Left</div>
                  <div className="info">
                    <span className="time">{remainRaiseTime}</span>
                  </div>
                </div>
                <div className="bar">
                  <div className="bar-color">
                    <div
                      style={{ height: raiseProgress }}
                      className="bar-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infos-container">
              <div className="infos-title">Your files will be lost on</div>
              <div className="infos-content">
                <div className="infos">
                  <div className="info">{loseDeadline}</div>
                  <div className="info" />
                  <div className="info">Time Left</div>
                  <div className="info">
                    <span className="time">{remainLoseTime}</span>
                  </div>
                </div>
                <div className="bar">
                  <div className="bar-color">
                    <div
                      style={{ height: loseProgress }}
                      className="bar-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="right">
            <div className="top-bar">
              <div className="announcement">
                Ooops, your files have been encrypted!
              </div>
              <div className="lang">
                <select>
                  <option>English</option>
                </select>
              </div>
            </div>
            <div className="manuals">
              <div className="manual">
                <div className="title">What Happened to My Computer?</div>
                <p>
                  <strong>Y</strong>our important files are encrypted.
                </p>
                <p>
                  Many of your documents, photos, videos, databases and other
                  files are no longer accessible because they have been
                  encrypted. Maybe you are busy looking for a way to recover
                  your files, but do not waste your time. Nobody can recover
                  your files without our decryption service.
                </p>
              </div>
              <div className="manual">
                <div className="title">Can I Recover My Files?</div>
                <p>
                  <strong>S</strong>ure. We guarantee that you can recover all
                  your files safely and easily. But you have not so enough time.
                </p>
                <p>
                  You can decrypt some of your files for free. Try now by
                  clicking &lt;Decrypt&gt;.
                </p>
                <p>
                  But if you want to decrypt all your files, you need to pay.
                </p>
                <p>
                  You only have 3 days to submit the payment. After that the
                  price will be doubled.
                </p>
                <p>
                  Also, if you don't pay in 7 days, you won't be able to recover
                  your files forever.
                </p>
                <p>
                  We will have free events for users who are so poor that they
                  couldn't pay in 6 months.
                </p>
              </div>
              <div className="manual">
                <div className="title">How Do I Pay?</div>
                <p>
                  <strong>P</strong>ayment is accepted in Bitcoin only. For more
                  information, click &lt;About bitcoin&gt;.
                </p>
                <p>
                  Please check the current price of Bitcoin and buy some
                  bitcoins. For more information, click &lt;How to buy
                  bitcoins&gt;.
                </p>
                <p>
                  And send the correct amount to the address specified in this
                  window.
                </p>
                <p>
                  After your payment, click &lt;Check Payment&gt;. Best teim to
                  check: 9:00am - 11:00am GMT from Monday to Friday.
                </p>
                <p>
                  Once the payment is checked, you can start decrypting your
                  files immediately.
                </p>
              </div>
              <div className="manual">
                <div className="title">Contact</div>
                <p>
                  If you need our assistance, send a message by clicking
                  &lt;Contact Us&gt;.
                </p>
              </div>
              <div className="manual">
                <p className="darkred">
                  We strongly recommend you to not remove this software, and
                  disable your anti-virus for a while, intil you pay and the
                  payment gets processed. If your anti-virus gets updated and
                  removes this software automatically, it will not be able to
                  recover your files even if you pay!
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="left">
            <div className="contacts">
              <a
                className="contact underline"
                href="https://github.com/ShizukuIchi"
                target="_blank"
                rel="noreferrer noopener"
              >
                About bitcoin
              </a>
              <a
                className="contact underline"
                href="https://github.com/ShizukuIchi"
                target="_blank"
                rel="noreferrer noopener"
              >
                How to buy bitcoins?
              </a>
              <a
                className="contact underline"
                href="https://github.com/ShizukuIchi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>Contact Us</strong>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="bitcoins">
              <img src={bitcoin} alt="bitcoin" />
              <div className="text">
                <div className="hint yellow">
                  Send <span id="payment">${payment}</span> worth of bitcoins to
                  this address:
                </div>
                <div className="inputs">
                  <input
                    type="text"
                    value="115p7UMMngoj1pMvkpHijcRdfJNXj6LrLn"
                    disabled="disabled"
                  />
                  <button onClick={onCopy} id="copy">
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={onCheck} id="check">
                Check <span className="underline">P</span>ayment
              </button>
              <button onClick={onDecrypt} id="decrypt">
                <span className="underline">D</span>ecrypt
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default styled(WannaCryWindow)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: auto;
  @media (max-width: 800px) {
    & {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .container {
    background: darkred;
    border-radius: 2px;
    border: 3px lightgray solid;
    border-right-color: darkgray;
    border-bottom-color: darkgray;
    font-family: sans-serif;
  }
  header {
    height: 24px;
    border-bottom: lightgray 1px solid;
    background: linear-gradient(to right, #07126e, #a3c5ed);
    display: flex;
    align-items: center;
    img {
      margin: 2px 4px;
      width: 15px;
      height: 15px;
    }
    span {
      flex-grow: 1;
      font-family: Arial;
      color: #fff;
    }
    button {
      background: lightgray;
      border: 2px gray solid;
      border-top-color: lightgray;
      border-left-color: lightgray;
      margin-bottom: 1px;
      margin-right: 2px;
      width: 20px;
      height: 20px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        transform: rotate(-45deg);
        left: 7px;
        top: 1px;
        width: 2px;
        height: 14px;
        background: #000;
      }
      &:after {
        content: '';
        position: absolute;
        transform: rotate(45deg);
        left: 7px;
        top: 1px;
        width: 2px;
        height: 14px;
        background: #000;
      }
    }
  }
  .content {
    display: flex;
    padding-bottom: 10px;
  }
  .left {
    width: 280px;
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 600px;
  }
  .top-bar {
    position: relative;
    margin: 10px 0 10px 10px;
    display: flex;
  }
  .logo {
    width: 100%;
    margin-top: 7px;
    text-align: center;
    img {
      border: 3px solid lightgray;
      border-right-color: #868788;
      border-bottom-color: darkgray;
      border-radius: 2px;
      width: 150px;
      height: 150px;
    }
  }
  .infos-container {
    border: 2px solid lightgray;
    margin: 10px 10px 0;
    padding: 10px 3px;
    font-weight: 700;
  }
  .infos-content {
    display: flex;
  }
  .infos-title {
    text-align: center;
    color: yellow;
    margin-bottom: 5px;
    font-size: 1rem;
  }
  .infos {
    padding-top: 5px;
    flex-grow: 1;
  }
  .info {
    text-align: center;
    color: #fff;
    min-height: 1em;
  }
  .time {
    font-size: 2em;
    height: 40px;
    font-weight: 100;
  }
  .bar {
    &-color {
      height: 100%;
      width: 20px;

      border: 1px solid gray;
      border-right-color: lightgray;
      border-bottom-color: lightgray;
      background: linear-gradient(to bottom, #0ad700, red);
      position: relative;
    }
    &-cover {
      position: absolute;
      width: 100%;
      height: 0;
      background: darkred;
    }
  }

  .announcement {
    color: #fff;
    font-size: 1.2em;
    flex-grow: 1;
    text-align: center;
    font-weight: 700;
  }
  .lang {
    border: rgb(90, 90, 90) 2px solid;
    border-right-color: lightgray;
    border-bottom-color: lightgray;
    select {
      background: transparent;
      width: 150px;
      height: 22px;
      color: #fff;
    }
  }
  .manuals {
    font-family: 'Times New Roman', Times, serif;
    background: #fff;
    flex-grow: 1;
    overflow-y: scroll;
    height: 300px;
    border: 2px solid gray;
    border-right: 0;
  }
  .manual {
    .title {
      font-size: 1.2em;
      font-weight: 900;
    }
  }
  .manual:not(:last-child) {
    margin-bottom: 20px;
  }
  footer {
    display: flex;
  }
  .contacts {
    padding: 27px;
  }
  .contact {
    cursor: pointer;
    color: #7be2e2;
    display: block;
    strong {
      font-size: 1.1em;
      color: #7bdfdf;
    }
  }
  .contact:not(:last-child) {
    margin-bottom: 20px;
  }

  .bitcoins {
    display: flex;
    border: 2px solid lightgray;
    padding: 10px 5px 10px 0;
    img {
      border: 2px solid lightgray;
      width: 170px;
      height: 66px;
    }
    .text {
      margin-left: 10px;
      flex-grow: 1;
      .hint {
        margin-bottom: 15px;
        font-weight: 700;
      }
      .inputs {
        height: 50%;
        display: flex;
        input {
          border: rgb(90, 90, 90) 3px solid;
          border-right-color: lightgray;
          border-bottom-color: lightgray;
          color: #fff;
          background: darkred;
          margin-right: 3px;
          flex-grow: 1;
          padding: 3px 0 10px 5px;
          font-size: 1em;
          font-weight: 700;
          pointer-events: none;
        }
        button {
          background: lightgray;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    button {
      background: lightgray;
      font-weight: 700;
      font-size: 1.2em;
      height: 35px;
      width: calc(50% - 20px);
    }
  }

  .yellow {
    color: yellow;
  }

  .darkred {
    color: darkred;
  }

  .underline {
    text-decoration: underline;
  }
`;
