import React, { Component } from 'react';
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute';
import CardLabel from '../components/CardLabel';
import Card from '../components/Card';
import * as searchActions from '../actions/fetchLocations';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ConfirmRouteContainer extends Component{

  render(){
    let cardLabel = "Does this look right?"

      return(
        <Card>
          <CardLabel cardLabel={cardLabel} />
          <ConfirmRoute  {...this.props}/> 
        </Card>
      )
    };
}

export default (mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    router: ownProps,
    actions: dispatchProps,
  };
})(ConfirmRouteContainer);