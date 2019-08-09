import React from 'react';



class Signup extends React.Component {
  render() {
    return (
      <div>
         <h1> Sign up Here </h1>
         <form>
           <div>
             <input type="text" name="first name" placeholder="First Name" />
             <label htmlFor="first name">First Name</label>
           </div>
           <div>
             <input type="text" name="last name" placeholder="Last name" />
             <label htmlFor="lastname">Last Name</label>
           </div>
           <input type="submit" value="Sign up" />
         </form>
      </div>
    )
  }
}


export default Signup
