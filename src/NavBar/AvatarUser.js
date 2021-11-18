import React from "react";
// import { useRecoilState } from 'recoil';
// import { userState } from "../atoms";
import Avatar from 'react-avatar';

function AvatarUser() {
  // const [user, setUser] = useRecoilState(userState);

  return (
    <React.Fragment>
      <Avatar src="" size="50" round={true} />
    </React.Fragment>
  );
}

export { AvatarUser };