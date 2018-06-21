
import 'css/application.scss';
import ReactOnRails from 'react-on-rails';

import Countdown from './countdown';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Countdown,
});
