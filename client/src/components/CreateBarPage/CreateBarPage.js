import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

  import {
    createBar,
  } from '../../services/Bars';

class CreateBarPage extends Component {
    constructor(){
      super()

      this.state = {
        bar: [],
        created: false
      }
    }

    onBarFormChange = (event) => {
      const element = event.target
      const name = element.name
      const value = element.value

      console.log(name)

      // const { name, value } = event.target;

      // console.log(name, value)

      const newState = {}
      newState[name] = value

      this.setState(newState)

      // Thanks Cai!
      // this.setState({[name]: value})
    }

    onBarFormSubmit = async (event) => {
      event.preventDefault()

      console.log(`Form submitted: `)

      let newBar = {
        name: this.state.name,
        address: this.state.address,
        phone_number:this.state.phone_number,
        zip_code: this.state.zip_code,
        type:this.state.type

      }

      const bar = await createBar(newBar)

      this.setState({
        bar: bar,
        created: true
      })
    }

    render(){

      if(this.state.created === true) {
        return <Redirect to="/bars" />
      }

      return (
        <div>
          <form onSubmit={ this.onBarFormSubmit } >
            <div>
              <label htmlFor="name">Bar Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={ this.onBarFormChange }
                placeholder="Name" />
            </div>

            <div>
              <label htmlFor="address">Bar Address:</label>
              <input
                id="address"
                type="text"
                name="address"
                onChange={ this.onBarFormChange }
                placeholder="123 main st" />
            </div>
            <div>
            <label htmlFor="phone_number">Bar Phone Number:</label>
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                onChange={ this.onBarFormChange }
                placeholder="123-456-7890" />
            </div>
            
            <div>
              <label htmlFor="zip_code">Bar ZipCode:</label>
              <input
                id="zip_code"
                type="text"
                name="zip_code"
                onChange={ this.onBarFormChange }
                placeholder="11213" />
            </div>

            <div>
              <label htmlFor="type">Bar Type:</label>
              <input
                id="type"
                type="text"
                name="type"
                onChange={ this.onBarFormChange }
                placeholder="" />
            </div>

            <div>
              <button type="submit">Add Bar</button>
            </div>
          </form>
        </div>
      )
    }

}

export default CreateBarPage;