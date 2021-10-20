import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase,init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { useHistory } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                redirect();
            }).catch((error) => {
                setError(error.message);
            });

    };
    const redirect = () => {
        getRedirectResult(auth)
            .then((result) => {
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message)
            });
    }
    useEffect(() => {
        const unsubscibed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscibed;
    }, [])
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            history.push('/home')
            setUser({});;
        }).catch((error) => {
            // An error happened.
            setError("");
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        setUser,
        setError,
        signInUsingGoogle,
        isLoading,
        handleLogOut,
    }
};

export default useFirebase;