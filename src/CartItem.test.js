import React from 'react'
import ReactDOM from 'react-dom'
import CartItem from './CartItem'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { USCurrencyFormat } from './App'

describe('CartItem component', () => {
  const selectedOption = {
    name: '17th Generation Intel Core HB (7 Core with donut spare)',
    cost: 700,
  }
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CartItem
        featureHash="foo"
        feature="foo"
        selectedOption={selectedOption}
        formatUS={USCurrencyFormat}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders same UI', () => {
    const wrapper = shallow(<CartItem
      featureHash="foo"
      feature="foo"
      selectedOption={selectedOption}
      formatUS={USCurrencyFormat}
    />
    )
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})
