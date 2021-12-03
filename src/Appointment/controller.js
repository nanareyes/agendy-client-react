import {useEffect} from 'react'
import axios from 'axios'
import {useRecoilState} from 'recoil'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import {
  appointmentState,
  getDefaultAppointmentState,
  loadingState,
  userState,
} from '../atoms'

const useAppointment = () => {
  const [appointment, setAppointment] = useRecoilState(appointmentState)
  const [user] = useRecoilState(userState)
  const [isLoading, setIsLoading] = useRecoilState(loadingState)
  const navigate = useNavigate()

  useEffect(() => {
    getStylists()
  }, [])

  useEffect(() => {
    getAvailability()
  }, [appointment?.date, appointment?.stylist?._id])

  useEffect(() => {
    getAvailabilityForMonth()
  }, [appointment?.stylist?._id])

  const getStylists = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users?userType=Estilista`
      )
      setAppointment((currentAppointment) => ({
        ...currentAppointment,
        stylists: response.data,
      }))
    } catch (err) {
      // Handle Error Here
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const getAvailability = async () => {
    const {
      stylist,
      date: {year, month, day},
    } = appointment

    if (stylist?._id && year && month && day) {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/availability/${stylist._id}?year=${year}&month=${month}&day=${day}`
        )
        setAppointment((currentAppointment) => ({
          ...currentAppointment,
          availability: response.data,
        }))
      } catch (err) {
        // Handle Error Here
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const getAvailabilityForMonth = async () => {
    const {
      stylist,
      date: {year, month},
    } = appointment

    if (stylist?._id) {
      const mDate = moment()
      const currentYear = mDate.year()
      const currentMonth = mDate.month() + 1
      setAppointment((currentAppointment) => ({
        ...currentAppointment,
        availabilityForMonth: [],
      }))
      setIsLoading(true)
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/availability/${
            stylist._id
          }?year=${year || currentYear}&month=${month || currentMonth}`
        )
        setAppointment((currentAppointment) => ({
          ...currentAppointment,
          availabilityForMonth: response.data.availability,
        }))
      } catch (err) {
        // Handle Error Here
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const saveAppointment = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/appointment`,
        getAppointmentData()
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const getAppointmentData = () => {
    const {
      date: {year, month, day, iso},
      selectedHour,
      serviceName,
      servicePrice,
    } = appointment

    const appointmentData = {
      clientId: user?._id,
      clientName: user?.name,
      clientEmail: user?.email,
      clientPhone: user?.phone,
      stylistId: appointment?.stylist._id,
      stylistName: appointment?.stylist.name,
      stylistEmail: appointment?.stylist.email,
      stylistPhone: appointment?.stylist.phone,
      date:
        iso && selectedHour
          ? moment({
              year,
              month: month - 1,
              day,

              minutes: 0,
              seconds: 0,
            })
              .utc()
              .set({hour: selectedHour})
              .toDate()
          : null,
      serviceName,
      servicePrice,
    }

    return appointmentData
  }

  const clearAppointment = () => {
    setAppointment(getDefaultAppointmentState())
  }

  const cancelAppointment = () => {
    clearAppointment()
    navigate(-1)
  }

  return {
    appointment,
    setAppointment,
    getAvailability,
    saveAppointment,
    isLoading,
    setIsLoading,
    getAppointmentData,
    clearAppointment,
    cancelAppointment,
  }
}

export {useAppointment}
