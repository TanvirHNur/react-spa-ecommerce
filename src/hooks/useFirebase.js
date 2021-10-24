import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeFirebaseAuth from "../firebase/firebase-init";


initializeFirebaseAuth();

const useFirebase =()=>{
    const [user,setUser]=useState({});

    const auth=getAuth();
    const GoogleProvider=new GoogleAuthProvider();


    const signiInWithGoogle=()=>{
       return signInWithPopup(auth,GoogleProvider)
        
    };

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser()
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        });
    }, [])

    return{
        user,
        signiInWithGoogle,
        logOut
    }
}


export default useFirebase;