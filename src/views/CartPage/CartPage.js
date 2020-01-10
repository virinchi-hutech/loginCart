import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssp from './CartPage.css'
import Item from '../../components/Items/Item'
import { Timeline } from 'antd'
class CartPage extends Component {
    constructor(props) {
        super(props)
        this.items = []
        var a = [
          {
              itemID:'VSDVSDVVDS',
              title:'White Upvc Threaded Ball Valve, Size: 15 Mm To 50 Mm',
              count: 0,
              description:'Available Quantity: 500 units',
              image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg'
          },
          {
            itemID:'wgesfvsdvf',
            title:'White Upvc Threaded Ball Valve, Size: 15 Mm To 50 Mm',
            count: 0,
            description:'Available Quantity: 500 units',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg'
        },
        {
          itemID:'dvsdvsdv',
          title:'White Upvc Threaded Ball Valve, Size: 15 Mm To 50 Mm',
          count: 0,
          description:'Available Quantity: 500 units',
          image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg'
      },
      ]
      a.forEach(k=>{
        this.items.push(<Item>{k}</Item>)
      })
    }

    componentWillMount() {
          

    }

    componentDidMount() {
          

    }

    componentWillReceiveProps(nextProps) {
            
    }

    shouldComponentUpdate(nextProps, nextState) {
          

    }

    componentWillUpdate(nextProps, nextState) {
          

    }

    componentDidUpdate(prevProps, prevState) {
          

    }

    componentWillUnmount() {
          

    }

    render() {
        return (
            <div>
  <div className="sideNava">
    <img srcSet="src/images/1-copy-b.png" className="logo" />
  </div>
  <div className="content ">
  
  
  <div className="container py-1  rounded my-4" style={{float:'right',marginRight:'10px', width:'65%'}}>
  {/*Section: Content*/}
  <section className="dark-grey-text bg-white">
    {/* Shopping Cart table */}
    <div className="table-responsive w-100 white" >
      <table className="table product-table mb-0 w-100">
        {/* Table body */}
        <tbody>
          {/* First row */}
          {this.items}
          {/* /.First row */}
         
        </tbody>
        {/* /.Table body */}
      </table>
    </div>
    {/* /.Shopping Cart table */}
  </section>
  {/*Section: Content*/}
 </div>

  </div>
  <div className="footer"> 
  </div>
</div>

        )
    }   
}

CartPage.propTypes = {

}

export default CartPage