import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase,init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

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
        return signInWithPopup(auth, googleProvider)

    };
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(resutl => {
                setUser(resutl.user)
            })
            .catch(error => {
                setError(error.message);
            })
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
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push('/home');
            setUser({});
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
        signInWithEmail
    }
};

export default useFirebase;