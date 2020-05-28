import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
`

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchAPI()
  }, [])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            borderColor: 'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,0,0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null

  return <Container>{country ? barChart : lineChart}</Container>
}

export default Chart
