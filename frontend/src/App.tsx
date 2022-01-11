import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignInActions } from './modules/signIn';
import { useSelector } from './modules';
import CreateNotice from './components/CreateNotice/CreateNotice';
import CreateNewCrew from './components/Crew/CreateCrew/CreateCrew';
import Crew from './components/Crew/Crew';
import CrewDetail from './components/Crew/CrewDetail/CrewDetail';
import CrewManagement from './components/Crew/CrewManagement/CrewManagement';
import GuestPage from './components/GuestPage/GuestPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MyPage from './components/Mypage/MyPage';
import ViewNotice from './components/ViewNotice/ViewNotice';
import UserPage from './components/UserPage/Userpage';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.signIn.token);

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token');
    dispatch(SignInActions.setToken(localStorageToken || ''));
  }, [token]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guest" component={GuestPage} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/crew/new" component={CreateNewCrew} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/myPage/changePassword" component={MyPage} />
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/crew/:id" component={CrewDetail} />
          <Route exact path="/crew/:id/management" component={CrewManagement} />
          <Route
            exact
            path="/crew/:id/peopleManagement"
            component={CrewManagement}
          />
          <Route exact path="/notice/:noticeId" component={ViewNotice} />
          <Route exact path="/notice-create" component={CreateNotice} />
          <Route exact path="/userInfo" component={UserPage} />
        </Switch>
        <div id="modal" />
      </BrowserRouter>
    </>
  );
}

export default App;
