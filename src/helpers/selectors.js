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
  