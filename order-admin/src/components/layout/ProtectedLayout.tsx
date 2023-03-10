import { useAuth } from "../../contexts/AuthProvider/useAuth"

export const ProtectedLayout = ({children} : { children : JSX.Element}) => {
    const auth = useAuth();

    if(!auth.token) {
        return <h1>You don't have access</h1>;
    }

    return children;
}