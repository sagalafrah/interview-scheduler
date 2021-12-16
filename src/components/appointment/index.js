import React from 'react'
import Header from "./header";
import Show from "./show";
import Empty from "./empty";


import "./styles.scss";


const EMPTY = "EMPTY";
const SHOW = "SHOW";



export default function Appointment(props) {
    return (
      <article className="appointment">
        <Header time={props.time} />
        {
        props.interview ?
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        /> :
        <Empty/>
        }
      </article>
    )
}