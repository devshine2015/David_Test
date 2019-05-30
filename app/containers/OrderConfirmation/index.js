import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderConfirmation from '../../screens/OrderConfirmation'

import {

} from '../../actions/flavors';


class OrderConfirmationContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <OrderConfirmation {...this.props}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
       
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderConfirmationContainer);