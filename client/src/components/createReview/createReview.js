// import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom'
// // import { createDestination } from '../../services/Destination';



// class CreateReview extends Component{
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          destination:[],
//          created:false
//       };
//     };
    
//     onDestinationFormChange = (event)=>{
//         const element = event.target
//         const name = element.name
//         const value = element.value

//         console.log(name,value);

//         this.setState({
//             [name]:value
//         })
//         // const newState = {}
//         // newState[name]=value
//         // this.setState(newState)
//     }
    
//     onDestinationFormSubmit = async (e)=>{
//         e.preventDefault()

//         console.log(`Form Submitted:`)
//         let newdestination = {
//             photo:this.state.photo,
//             description:this.state.description
//         }
//         console.log(newdestination)
//         const destination = await createDestination(newdestination)
//         this.setState({
//             destination:destination,
//             created:true
//         })
//     }
//     render(){
//         if(this.state.created === true){
//             return <Redirect to="/"/>
//         }
//         return(
//             <div>
//             <form onSubmit = {this.onDestinationFormSubmit}>
//               <label htmlFor="name">Destination Name:</label>
//               <input id="name" 
//               type ="text" 
//               name="name"
//               onChange={this.onDestinationFormChange}
//               placeholder="location" />
             
            
//             {/* <div>
//             <label htmlFor="name">Restaurant Neighborhood</label>
//               <input id="neighborhood" 
//               type ="text" 
//               name="neighborhood"
//               onChange={this.onRestaurantFormChange}
//               placeholder="Union Square" />
//             </div> */}
            
//             <div>
//             <label htmlFor="name">Paradise Photo</label>
//               <input id="photo" 
//               type ="text" 
//               name="photo"
//               onChange={this.onDestinationtFormChange}
//               placeholder=" " />
//             </div>
//             <div>
//                 <button type="submit">Add Review</button>
                
//             </div>
//             </form>
//             </div>
//             )
//     }


// }

// export default CreateReview