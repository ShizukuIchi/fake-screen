import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from 'src/assets/github-logo.png';

function GithubProfile({ className }) {
  const [data, setData] = useState({ url: '', stars: 0 });
  useEffect(() => {
    fetch('http://api.github.com/repos/shizukuichi/fake-screen')
      .then(r => r.json())
      .then(({ html_url, stargazers_count, ...rest }) => {
        console.log(rest);
        setData({
          url: html_url,
          stars: stargazers_count,
        });
      });
  }, []);
  return (
    <div className={className}>
      <a className="gh-link" href={data.url}>
        <img src={logo} alt="github" className="gh-icon" />
        <span className="gh-text">Star</span>
      </a>
    </div>
  );
}

export default styled(GithubProfile)`
  margin-top: 2px;
  display: inline-block;
  .gh-link {
    display: flex;
    align-items: center;
    background: rgb(240, 240, 240);
    padding: 2px 4px;
    border: 1px solid #b8b8b8;
    display: inline-flex;
    border-radius: 2px;
    text-decoration: none;
    line-height: 12px;
    box-shadow: inset 0 -4px 10px -2px rgb(0, 0, 0, 0.25);
    &:hover {
      background: rgb(225, 225, 225);
    }
  }
  .gh-icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
  .gh-text {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`;
