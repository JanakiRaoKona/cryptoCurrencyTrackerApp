// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {currencyTracker: [], isLoading: true}

  componentDidMount() {
    this.getTheCryptoCurrencyConverter()
  }

  getTheCryptoCurrencyConverter = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({currencyTracker: updatedData, isLoading: false})
  }

  render() {
    const {currencyTracker, isLoading} = this.state
    console.log(currencyTracker)
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="container-two">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />

            <div className="currency-container">
              <nav className="nav-cont">
                <p className="menu-currency">Coin Type</p>
                <div className="nav-cont2">
                  <p className="menu-currency">USD</p>
                  <p className="menu-currency">EURO</p>
                </div>
              </nav>
              <div>
                {currencyTracker.map(eachItem => (
                  <CryptocurrencyItem currency={eachItem} key={eachItem.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default CryptocurrencyList
