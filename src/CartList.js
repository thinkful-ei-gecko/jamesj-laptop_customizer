import React from 'react'
import CartItem from './CartItem'

export default function CartList(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  )

  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx
    const selectedOption = props.selected[feature]
    return (
      <CartItem
        key={featureHash}
        feature={feature}
        selectedOption={selectedOption}
        formatUS={props.formatUS}
      />
    )
  })
  return (
    <>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {props.formatUS.format(total)}
        </div>
      </div>
    </>
  )
}
