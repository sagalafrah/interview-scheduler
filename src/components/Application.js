import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/appointment";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: [] 

  })
  
  const setDay = day => setState(state => ({...state, day}));
  useEffect(() => {
    console.log('useEffect')
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then(all => {
      console.log('Request was successful')
      setState(state => ({...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
    .catch((error)=>{console.log('Error', error)});
  }, []);

  const appointmentsForEachDay = getAppointmentsForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appointmentsForEachDay.map(appointment => (
          <Appointment
            key={appointment.id}
            {...appointment}
          />
        ))}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}