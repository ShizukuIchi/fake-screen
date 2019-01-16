import React from 'react';
import styled from 'styled-components';

const Theme = ({ className, imgUrl, name, displayName }) => (
  <div className={className}>
    <div className="img-container">
      <img src={imgUrl} alt={name} />
    </div>
    <div className="title">{displayName}</div>
  </div>
);

export default styled(Theme)``;
