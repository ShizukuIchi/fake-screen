import React from 'react';
import styled from 'styled-components';
import { Google } from 'src/themes';
import ie from '../ie.png';

function InternetExplorer() {
  return (
    <Div>
      <section className="ie__toolbar">
        {'File,Edit,View,Favorites,Tools,Help'.split(',').map(name => (
          <div className="ie__toolbar__item" key={name}>
            {name}
          </div>
        ))}
      </section>
      <section className="ie__function_bar">
        {'Back,Forward,Cancel,Refresh,Home'.split(',').map(name => (
          <div key={name} className="ie__function_bar__item">
            {name}
          </div>
        ))}
        <div className="ie__function_bar__separate" />
        {'Search,Favorites'.split(',').map(name => (
          <div key={name} className="ie__function_bar__item">
            {name}
          </div>
        ))}
      </section>
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">
            https://www.google.com.tw
          </div>
        </div>
        <div className="ie__address_bar__buttons">
          <div className="ie__address_bar__button">Go</div>
          <div className="ie__address_bar__separate" />
          <div className="ie__address_bar__button">Links</div>
        </div>
      </section>
      <div className="ie__content">
        <div className="ie__content__inner">
          <Google />
        </div>
      </div>
      <footer className="ie__footer" />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .ie__toolbar {
    background: rgb(200, 200, 200);
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 22px;
    border-bottom: 1px solid rgb(180, 180, 180);
  }
  .ie__toolbar__item {
    font-size: 10px;
    line-height: 22px;
    margin: 0 7px;
  }
  .ie__function_bar {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: rgb(200, 200, 200);
    font-size: 10px;
    padding: 0 5px;
    border-bottom: 1px solid rgb(180, 180, 180);
  }
  .ie__function_bar__item {
    height: 30px;
    line-height: 30px;
    margin: 0 5px;
  }
  .ie__function_bar__separate {
    height: 36px;
    width: 1px;
    background-color: rgb(160, 160, 160);
  }
  .ie__address_bar {
    height: 22px;
    font-size: 10px;
    display: flex;
    align-items: center;
    background-color: rgb(200, 200, 200);
    border-bottom: 2px solid rgb(160, 160, 160);
  }
  .ie__address_bar__title {
    line-height: 22px;
    padding: 5px;
  }
  .ie__address_bar__content {
    border: 0.5px blue solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    padding-left: 1px;
    &__img {
      width: 15px;
      height: 15px;
      margin-right: 1px;
    }
  }
  .ie__address_bar__buttons {
    display: flex;
  }
  .ie__address_bar__button {
    width: 50px;
    line-height: 22px;
    padding: 0 3px;
  }
  .ie__address_bar__separate {
    height: 22px;
    width: 1px;
    background-color: rgb(160, 160, 160);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    border-left: 1px solid rgb(160, 160, 160);
  }
  .ie__content__inner {
    min-height: 800px;
    position: relative;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 2px solid rgb(160, 160, 160);
    background-color: rgb(200, 200, 200);
  }
`;

export default InternetExplorer;
