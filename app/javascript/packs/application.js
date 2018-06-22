import 'css/application.scss';
import ReactOnRails from 'react-on-rails';
import App from './app';
//import FindWords from '../component/findwords'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
});
