import React, { Component } from 'react';
import Button from '../Button';
import RouteMap from './RouteMap';
import Card from '../Card';

class ConfirmRoute extends Component{
  render(){
    return(
      <Card>
        <RouteMap mapboxKey={this.props.mapboxKey}/>
        <Button /> 
        <Button />
      </Card>
    )
  }
}

export default ConfirmRoute;