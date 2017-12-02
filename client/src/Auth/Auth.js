import Auth0Lock from "auth0-lock";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

let options = {
  auth: {
    redirectUrl: "http://localhost:3000/home",
    responseType: "token",

    params: {
      scope: "openid" // Learn about scopes: https://auth0.com/docs/scopes,
    }
  },
  theme: {
    primaryColor: "tomato"
  },
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  }
};

let optionsSignUp = {
  auth: {
    redirectUrl: "http://localhost:3000/create/user",
    responseType: "code",

    params: {
      scope: "openid" // Learn about scopes: https://auth0.com/docs/scopes,
    }
  },
  theme: {
    primaryColor: "tomato"
  },

  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "chews"
  }
};

export default class Auth {
  lock = new Auth0Lock(
    "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    "app81460790.auth0.com",
    options
  );

  lockSignUp = new Auth0Lock(
    "Evy4W2oGK1HUFAr7XvVAcKTCq-GcF5kP",
    "app81460790.auth0.com",
    optionsSignUp
  );

  constructor() {
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    return this.lock.show();
  }

  signUp() {
    return this.lockSignUp.show();
  }

  logout() {
    // Clear access information from local storage
    localStorage.removeItem("expires_at");
    localStorage.removeItem("userId");
    // navigate to the home route
    history.replace("/home");
  }
}
