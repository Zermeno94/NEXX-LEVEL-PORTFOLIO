import React, {Comonent} from 'react';

export default class About extends Component {
    render(){
        const resumeInfo = this.props.resumeInfo;
        return(
            <section id="about">
            <div className="row">
   
               <div className="three columns">
   
                  <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
   
               </div>
   
               <div className="nine columns main-col">
   
                  <h2>About Me</h2>
                  <p>
                  {
                    resumeInfo.aboutme
                  }
                  </p>
   
                  <div className="row">
   
                     <div className="columns contact-details">
   
                     <h2>Contact Details</h2>
                     <p className="address">
                                  <span>{resumeInfo.name}</span>
                        <br></br>
                                     <span>
                        {resumeData.address}
                       </span>
                       <br></br>
                       <span>{resumeInfo.website}</span>
                                 </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
       );
     }
   }