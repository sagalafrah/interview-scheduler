export const getAppointmentsForDay = (state, day) => {
    const dayObj = state.days.find(elem => elem.name === day);
  
    if (!dayObj) {
      return [];
    }
    const appointmentID = dayObj.appointments;
    const appointmentsForEachDay = [];
  
    for (const id in state.appointments) {
      if (appointmentID.includes(Number(id))) {
        appointmentsForEachDay.push(state.appointments[id]);
      }
    }
    return appointmentsForEachDay;
  };


  export const getInterviewersForDay = (state, day) => {
    const dayObj = state.days.find(elem => elem.name === day);
  
    if (!dayObj) {
      return [];
    }
  
    const interviewerID = dayObj.interviewers;
  
    const interviewersForEachDay = [];
  
    for (const id in state.interviewers) {
      if (interviewerID.includes(Number(id))) {
        interviewersForEachDay.push(state.interviewers[id]);
      }
    }
  
    return interviewersForEachDay;
  };

  export const getInterview = (state, interview) => {
    if (!interview) {
      return null;
    }
  
    const interviewerID = interview.interviewer;
  
    for (const id in state.interviewers) {
      if (Number(id) === interviewerID) {
        return {
          student: interview.student,
          interviewer: state.interviewers[id]
        };
      }
    }
  };