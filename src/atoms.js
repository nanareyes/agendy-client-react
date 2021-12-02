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

const scheduleState = atom({
  key: 'scheduleState',
  default: {},
})

export {userState, fileState, loadingState, scheduleState}
