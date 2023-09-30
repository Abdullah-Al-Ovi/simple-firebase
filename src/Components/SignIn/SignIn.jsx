import {GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../../firebase.init';
import { useState } from 'react';


const SignIn = () => {

    const [loggedInUser,setLoggedInUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            const user = res.user
            setLoggedInUser(user)
            console.log(res);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
        .then(res=>{
            setLoggedInUser(res.user)
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }

  const handleGoogleSignOut =()=>{

    signOut(auth)
    .then(res=>{
        setLoggedInUser(null)
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })

  }
  const handleTwitterSignIn=()=>{
    const twitterProvider = new TwitterAuthProvider()
    signInWithPopup(auth,twitterProvider)
    .then(res=>{
        console.log(res.user)
        setLoggedInUser(res.user);
    })
    .catch(err=>{
        console.log(err);
    })
  }
    return (
        <div className='text-center'>
            {
                loggedInUser && <div className='my-3'>
                <h1>User : {loggedInUser.displayName}</h1>
                <p>Email : {loggedInUser.email}</p>
                <div ><img className=' mx-auto' src ={loggedInUser.photoURL} /></div>
            </div>
            }
            {

                loggedInUser ?
                <button onClick={handleGoogleSignOut} className="p-1 rounded-md bg-red-500 text-white">Sign Out</button>
                :
            
                <div>
                    <button onClick={handleGoogleSignIn} className="p-1 rounded-md bg-red-500 text-white mx-2">Sign In With Google</button>
                    <button onClick={handleGithubSignIn} className="p-1 rounded-md bg-red-500 text-white">Sign In With Github</button>
                    <button onClick={handleTwitterSignIn} className="p-1 ml-3 rounded-md bg-red-500 text-white">Sign In With Twitter</button>
                </div>

            }
        </div>
    );
};

export default SignIn;