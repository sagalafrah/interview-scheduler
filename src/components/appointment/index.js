import React from 'react'
import useVisualMode from "hooks/useVisualMode";
import Header from "./header";
import Show from "./show";
import Empty from "./empty";



import "./styles.scss";


const EMPTY = "EMPTY";
const SHOW = "SHOW";



export default function Appointment(props) {
    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
      );
  
    return (
      <article className="appointment">
        <Header time={props.time} />
        {mode === EMPTY && <Empty/>}
        {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          /> 
      )}
      </article>
    )
}