import React from 'react';
import slugify from 'slugify';

export default function CustomizeItem(props) { 
  console.log('CustomizeItem props are:',props)
  return (
  <div key={props.itemHash} className="feature__item">
    <input
      type="radio"
      id={props.itemHash}
      className="feature__option"
      name={slugify(props.feature)}
      checked={props.name === props.selected[props.feature].name}
      onChange={e => props.updateFeature(props.feature, props.item)}
    />
    <label htmlFor={props.itemHash} className="feature__label">
      {props.name} ({props.USCurrencyFormat.format(props.cost)})
    </label>
  </div>
)}