import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cssp from './CartPage.css'
class CartPage extends Component {
    constructor(props) {
        super(props)

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
  <div className="democa">
  <section>
    <div className="d-flex justify-content-center">
     <i className="mx-2  secondary-color z-depth-1 p-2 rounded-left text-white dasvdsv" ><img className="iconssa" src="src/images/packing-list@2x.png"/>
     <p className="mb-1 ml-1 text-center " style={{fontSize:'12px', marginTop:'3px',padding:'2px',fontWeight:"bold"}}>PLACE AN ORDER</p>
     </i>
      <i className="mx-2 danger-color z-depth-1 p-2 rounded-left text-white dasvdsv" ><img className="iconssa" src="src/images/trolley@2x.png"/>
     <p className="mb-1 ml-1 text-center " style={{fontSize:'12px', marginTop:'3px',padding:'2px',fontWeight:"bold"}}>MY ORDER</p>
      </i>
      <i className="mx-2 green z-depth-1 p-2 rounded-left text-white dasvdsv" ><img className="iconssa" src="src/images/boxes@2x.png"/>
     <p className="mb-1 ml-1 text-center " style={{fontSize:'12px', marginTop:'3px',padding:'2px',fontWeight:"bold"}}>INVENTORY</p>
      </i>
     </div>
     <div className="d-flex justify-content-center">
     <div className="button  lighten-2 m-1-half  text-dark  p-3  sdsbdvb ">
      <i className=" rounded-left text-white p-2 iconssa2"><img src="src/images/delivery@2x.png" className="iconssa2"/></i>
          <div style={{width:'70%',float:'right'}}>
            <p className="text-left mb-1 ml-3" style={{fontSize:'12px',marginTop:'-30px',padding:'2px',fontWeight:"bold"}}>On Site Delivery</p>
          </div>
    </div>
    <div className="button  lighten-2   m-1-half text-dark    p-3 sdsbdvb ">
      <i className=" rounded-left text-white p-2 iconssa2"><img src="src/images/warehouse@2x.png" className="iconssa2"/></i>
          <div style={{width:'70%',float:'right'}}>
            <p className="text-left mb-1 ml-3" style={{fontSize:'12px',marginTop:'-30px',padding:'2px',fontWeight:"bold"}}>Return</p>
          </div>
    </div>
    </div>
          <div className="text-center">
          <button className="btn btn-primary text-center align-middle rounded">Continue Shopping
            <i className=" fas fa-arrow-right mx-2" aria-hidden="true"></i>
          </button>

          </div>
  </section>
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