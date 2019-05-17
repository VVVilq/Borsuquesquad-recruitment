import fireapp from 'firebase/app'
import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgvElNBRNA8_hQAwpUSO-nZaDASWcRq1Y",
    authDomain: "borsuquesquad-authentication.firebaseapp.com",
    databaseURL: "https://borsuquesquad-authentication.firebaseio.com",
    projectId: "borsuquesquad-authentication",
    storageBucket: "borsuquesquad-authentication.appspot.com",
    messagingSenderId: "836170555377",
    appId: "1:836170555377:web:73be42b1cd08576e"
  };
  // Initialize Firebase

  class Firebase{
    constructor(){
      fireapp.initializeApp(firebaseConfig)
      this.auth = fireapp.auth()
    }

    login(email,password){
      return this.auth.signInWithEmailAndPassword(email,password)
    }

    logout(){
      return this.auth.signOut()
    }

     register(name,email,password){
       return this.auth.createUserWithEmailAndPassword(email,password).then(()=>{
        this.auth.currentUser.updateProfile({
          displayName: name
        })
       })  
    }

    authenticationListener(that) {
       this.auth.onAuthStateChanged(function (user) {

        if (user) {
          that.setState(
            {user}
          )
        } else {
          that.setState({
            user
          })       
        }       
      });      
    }
  }


  export default new Firebase()
