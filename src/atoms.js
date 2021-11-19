import {atom} from 'recoil';

const userState = atom({
  key: 'userState',
  default: {
    isAuthenticaded: false,
  }, 
});

const fileState = atom({
  key: 'fileState',
  default: undefined, 
});

const loadingState = atom({
  key: 'loadingState',
  default: false, 
});

export { userState, fileState, loadingState };