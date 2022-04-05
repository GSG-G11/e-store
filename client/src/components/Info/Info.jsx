import React from 'react';
import { Button, Icon } from '../generic';
import './Info.css';

const Info = (props) => {
  const { title, label, onClick, button, icon } = props;

  return (
    <>
      <div className="info-card">
        <div className="container">
          <p className="info-card-title">{title}</p>
          <div className="card-footer">
            <p>{label}</p>
            <div className="card-info-button">
              <Button onClick={onClick}>
                {button}
                <Icon className={icon}></Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
