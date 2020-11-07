// const set_data =()=>{
//    return(dispatch)=>{
//    dispatch({type:"SETDATA"})
  
//    }
// }
// export{
//     set_data
// }

import firebase from 'firebase';

const facebook_login =() => {
      return(dispatch)=>{
           
    var provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      
        var token = result.credential.accessToken;
     
        var user = result.user;
        console.log("user==>", user)
     
      }).catch(function(error) {
     
     var errorCode = error.errorcode;
     var errorMessage= error.message;
     console.log(errorMessage)
        
      });

      }
}
export {
      facebook_login
}