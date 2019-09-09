import React from 'react'
import ReactDOM from 'react-dom'
import CustomizeList from './CustomizeList'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { USCurrencyFormat, updateFeature } from './App'

describe('CustomizeList component', () => {
  const state = {
    features: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700,
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200,
        },
      ],
      'Operating System': [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200,
        },
        {
          name: 'Bodhi Linux',
          cost: 300,
        },
      ],
      'Video Card': [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98,
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345,
        },
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400,
        },
      ],
    },
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  }
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <CustomizeList
        features={state.features}
        formatUS={USCurrencyFormat}
        selected={state.selected}
        updateFeature={(feature, newValue) =>
          updateFeature(feature, newValue)
        }
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders same UI', () => {
    const wrapper = shallow(
      <CustomizeList
      features={state.features}
      formatUS={USCurrencyFormat}
      selected={state.selected}
      updateFeature={(feature, newValue) =>
        updateFeature(feature, newValue)
      }
      />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
