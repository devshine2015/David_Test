import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../../screens/Home'

import { 
    getFlavors,
} from '../../actions/flavors';


class HomeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <Home {...this.props}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
       flavors: state.flavors.flavors,
       flavorsLoading: state.flavors.isLoading,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFlavors: () => {
            return dispatch(getFlavors())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);