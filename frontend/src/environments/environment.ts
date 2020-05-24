/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'devanshi-udacity', // the auth0 domain prefix
    audience: 'Coffee Shop Full Stack', // the audience set for the auth0 app
    clientId: '5ec9e6c0c4d10e001741474e', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
  }
};
