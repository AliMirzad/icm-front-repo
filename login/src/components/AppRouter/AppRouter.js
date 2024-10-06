import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Dashboard from '../Dashbord/Dashbord';
// import AppWraper from '../AppWraper/AppWraper';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route >
          <Route path="/" element={<SignIn />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
