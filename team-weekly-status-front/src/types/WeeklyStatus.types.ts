import WeeklyStatus from "../components/WeeklyStatus/index";

export interface Subtask {
  subtaskDescription: string;
}
export interface TaskWithSubtasks {
  taskDescription: string;
  subtasks: Subtask[];
}
export interface WeeklyStatusData {
  id: number;
  weekStartDate: Date | string;
  doneThisWeek: TaskWithSubtasks[];
  planForNextWeek: string[];
  upcomingPTO: (Date | string)[];
  blockers: string;
  memberId: number;
  teamId: number;
}

export interface TeamMemberWeeklyStatusData {
  memberName: string;
  weeklyStatus: WeeklyStatusData | null;
}

export type TeamWeeklyStatusData = TeamMemberWeeklyStatusData[];

export interface UserValidationResult {
  success: boolean;
  role: string;
  teamName: string;
  memberId: number;
  memberName: string;
}

export type Member = {
  id: number;
  name: string;
  email?: string;
};

export interface GoogleLoginResponse {
  success: boolean;
  role: "TeamLead" | "CurrentWeekReporter" | "Normal" | null;
  teamName: string | "";
  memberId: number | 0;
  memberName: string | "";
}

export type Team = {
  id: number;
  name: string;
};

export type TeamMember = {
  teamId: number;
  teamName: string;
  memberId: number;
  memberName: string;
  isTeamLead: boolean;
  isCurrentWeekReporter: boolean;
  isAdminMember: boolean;
  startActiveDate: string;
  endActiveDate: string;
};

export type MemberTeams = TeamMember[];
