import React, { useEffect, useState } from "react";
import { userStore } from "../../store";
import { makeApiRequest } from "../../services/apiHelper";
import {
  TeamMemberWeeklyStatusRichTextData,
  TeamWeeklyRichTextStatusData,
} from "../../types/WeeklyStatus.types";
import moment from "moment";
import "./styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { generateHTML, generateMarkdown, generatePDF } from "./reportService";

const StatusReporting: React.FC = () => {
  const { teamId, teamName } = userStore();
  const [localTeamName, setLocalTeamName] = useState(teamName);
  const [teamWeeklyStatusData, setTeamWeeklyStatusData] =
    useState<TeamWeeklyRichTextStatusData | null>(null);
  const [unreportedMembers, setUnreportedMembers] = useState<
  TeamMemberWeeklyStatusRichTextData[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initialStartDate = moment().startOf("week").toDate();
  const [startDate] = useState(initialStartDate);
  const endDate = moment().endOf("week").toDate();

  const navigate = useNavigate();

  useEffect(() => {
    setLocalTeamName(teamName);

    const unsubscribe = userStore.subscribe((state) => {
      if (state.teamName !== localTeamName) {
        setLocalTeamName(state.teamName);
      }
    });

    return () => unsubscribe();
  }, [localTeamName, teamName]);

  useEffect(() => {
    const fetchTeamWeeklyStatus = async () => {
      setIsLoading(true);
      const requestData = {
        memberId: null,
        teamId: teamId,
        weekStartDate: startDate.toISOString(),
      };
      const response: TeamWeeklyRichTextStatusData = await makeApiRequest(
        "/v2.0/WeeklyStatus/GetAllWeeklyStatusesByStartDate", // Updated endpoint
        "POST",
        requestData
      );

      if (response) {
        setTeamWeeklyStatusData(response);
        const membersWhoDidNotReport = response.filter(
          (member) => !member.weeklyStatus
        );
        setUnreportedMembers(membersWhoDidNotReport);
      }
      setIsLoading(false);
    };

    fetchTeamWeeklyStatus();
  }, [localTeamName, startDate, teamId]);

  const editorData = generateHTML(
    localTeamName ?? "",
    startDate,
    endDate,
    teamWeeklyStatusData || []
  );

  const handleBack = () => {
    navigate("/weekly-status");
  };

  const handleDownloadMarkdown = () => {
    if (!teamWeeklyStatusData) return;

    const markdownContent = generateMarkdown(
      localTeamName,
      startDate,
      endDate,
      teamWeeklyStatusData
    );

    const blob = new Blob([markdownContent], {
      type: "text/markdown;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute(
      "download",
      `${localTeamName}-Weekly-Status-${startDate.toDateString()}.md`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDF = async () => {
    if (!teamWeeklyStatusData) return;

    const doc = await generatePDF(
      localTeamName || "",
      startDate,
      endDate,
      teamWeeklyStatusData
    );

    doc.save(`${localTeamName}-Weekly-Status-${startDate.toDateString()}.pdf`);
  };

  return (
    <div className="status-reporting-container">
      <h5 className="status-reporting-header">
        This is a read-only view. The changes done here are not persisted in the
        database.
      </h5>

      <div className="status-reporting-buttons">
        <Button variant="secondary" onClick={handleBack} className="mt-3">
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleDownloadPDF}
          className="mt-3 ml-2"
          disabled={!teamWeeklyStatusData || isLoading}
        >
          Download PDF
        </Button>
        <Button
          variant="primary"
          onClick={handleDownloadMarkdown}
          className="mt-3 ml-2"
          disabled={!teamWeeklyStatusData || isLoading}
        >
          Download Markdown
        </Button>
      </div>

      {isLoading ? (
        <div className="status-reporting-loading">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="status-reporting-editor">
          <ReactQuill
            value={editorData}
            readOnly={true}
            theme="bubble" // Or "snow" based on your preference
            modules={{ toolbar: false }}
          />
        </div>
      )}

      <div className="status-reporting-unreported">
        <span className="unreported-title">
          Members who haven't reported yet:
        </span>{" "}
        {unreportedMembers.map((member) => member.memberName).join(", ")}
      </div>
    </div>
  );
};

export default StatusReporting;
