import {
  Container,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl
} from 'reactstrap'
import CartBtn from '../Cart/CartButton'

// sample data
const sampleItems = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeIndex: 0}
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === sampleItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? sampleItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const {activeIndex} = this.state
    const slides = sampleItems.map((item) => {
      return (
        <CarouselItem
          onExited={this.onExited}
          onExiting={this.onExiting}
          key={item.src}>
          <img src={item.src} alt={item.altText}/>
        </CarouselItem>
      )
    })
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={sampleItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }


}

class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleFlavorChange = this.handleFlavorChange.bind(this)
    this.state = {
      // default value as 1st item
      name: this.props.name,
      _id: this.props._id,
      selectedPrice: this.props.sizes[0].price,
      selectedFlavor: this.props.initialFlavor,
    }
  }

  handlePriceChange(e) {
    this.setState({
      selectedPrice: e.target.value,
    })
  }

  handleFlavorChange(e) {
    this.setState({
      selectedFlavor: e.target.value
    })
  }

  render() {
    const servingSelector = this.props.sizes.map((size)=> (
      <option value={size.price} key={size.servings}>{size.servings} Servings</option>
    ))

    const flavorSelector = this.props.flavors.map((val) => (
      <option value={val} key={val}>{val} flavor</option>
    ))

    const desc = 'Flavor: ' + this.state.selectedFlavor
    
    return (
      <div>
        {/* Price */}
        <select value={this.state.selectedPrice}
          onChange={this.handlePriceChange} className="servingSelector">
          {servingSelector}
        </select>
        {/* Flavor */}
        <select value={this.state.selectedFlavor}
          onChange={this.handleFlavorChange} className="flavorSelector">
          {flavorSelector}
        </select>

        <CartBtn 
          id={this.state._id}
          name={this.state.name}
          price={this.state.selectedPrice}
          desc={desc}
          flavors={this.props.flavors}
        />

        {/* debug */}
        <div>
          <h2>{this.state.selectedFlavor}, {this.state.selectedPrice}, {this.state.name}</h2>
        </div>
      </div>
    )
  }
}

class ProductView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const flavors = this.props.supplement.flavors[0]
    const validFlavors = (Object.keys(flavors).filter(key => flavors[key]==true))
    return (
      <Container fluid>
        <div className="header">
          <h1>{this.props.supplement.name}</h1>
        </div>
        <div className="imgView">
          <ImageViewer/>
        </div>
        <div className="selection">
          <Selector initialFlavor={validFlavors[0]} 
                    name={this.props.supplement.name} 
                    sizes={this.props.supplement.sizes} 
                    flavors={validFlavors}
                    _id={this.props.supplement._id}/>
        </div>
        <style jsx>{`
          .imgView {
            background-color: gray;
            width: 50%;
            height: 50%;
          }
        `}
        </style>
      </Container>
    )
  }
}
export default ProductView