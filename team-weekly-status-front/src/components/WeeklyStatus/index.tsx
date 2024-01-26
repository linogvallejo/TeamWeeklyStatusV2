import React, { useEffect, useState } from "react";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import moment from "moment";
import { userStore } from "../../store";
import {
  WeeklyStatusData,
  TaskWithSubtasks,
  Subtask,
} from "../../types/WeeklyStatus.types";
import { makeApiRequest } from "../../services/apiHelper";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface WeeklyStatusProps {
  role: "TeamLead" | "CurrentWeekReporter" | "Normal";
  teamName: string;
  memberName: string;
  memberId: number;
}

const WeeklyStatus: React.FC = () => {
  const { role, teamName, memberName, memberId } = userStore();
  const [localMemberId, setLocalMemberId] = useState(memberId);
  const [existingWeeklyStatus, setExistingWeeklyStatus] =
    useState<WeeklyStatusData | null>(null);
  const [doneThisWeek, setDoneThisWeek] = useState<TaskWithSubtasks[]>([
    { taskDescription: "", subtasks: [{ subtaskDescription: "" }] }, // Ensuring subtasks are an array of Subtask objects
  ]);
  const [planForNextWeek, setPlanForNextWeek] = useState<string[]>([""]);
  const [blockers, setBlockers] = useState<string>("");
  const [upcomingPTO, setUpcomingPTO] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const initialStartDate = moment().startOf("week").toDate();
  const [startDate, setStartDate] = useState(initialStartDate);

  const endDate = moment().endOf("week").toDate();
  const nextWeekStart = moment().add(1, "weeks").startOf("isoWeek");
  const nextWeekEnd = moment().add(1, "weeks").endOf("isoWeek");
  const inTwoMonths = moment().add(2, "months").endOf("isoWeek");

  const navigate = useNavigate();

  useEffect(() => {
    // Subscribe to memberId changes
    const unsubscribe = userStore.subscribe((state) => {
      if (state.memberId !== localMemberId) {
        setLocalMemberId(state.memberId);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchExistingStatus = async () => {
      const requestData = {
        memberId: memberId,
        weekStartDate: startDate.toISOString(),
      };
      const response: WeeklyStatusData = await makeApiRequest(
        "/WeeklyStatus/GetByMemberIdAndStartDate",
        "POST",
        requestData
      );

      if (response) {
        setExistingWeeklyStatus(response);
        setDoneThisWeek(response.doneThisWeek);
        setPlanForNextWeek(response.planForNextWeek);
        setUpcomingPTO(
          response.upcomingPTO.map((date) =>
            typeof date === "string" ? date : date.toISOString().split("T")[0]
          )
        );
        setBlockers(response.blockers);
      }
    };

    fetchExistingStatus();
  }, [localMemberId, startDate]);

  const handleSubtaskChange = (
    taskIndex: number,
    subtaskIndex: number,
    value: string,
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((currentTasks) => {
      const newTasks = [...currentTasks];
      newTasks[taskIndex].subtasks[subtaskIndex] = {
        subtaskDescription: value,
      };
      return newTasks;
    });
  };

  const addSubtask = (
    taskIndex: number,
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((currentTasks) => {
      console.log('Adding subtask');
      const newTasks = [...currentTasks];
      newTasks[taskIndex].subtasks.push({ subtaskDescription: "" });
      return newTasks;
    });
  };

  const removeSubtask = (
    taskIndex: number,
    subtaskIndex: number,
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((currentTasks) => {
      const newTasks = [...currentTasks];
      newTasks[taskIndex].subtasks.splice(subtaskIndex, 1);
      return newTasks;
    });
  };

  const handleTaskChange = (
    index: number,
    value: string,
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((currentTasks) => {
      const newTasks = [...currentTasks];
      newTasks[index] = { ...newTasks[index], taskDescription: value };
      return newTasks;
    });
  };

  const handlePlanChange = (index: number, value: string) => {
    const newPlans = [...planForNextWeek];
    newPlans[index] = value;
    setPlanForNextWeek(newPlans);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;

    const index = upcomingPTO.indexOf(dateStr);

    if (index !== -1) {
      // Date already exists, remove it
      setUpcomingPTO((prev) => prev.filter((d) => d !== dateStr));
    } else {
      setUpcomingPTO((prev) => [...prev, dateStr]);
    }

    // Clear the selected date to allow reselection
    setSelectedDate(null);
  };

  const addTask = (
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((prev) => [...prev, { taskDescription: "", subtasks: [] }]);
  };

  const addTask1 = (
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setFunction((prev) => [...prev, ""]);
  };

  const removeTask = (
    index: number,
    setFunction: React.Dispatch<React.SetStateAction<TaskWithSubtasks[]>>
  ) => {
    setFunction((prev) => prev.filter((_, idx) => idx !== index));
  };

  const removeTask1 = (
    index: number,
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setFunction((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSubmit: WeeklyStatusData = {
      id: existingWeeklyStatus?.id || 0,
      weekStartDate: startDate,
      doneThisWeek: doneThisWeek.map((task) => ({
        taskDescription: task.taskDescription,
        subtasks: task.subtasks
          .filter((subtask) => subtask.subtaskDescription.trim() !== "")
          .map((subtask) => ({
            subtaskDescription: subtask.subtaskDescription,
          })),
      })),
      planForNextWeek,
      upcomingPTO,
      blockers,
      memberId,
    };

    console.log(dataToSubmit);

    try {
      const endpoint = existingWeeklyStatus
        ? "/WeeklyStatus/Edit"
        : "/WeeklyStatus/Add";
      const method = existingWeeklyStatus ? "PUT" : "POST";

      const response = await makeApiRequest<{ success: boolean }>(
        endpoint,
        method,
        dataToSubmit
      );
      displaySuccessMessage();
    } catch (err) {
      setSuccess(false);
      displayErrorMessage();
    }
  };

  const displaySuccessMessage = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const displayErrorMessage = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 8000);
  };

  const statusReporting = () => {
    navigate("/status-reporting");
  };

  const assignReporter = () => {
    navigate("/assign-reporter");
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Form onSubmit={handleSubmit} className="form__container">
        <h2>Team {teamName}</h2>
        <h3>Welcome {memberName}!</h3>
        <h3>
          Weekly Status: {moment(startDate).format("MMM DD")} -{" "}
          {moment(endDate).format("MMM DD")}
        </h3>
        {success && (
          <Alert variant="success" className="mt-3">
            Your weekly status has been saved!
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        {/* What was done this week: */}
        <Form.Group controlId="doneThisWeek" className="form__group">
          <Form.Label className="form__label">
            What was done this week:
          </Form.Label>
          {doneThisWeek.map((taskWithSubtasks, taskIndex) => (
            <div key={taskIndex} className="mb-2">
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={`Task ${taskIndex + 1}`}
                    value={taskWithSubtasks.taskDescription}
                    onChange={(e) =>
                      handleTaskChange(
                        taskIndex,
                        e.target.value,
                        setDoneThisWeek
                      )
                    }
                  />
                  {taskWithSubtasks.subtasks.map((subtask, subtaskIndex) => (
                    <div className="form__group__subtask" key={subtaskIndex}>
                      <Form.Control
                        key={subtaskIndex}
                        type="text"
                        placeholder={`Subtask ${subtaskIndex + 1}`}
                        value={subtask.subtaskDescription}
                        onChange={(e) =>
                          handleSubtaskChange(
                            taskIndex,
                            subtaskIndex,
                            e.target.value,
                            setDoneThisWeek
                          )
                        }
                      />
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={() => addSubtask(taskIndex, setDoneThisWeek)}
                  >
                    Add Subtask
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="danger"
                    onClick={() => removeTask(taskIndex, setDoneThisWeek)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
          <Button variant="secondary" onClick={() => addTask(setDoneThisWeek)}>
            Add Task
          </Button>
        </Form.Group>

        {/* Plan for Next Week */}
        <Form.Group controlId="planForNextWeek" className="form__group">
          <Form.Label className="form__label">Plan for Next Week</Form.Label>
          {planForNextWeek.map((plan, index) => (
            <div key={index} className="mb-2">
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={`Plan ${index + 1}`}
                    value={plan}
                    onChange={(e) => handlePlanChange(index, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="danger"
                    onClick={() => removeTask1(index, setPlanForNextWeek)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
          <Button
            variant="secondary"
            onClick={() => addTask1(setPlanForNextWeek)}
          >
            Add Plan
          </Button>
        </Form.Group>

        {/* Upcoming PTO */}
        <Form.Group controlId="upcomingPTO" className="form__group">
          <Form.Label className="form__label">Upcoming PTO</Form.Label>
          <Form.Control
            type="date"
            value={selectedDate || ""}
            min={nextWeekStart.format("YYYY-MM-DD")}
            max={inTwoMonths.format("YYYY-MM-DD")}
            onChange={handleDateChange}
          />
        </Form.Group>

        <div className="mt-2">
          <span className="form__label">Selected dates: </span>
          {upcomingPTO
            .map((dateStr) => moment(dateStr).format("MMM DD"))
            .join(", ")}
        </div>

        {/* Blockers */}
        <Form.Group controlId="blockers" className="form__group">
          <Form.Label className="form__label">Blockers</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="buttons" className="form__btngroup">
          <Button variant="primary" type="submit" className="form__btn">
            Save Weekly Status
          </Button>

          {role === "CurrentWeekReporter" && (
            <Button
              variant="primary"
              onClick={statusReporting}
              className="form__btn"
            >
              Report
            </Button>
          )}

          {role === "TeamLead" && (
            <Button variant="primary" onClick={assignReporter}>
              Assign Reporter
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};

export default WeeklyStatus;
