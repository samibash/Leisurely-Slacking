import React, { PureComponent } from 'react';

class BarInfo extends PureComponent {

  render() {
    const { info } = this.props;
    const displayName = `${info.name}`;
    const address =  `${info.address}`
    const zip = `${info.zip_code} `
    const number = `${info.phone_number}  `
    return (
      <div>
        <p>{displayName}</p>
        <p>{address}</p>
        <p>{zip}</p>
        <p>{number}</p>
      </div>
    )
  }
}

export default BarInfo;