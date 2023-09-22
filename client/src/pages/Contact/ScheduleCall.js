import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './ScheduleCall.css';

const time = ['08:00', '09:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (
    <div className="times">
      {time.map((times) => {
        return (
          <div key={times}>
            <button className="custom-button" onClick={(e) => displayInfo(e)}>
              {times}
            </button>
          </div>
        );
      })}
      <div>{info ? `Your meeting is set to ${event} ${props.date.toDateString()}` : null}</div>
    </div>
  );
}

function ScheduleCall() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);

  return (
    <div className="schedule-call-container">
      <div className="calendar-card">
        <div className="calendar">
          <h3 className="header">Booking Calendar</h3>
          <div className="calendar-container">
            <Calendar
            
              onChange={(date) => setDate(date)}
              value={date}
              onClickDay={() => setShowTime(true)}
              maxDate={maxDate}
            />
          </div>
          {date && (
            <p>
              <span>Selected Date:</span>
              {date.toDateString()}
            </p>
          )}
        </div>
      </div>
      <div className="times-card">
        <Times showTime={showTime} date={date} />
        <Link to="/schedule">
          <button className="custom-button2">
            Schedule
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ScheduleCall;
