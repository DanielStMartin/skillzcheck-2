import React, {Component} from "react";



class Product extends Component {
  
  state = {  }
  render() { 
    return ( 
      <div className='product'>
      <div className='image'>
          <img src={this.props.imageURL} className = 'product-image' />
       </div>

      <div className = 'name-price'>
              <h1>{this.props.name}</h1>
              <h3>{`${this.props.price}`}</h3>
      </div>
  </div>
      );
  }
}
export default Product;



  