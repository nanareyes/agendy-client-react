import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../atoms'
import Avatar from 'react-avatar'
// import { useProfile } from '.Profile/controller';

function AvatarUser() {
	const [
		user,
	] = useRecoilState(userState)
	const { googleId } = user
	//  const userPhoto = user.loginType === 'GOOGLE'? user.imageUrl : user.photo;

	return (
		<React.Fragment>
			<Avatar googleId={googleId} size='50' round={true} />
			{/* <Image src="holder.js/171x180" roundedCircle /> */}
		</React.Fragment>
	)
}

export { AvatarUser }
