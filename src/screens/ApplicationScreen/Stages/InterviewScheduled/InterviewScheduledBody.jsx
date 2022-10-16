import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import LandingBodyMessage from "../LandingBodyMessage";
import classes from "./InterviewScheduledBody.module.css";

const InterviewScheduledBody = ({ meeting }) => {
  const startDate = moment(meeting.startDate);
  const endDate = moment(meeting.startDate).add(1, "hour");

  return (
    <div className={classes.scheduledContainer}>
      <LandingBodyMessage width={800}>
        Hack4Impact has confirmed the meeting time with you! We are looking
        forward to meeting with you and learning more about your organization.
        We hope to discuss how we can best help you to build the product and
        bring more impact to the community! If you have any further questions,
        please feel free to contact us at
        <a href="mailto:hello@hack4impact.org"> hello@hack4impact.org </a>
        at your convenience.
      </LandingBodyMessage>
      <div className={classes.interviewScheduled}>
        <div className={classes.generalText}>
          <h3>Appointment Scheduled</h3>
          <p>Meeting with Hack4Impact</p>
        </div>
        <div className={classes.meetingSection}>
          <div className={classes.nameColumn}>
            <p>When</p>
          </div>
          <div className={classes.infoColumn}>
            <p>{`${startDate.format("h a")} - ${endDate.format("h a")}`}</p>
            <p>{startDate.format("dddd, MMM D, Y")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

InterviewScheduledBody.propTypes = {
  meeting: PropTypes.shape({
    _id: PropTypes.string,
    isBooked: PropTypes.bool,
    team: PropTypes.string,
    startDate: PropTypes.string,
  }).isRequired,
};

export default InterviewScheduledBody;
