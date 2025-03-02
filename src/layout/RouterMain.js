import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
// import { Login } from "../Pages/Login/Login";
import Login from "../Pages/Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import { Main } from "../Dashboard/Pages-in-Dashboard/Main/Main";
// import { ManagementCompany } from "../Dashboard/Pages-in-Dashboard/ManagementCompany/ManagementCompany";
import { CreateSite } from "../Dashboard/Pages-in-Dashboard/createSite/CreateSite";
import { BaseInfoManagement } from "../Dashboard/Pages-in-Dashboard/Base-info-Management/BaseInfoManagement";
import { Support } from "../Dashboard/Pages-in-Dashboard/Support/Support";
import { ManageUserCompany } from "../Dashboard/Pages-in-Dashboard/management-of-user-company/ManageUserCompany";
import PrivateRoute from "./PrivateRoute";
import LoginLayout from "./LoginLayout";
import CreateUser from "../Dashboard/Pages-in-Dashboard/CreateUser/CreateIUser";
// import { ProfileUser } from "../Dashboard/Pages-in-Dashboard/profile/ProfileUser";
import { AuthProvider } from "../AuthProvider/AuthProvider";
import ProfileUser from "../Dashboard/Pages-in-Dashboard/ProfileUser/ProfileUser";
import CompanyMang from "../Dashboard/Pages-in-Dashboard/CompanyMang/CompanyMang";
import { IcmUserMangment } from "../Dashboard/Pages-in-Dashboard/IcmUserMangment/IcmUserMangment";
// import {ManagementCompany} from "../Dashboard/Pages-in-Dashboard/ManagementCompany/ManagementCompany.jsx"
const RouterMain = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard/main" element={<Main />} />
            {/* <Route path="/dashboard/targetPanelName" element={<targetPanelName/>} /> */}
            <Route path="/dashboard/profilePanel" element={<ProfileUser />} />
            <Route
              path="/dashboard/icmCompanyManagement"
              element={<CompanyMang />}
            />
            <Route path="/dashboard/createsite" element={<CreateSite />} />
            {/* <Route path="dashboard/companyUser" element /> */}
            <Route
              path="/dashboard/icmBaseManagementInfo"
              element={<BaseInfoManagement />}
            />
            <Route path="/dashboard/createUser" element={<CreateUser />} />
            {/* <Route
            path="/dashboard/infomanagement"
            element={<BaseInfoManagement />}
          /> */}
            <Route path="/dashboard/support" element={<Support />} />
            <Route
              path="/dashboard/ManageUserCompany"
              element={<ManageUserCompany />}
            />
            <Route
              path="/dashboard/icmUserManagement"
              element={<IcmUserMangment />}
            />
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="/" element={<Home />} />
          <Route element={<LoginLayout />}>
            <Route element={<Login />} path="/login" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default RouterMain;
//  element={<ManagementCompany/>}
