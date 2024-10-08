import React from "react";
import { Route, Routes } from "react-router-dom";
import { userStore } from "../store";
import PrivateRoute from "./PrivateRoute";
import AssignReporter from "../components/AssignCurrentWeekReporter";

const SignIn = React.lazy(() => import("../components/SignIn"));
const WeeklyStatus = React.lazy(() => import("../components/WeeklyStatus"));
const StatusReporting = React.lazy(
  () => import("../components/StatusReporting/index")
);
const ReportPreview = React.lazy(
  () => import("../components/ReportPreview/index")
);
const TeamSelection = React.lazy(
  () => import("../components/TeamSelection/index")
);
const AdminPanel = React.lazy(
  () => import("../components/Admin/AdminPanel/index")
);

const MembersManagement = React.lazy(
  () => import("../components/Admin/MembersManagement/index")
);

const TeamsManagement = React.lazy(
  () => import("../components/Admin/TeamsManagement/index")
);

const AppRoutes: React.FC = () => {
  userStore();

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/weekly-status"
        element={
          <PrivateRoute>
            <WeeklyStatus />
          </PrivateRoute>
        }
      />
      <Route
        path="/status-reporting"
        element={
          <PrivateRoute>
            <StatusReporting />
          </PrivateRoute>
        }
      />
      <Route
        path="/assign-reporter"
        element={
          <PrivateRoute allowedRoles={["TeamLead"]}>
            <AssignReporter />
          </PrivateRoute>
        }
      />
      <Route
        path="/report-preview"
        element={
          <PrivateRoute>
            <ReportPreview />
          </PrivateRoute>
        }
      />
      <Route
        path="/team-selection"
        element={
          <PrivateRoute>
            <TeamSelection />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={["Admin"]}>
            <AdminPanel />
          </PrivateRoute> 
        }
      />
      <Route
        path="/members-mgmt"
        element={
          <PrivateRoute>
            <MembersManagement />
          </PrivateRoute>
        }
      />
      <Route
        path="/teams-mgmt"
        element={
          <PrivateRoute>
            <TeamsManagement />
          </PrivateRoute>
        }
      />

      <Route
        path="*"
        element={
          <PrivateRoute>
            <WeeklyStatus />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
