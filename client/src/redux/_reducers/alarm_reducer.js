import { ALARM_TRUE, ALARM_FALSE } from "../_actions/types.js";

const initialAlarm = {
    AlarmCheckFin: false,
};

export default function (state = initialAlarm, action) {
  switch (action.type) {
    case ALARM_TRUE:
      return {
        ...state,
        AlarmCheckFin: true,
      };

    case ALARM_FALSE:
      return {
        ...state,
        AlarmCheckFin: false,
      };

    default:
      return state;
  }
}
