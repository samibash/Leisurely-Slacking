import React, { PureComponent } from 'react';

class BarInfo extends PureComponent {

  render() {
    const { info } = this.props;
    console.log(info);
    
    const displayName = `${info.name}`;
    const address =  `${info.address}`
    const zip = `${info.zip_code} `
    const number = `${info.phone_number}  `
    return (
      <div>
      <span>Bar Name:</span><p>{displayName}</p>
      <span>Bar Address:</span> <p>{address}</p>
      <span>Bar Zipcode:</span> <p>{zip}</p>
      <span>Bar Number:</span> <p>{number}</p>

        {/* <img width={20} src={info.imag}/> */}
      </div>
    )

  }
}

export default BarInfo;