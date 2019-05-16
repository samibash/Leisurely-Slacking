import React, { Component } from 'react';

import {
  updateBar,
} from '../../services/Bars';

class UpdateBarPage extends Component {
  render(){
    
    return (
      <div className="updateBarPage">
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
          <button type="submit">Update Bar</button>
        </div>
      </form>
    </div>
    )
  }
}

export default UpdateBarPage;