import React from 'react'
import slugify from 'slugify'
import CustomizeItem from './CustomizeItem'

export default function CustomizeList(props) {
  Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item))
      console.log('CustomizeList props are:',props)
      return <CustomizeItem key={itemHash} {...item} selected={props.selected} />
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
