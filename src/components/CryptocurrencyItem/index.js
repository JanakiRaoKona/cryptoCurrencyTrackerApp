// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currency
  return (
    <li>
      <div className="rows">
        <div className="rows">
          <img
            className="currency-logo"
            src={currencyLogo}
            alt={currencyName}
          />
          <p className="names">{currencyName}</p>
        </div>
        <div className="rows">
          <p className="names">{usdValue}</p>
          <p className="names">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
