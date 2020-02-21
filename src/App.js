import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin , GoogleLogout} from 'react-google-login';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={isLoggedin:false,email:"",name:"",logoutmessage:"",loginmessage:""};
  }


  render(){

      const responseGoogleSuccess = (response) => {
      this.setState({ isLoggedin: true ,email:response.profileObj.email,name:response.profileObj.givenName,loginmessage:"logged in successfully",logoutmessage:""})
      console.log(response);
      }

      const responseGoogleFailure = (response) => {
        console.log(response);
      }

      const logout=(res)=>{
        this.setState({isLoggedin:false,email:"",name:"",logoutmessage:"logged out successfully",loginmessage:""});
        console.log(res);
      }
    if(!this.state.isLoggedin){

      return (
        <div>
          <h1>
            {this.state.logoutmessage}
            </h1>
      <GoogleLogin
      clientId="286406665739-de2f5k8rkhrlh58ph73vojirblutvla9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy={'single_host_origin'}
    />
    </div>
    );
}
  else{
      return(
        <div>
          {this.state.loginmessage}
         <h2> name:{this.state.name}</h2>
         <h2> email:{this.state.email}</h2>
          <GoogleLogout
        clientId="286406665739-de2f5k8rkhrlh58ph73vojirblutvla9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
        </div>
      );
  }
}
}


export default App;
