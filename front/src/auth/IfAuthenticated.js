import * as auth0Client from " ./Auth"

const IfAuthenticated = ({ children, else:otherwise }) => {
    const isLoggedIn = auth0Client.isAuthenticated();
    return isLoggedIn ? children : otherwise || null;
}

export default IfAuthenticated