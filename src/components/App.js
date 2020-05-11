import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthState from '../context/auth/AuthState';
import AlertState from '../context/alert/AlertState';
import PrivateRouter from './Routes/PrivateRoute';
import UserState from '../context/user/UserState';
import Login from './pages/Login';
import Home from './pages/Home';
import DetailUser from './pages/DetailUser';
import EditUser from './pages/EditUser';
import DarkTheme from '../themes/dark';
import LightTheme from '../themes/light';

const GlobalStyle = createGlobalStyle`
body{
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
  font-family: 'Montserrat sans-serif';
}
`;
/**
 *  Main component
 * @returns all apliaction
 */
function App() {
  const [theme, setTheme] = useState(LightTheme);

return (
    <UserState>
      <AlertState>
        <ThemeProvider theme={{...theme, setTheme: () => {
          setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
        }}}>
          <GlobalStyle />
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRouter path="/user-detail/:id" component={DetailUser} />
                <PrivateRouter path="/user-edit/:id" component={EditUser} />
                <PrivateRouter path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </ThemeProvider>
      </AlertState>
    </UserState>
	);
}

export default App;
