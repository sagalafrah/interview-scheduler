import React, { useState, useEffect} from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/appointment"
import "components/Application.scss";
import "components/DayList";




export default function Application(props) {
  const [days, setDays] = useState([]);
  const [day, setDay] = useState("Monday"); 
  useEffect(() => {
    axios.get("/api/days")
      .then(response => setDays(response.data));
  }, [])
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
  days={days}
  day={day}
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
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
