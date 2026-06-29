import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Sunny from '../assets/sunny.svg'
import MostlyClear from '../assets/mostly-clear-day.svg'
import PartlyCloudy from '../assets/partly-cloudy-day.svg'
import Cloudy from '../assets/cloudy.svg'
import Foggy from '../assets/foggy.svg'
import Drizzle from '../assets/drizzle.svg'
import Rainy from '../assets/rain.svg'
import Snowy from '../assets/snowy.svg'
import Thunderstorm from '../assets/thunderstorm.svg'

const getCondition = (weatherCode) => {
  const conditions = {
    0: {
      label: "Sunny",
      icon: Sunny
    },
    1: {
      label: "Mostly clear",
      icon: MostlyClear
    },
    2: {
      label: "Partly cloudy",
      icon: PartlyCloudy
    },
    3: {
      label: "Cloudy",
      icon: Cloudy
    },
    45: {
      label: "Foggy",
      icon: Foggy
    },
    48: {
      label: "Foggy",
      icon: Foggy
    },
    51: {
      label: "Light drizzle",
      icon: Drizzle
    },
    61: {
      label: "Rainy",
      icon: Rainy
    },
    71: {
      label: "Snowy",
      icon: Snowy
    },
    95: {
      label: "Thunderstorm",
      icon: Thunderstorm
    },
  }

  return conditions[weatherCode]
}

const getWindLabel = (windSpeed) => {
  if (windSpeed < 4) return "Calm"
  if (windSpeed < 8) return "Light breeze"
  if (windSpeed < 13) return "Breezy"
  if (windSpeed < 25) return "Windy"
  return "Very windy"
}

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=43.2157&longitude=5.5385&current=temperature_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
        )
        setCurrentWeather(response.data.current)
      } catch (err) {
        console.log(err)
        setError('Something went wrong. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }

    fetchTemp()
  }, [])

  if (loading) return <Loading height={150} />
  if (error) return <div className='bg-sun-200 rounded-4xl p-6 flex flex-col gap-2 items-center justify-center h-36'>
    <ExclamationTriangleIcon height={30} />
    {error}
    </div>

  const temp = Math.round(currentWeather.temperature_2m)
  const condition = getCondition(currentWeather.weather_code).label || "Unknown"
  const conditionIcon = getCondition(currentWeather.weather_code).icon
  const windLabel = getWindLabel(currentWeather.wind_speed_10m)

  return (
    <div className='relative bg-sun-200 rounded-4xl p-8 flex gap-4 items-center'>
      <div className='absolute top-0 right-0'>
        <img src={conditionIcon} alt={condition} className='w-30 h-30' />
      </div>
      <div className='flex flex-col gap-4'>
        <span className='font-mono font-medium uppercase'>Today in Cassis</span>

        <span className='font-serif text-5xl font-medium'>
          {temp}°F
        </span>

        <span>
          {condition} • {windLabel}
        </span>
      </div>
    </div>
  )
}

export default Weather