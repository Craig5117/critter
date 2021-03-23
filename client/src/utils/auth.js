import decode from 'jwt-decode';

class AuthService {

    getProfile() {
        return decode(this.getToken());
    }
    //more logic
    // loggedIn
    // isTokenExpired
    // getToken()
    // login
    // logout
}

export default new AuthService();