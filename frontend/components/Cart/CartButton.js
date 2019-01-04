import React from 'react'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      flavor: props.flavor
    }
  }

  render() {
    return (
      <button 
          className="snipcart-add-item"
          data-item-id={this.state.id}
          data-item-name={this.state.name}
          data-item-price={this.state.price}
        >
        ADD TO CART
      </button>
    )
  }
}

export default (Cart)