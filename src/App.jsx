import { HashRouter } from 'react-router'
import Router from './router/Router.jsx';
import { Provider } from 'react-redux';
import store from './store/index.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { get_token } from './utils/user.jsx';
import { initializeInterceptor } from './utils/http.jsx';

function App() {

  library.add(faUser,faChevronDown);

  // const token = get_token();
  // if (token) {
  //   store.dispatch(SET_TOKEN(token));
  // }

  initializeInterceptor();

  return (
    <>
      <Provider store={store}>
        <HashRouter>
            <Router />
        </HashRouter>
      </Provider>
    </>
  )
}

export default App
