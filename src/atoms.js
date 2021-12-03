import {atom} from 'recoil'

const userState = atom({
  key: 'userState',
  default: {
    isAuthenticaded: false,
  },
})

const fileState = atom({
  key: 'fileState',
  default: undefined,
})

const loadingState = atom({
  key: 'loadingState',
  default: false,
})

export const getDefaultScheduleState = () => {
  const defaultSchedule = {}
  const hours = []
  for (let hour=0; hour<=23; hour++) {
    hours.push({ hour, selected: false });
  }
  for (let day=1; day<=7; day++) {
    defaultSchedule[day] = [...hours];
  }
  return defaultSchedule;
};

const scheduleState = atom({
  key: 'scheduleState',
  default: getDefaultScheduleState(),
})

export {userState, fileState, loadingState, scheduleState}
