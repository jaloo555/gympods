import React from 'react'
import Layout from '../components/Layout/Layout'

export default class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <h1>Checkout</h1>
        <div className="snipcart-summary">
            <a href="#" className="snipcart-user-email snipcart-user-profile">
                Customer dashboard
            </a>
        </div>
        <div>
           
        </div>
        <div className="snipcart-summary">
            Number of items: <span className="snipcart-total-items"></span>
            Total price: <span className="snipcart-total-price"></span>
        </div>
      </Layout>
    )
  }
}