import {useState, useEffect} from 'react'
import axios from 'axios'

const useAppointment = () => {
  const [stylists, setStylists] = useState([])
  const [availability, setAvailability] = useState({})

  useEffect(() => {
    getStylists()
  }, [])

  const getStylists = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users?userType=Estilista`)
      .then((response) => setStylists(response.data))
  }

  const getAvailability = (event, stylistId, year, month, day) => {
    event.stopPropagation()
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/availability/${stylistId}?year=${year}&month=${month}&day=${day}`
      )
      .then((response) => setAvailability(response.data.availability))
    return availability
  }

  return {stylists, availability, getAvailability}
}

export {useAppointment}
