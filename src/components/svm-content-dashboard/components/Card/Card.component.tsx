import React from 'react';
import { CardProps } from './Card.props';
import './Card.scss';

const Card: React.FC<CardProps> = ({title, value, background}) => {
  return (
    <div className="card" style={{background: background}}>
        <div className="card__title">
            {title}
        </div>
        <div className="card__data">
            {value}
        </div>
    </div>
  )
}

export default Card