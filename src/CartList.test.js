import React from 'react'
import ReactDOM from 'react-dom'
import CartList from './CartList'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { USCurrencyFormat } from './App'

describe('CartList component', () => {
  const selected = {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700,
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200,
    },
  }

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CartList selected={selected} formatUS={USCurrencyFormat} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders same UI', () => {
    const wrapper = shallow(
      <CartList selected={selected} formatUS={USCurrencyFormat} />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
