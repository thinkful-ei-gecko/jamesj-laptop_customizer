import React from 'react'
import slugify from 'slugify'
import CustomizeItem from './CustomizeItem'

export default function CustomizeList(props) {
  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item))

      return (
        <CustomizeItem
          key={itemHash}
          itemHash={itemHash}
          feature={feature}
          formatUS={props.formatUS}
          item={item}
          {...item}
          selected={props.selected}
          updateFeature={props.updateFeature}
        />
      )
    })

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
  })
}
