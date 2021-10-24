import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuth=()=>{
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;


/* 

    Steps for authentication-

step-1: initial set up
1.firebase: create projects
2.create web app
3.get configuration
4.initialize firebase
5. enbale auth method


-----------------
Step-2: setup component
1.Create Login component
2.Create register component
3.Create route for login and register component

-----------------
Step-3: set auth system
1.setup sign in method
1.setup sign in method
1.user,error state
4.special observer
5.return necessary methods and states from usefirebase


-----------------
Step-4: create auth context hook (useAuth)
1.create auth context
1.create context provider
3.set context provider context value
4.use Auth Provider
5.create useAuth hooks
5.

-----------------
Step-5: create private route
1.create private route
1. set private route

-----------------
Step-6: redirect after login
1.after login to their desired destination
1. 



 */