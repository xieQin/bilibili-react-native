import React, { Component } from 'react';
import { Navigator , View , Text} from 'react-native';
import { bindActionCreators } from 'redux';
import Essence from '../layouts/Essence';
console.log(Essence)
import * as EssenceActions from '../actions/EssenceActions';
import { connect } from 'react-redux';

class BilibiliApp extends Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <Essence />
    )
  }
}

export default connect ( state => ({
  essence : state.essence,
}),
  (dispatch) => ({
    essence : bindActionCreators(EssenceActions , dispatch)
  })
)(BilibiliApp)