import React from 'react'
import {useRecoilState} from 'recoil'
import {FormGroup, Input, Col, FormText} from 'reactstrap'
import {userState} from '../atoms'
import {Avatar} from '../StyledComponents/Avatar'
import {useProfile} from './controller'

function PhotoProfile() {
  const [user, setUser] = useRecoilState(userState)
  // console.log(user)
  console.log(setUser)
  const {onChangeFile, inputFile} = useProfile()
  console.log('inputFile en PhotoProfile', inputFile)

  return (
    <React.Fragment>
      <Avatar src={user?.imageUrl} />

      <FormGroup>
        <Col sm={10}>
          <Input
            id="profilePhoto"
            name="file"
            type="file"
            onChange={onChangeFile}
          />
          <FormText>Seleccione imagen de perfil</FormText>
        </Col>
      </FormGroup>
    </React.Fragment>
  )
}

export {PhotoProfile}
