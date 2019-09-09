import React, { Component } from 'react'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css'
import CustomizeList from './CustomizeList'
import CartList from './CartList'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

class App extends Component {
  constructor() {
    super()
    this.state = {
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
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected)
    selected[feature] = newValue
    this.setState({
      selected,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomizeList
              features={this.state.features}
              formatUS={USCurrencyFormat}
              selected={this.state.selected}
              updateFeature={(feature, newValue) =>
                this.updateFeature(feature, newValue)
              }
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <CartList
              formatUS={USCurrencyFormat}
              selected={this.state.selected}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default App
