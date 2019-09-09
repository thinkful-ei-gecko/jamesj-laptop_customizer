import React from 'react'
import ReactDOM from 'react-dom'
import CustomizeItem from './CustomizeItem'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { USCurrencyFormat, updateFeature } from './App'

describe('CustomizeItem component', () => {
  const item = {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700,
    }
  const selected = {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700,
    },
  }
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CustomizeItem
        key="{itemHash}"
        itemHash="{itemHash}"
        feature="Processor"
        formatUS={USCurrencyFormat}
        item={item}
        {...item}
        selected={selected}
        updateFeature={updateFeature}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders same UI', () => {
    const wrapper = shallow(
      <CustomizeItem
        key="{itemHash}"
        itemHash="{itemHash}"
        feature="Processor"
        formatUS={USCurrencyFormat}
        item={item}
        {...item}
        selected={selected}
        updateFeature={updateFeature}
      />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
