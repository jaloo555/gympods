import React from 'react'
import {Button} from 'reactstrap'

class CartButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      desc: props.desc,
      flavors: props.flavors,
      url: "https://localhost:3000/snipcartParser"
    }
    this.processStr = this.processStr.bind(this)
  }

   processStr(arr) {
    let str = ""
    arr.forEach((val)=> {
      val = val.replace(/ /g, "_")
      str = str + "|" + val
    })
    return str.substr(1)
  }

  render() {
    let flavOptions = this.processStr(this.state.flavors)
    return (
      <Button 
          className="snipcart-add-item BuyButton"
          data-item-id={this.state.id}
          data-item-name={this.state.name}
          data-item-url={this.state.url}
          data-item-description={this.state.desc}
          data-item-price={this.state.price}

          data-item-custom1-name="flavors"
          data-item-custom1-required="true"
          data-item-custom1-options={flavOptions}

          data-item-custom2-name="servings"
          data-item-custom2-required="true"
          data-item-custom2-options="25|50[+15.00]|80[+30.00]"
        >
        ADD TO CART
        </Button>
    )
  }
}

export default (CartButton)