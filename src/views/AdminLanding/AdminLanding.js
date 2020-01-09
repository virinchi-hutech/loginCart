import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './AdminLanding.css'

class AdminLanding extends Component {
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
  <div className="sideNav">
    <img srcSet="src/images/1-copy.png" className="logo" />
  </div>
  <div className="content ">
  <div className="democa">
  <section>
    <div className="d-flex justify-content-center">
     <i className="mx-2  secondary-color z-depth-1 p-2 rounded-left text-white" ><img className="iconssa" src="src/images/packing-list@2x.png"/>
     <p className="font-weight-thin mb-1 ml-1 text-center h6">PLACE AN ORDER</p>
     </i>
      <i className="mx-2 danger-color z-depth-1 p-2 rounded-left text-white" ><img className="iconssa" src="src/images/trolley@2x.png"/>
     <p className="font-weight-thin mb-1 ml-1 text-center h6">MY ORDER</p>
      </i>
      <i className="mx-2 green z-depth-1 p-2 rounded-left text-white" ><img className="iconssa" src="src/images/boxes@2x.png"/>
     <p className="font-weight-thin mb-1 ml-1 text-center h6">INVENTORY</p>
      </i>
     </div>
     <div className="d-flex justify-content-center">
     <div className="button white lighten-2 m-2  text-dark rounded p-3   sdsbdvb">
      <i className=" rounded-left text-white p-2 iconssa2"><img src="src/images/delivery@2x.png" className="iconssa2"/></i>
      <div className="media-body">
        <p className="font-weight-bold mb-1 ml-3">13 540</p>
      </div>
    </div>
    <div className="button white lighten-2  m-2 text-dark  rounded  p-3  sdsbdvb">
      <i className=" rounded-left text-white p-2 iconssa2"><img src="src/images/warehouse@2x.png" className="iconssa2"/></i>
      <div className="media-body">
        <p className="font-weight-bold mb-1 ml-3">13 540</p>
      </div>
    </div>
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

AdminLanding.propTypes = {

}

export default AdminLanding