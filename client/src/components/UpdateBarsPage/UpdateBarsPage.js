import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { updateBar } from '../../services/Bars';

class UpdateBarPage extends Component {
  constructor(props){
    super(props)
    this.state ={
      bar: props.currentBar,
      updated:false
    }
  }

  onBarFormChange = async (event) => {
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(this.state);

    await this.setState(state => {
      return {
        ...state,
        'bar': { ...state.bar, [name]: value }
      } 
    })
  }


  onBarFormSubmit = async (event) => {
    event.preventDefault()

    let updatedBar = {
      name: this.state.bar.name,
      address: this.state.bar.address,
      phone_number:this.state.bar.phone_number,
      zip_code: this.state.bar.zip_code,
      type:this.state.bar.type
    }
    const bar = await updateBar(this.props.currentBar.id, updatedBar)

    this.setState({
      bar: bar,
      updated: true
    })
  }

  render(){
    if(this.state.updated === true) {
      return <Redirect to="/bars" />
    }
    
    return (
      <div className="updateBarPage">
      <form onSubmit={ this.onBarFormSubmit } >
        <div>
          <label htmlFor="name">Bar Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue={this.props.currentBar.name}
            onChange={ this.onBarFormChange }
            placeholder="Name" />
        </div>

        <div>
          <label htmlFor="address">Bar Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            defaultValue={this.props.currentBar.address}
            onChange={ this.onBarFormChange }
            placeholder="123 main st" />
        </div>
        
        <div>
        <label htmlFor="phone_number">Bar Phone Number:</label>
          <input
            id="phone_number"
            type="text"
            name="phone_number"
            defaultValue={this.props.currentBar.phone_number}
            onChange={ this.onBarFormChange }
            placeholder="123-456-7890" />
        </div>
        
        <div>
          <label htmlFor="zip_code">Bar ZipCode:</label>
          <input
            id="zip_code"
            type="text"
            name="zip_code"
            defaultValue={this.props.currentBar.zip_code}
            onChange={ this.onBarFormChange }
            placeholder="11213" />
        </div>

        <div>
          <label htmlFor="type">Bar Type:</label>
          <input
            id="type"
            type="text"
            name="type"
            defaultValue={this.props.currentBar.type}
            onChange={ this.onBarFormChange }
            placeholder="" />
        </div>

        <div>
          <button 
            onClick={() => this.onBarFormSubmit}
            type="submit">Update Bar</button>
        </div>
      </form>
    </div>
    )
  }
}

export default UpdateBarPage;