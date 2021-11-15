import React from "react";
import { useRecoilState } from 'recoil';
import { userState } from "../atoms";
import Avatar from 'react-avatar';

function AvatarUser() {
  const [user] = useRecoilState(userState);
  const {googleId} = user;

  return (
    <React.Fragment>
      <Avatar googleId={googleId} size="50" round={true} />
    </React.Fragment>
  );
}

export { AvatarUser };