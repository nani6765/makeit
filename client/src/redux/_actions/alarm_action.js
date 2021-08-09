import { ALARM_TRUE, ALARM_FALSE } from "./types";

export function setAlarmTrue() {
  return {
    type: ALARM_TRUE,
  };
}

export function setAlarmFalse() {
  return {
    type: ALARM_FALSE,
  };
}
