import React from 'react'


export default class Login extends React.Component {

render() {
  return (
    <div>
      <br />
      <form>
        <div>
          <input type='text' name='username' placeholder='Username' />
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' plaeholder='Password'/>
          <label htmlFor='password'>Password</label>
        </div>
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

}
