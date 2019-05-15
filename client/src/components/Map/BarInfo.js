import React, { PureComponent } from 'react';

class BarInfo extends PureComponent {

  render() {
    const { info } = this.props;
    console.log(info);
    
    const displayName = `${info.name}
    ${info.address}  ${info.zip_code} 
    ${info.phone.number} 
    
    `;

    return (
      <div>
        <div>{displayName}</div>
        {/* <img width={20} src={info.imag}/> */}
      </div>
    )

  }
}

export default BarInfo;