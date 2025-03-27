// This routes layout is used display the routes with authenticated users
// by accessing the user data using 'UseAuth' hook of cleck . And render the necessary components

import { useAuth } from "@clerk/clerk-react"

const ProtectedRoutes = ({ children } : {children : React.ReactNode}) => {
    // useAuth return two parameters isLoaded (Data loaded) and isSignedIn (for signedin or not) 
    const {isLoaded , isSignedIn} = useAuth();

    // not loaded , then show loader
    if(!isLoaded){
        return <LoaderPage/>;
    }

    // not signedIn , then show navigate to signin else replace
     

    return 
}

export default ProtectedRoutes