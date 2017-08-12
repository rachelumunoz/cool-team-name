import React, { Component, PropTypes } from 'react';
import { getItem } from './PackActions'
import { connect } from 'react-redux';



class Pack extends Component {
  
  super(){
    this.state = {
      item : []
    }
  }

  componentDidMount() {
    console.log("I am mounted")
    this.props.dispatch(getItem());
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps)

    this.setState({
      item: nextProps.item
    })
  }

  renderItem(){
    const {item} = this.props;

    if(!item){
      return <div> empty </div>
    }

    return (
      <h1>{item}</h1>
    )
  }

  render(){
    
    return(
      <div>
        <h1>Pack Component !!! </h1>
        {this.renderItem()}
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log(state)
  return {
    item: state.packs.item
  }
}

export default connect(mapStateToProps, {getItem})(Pack);

