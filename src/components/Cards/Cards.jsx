import React from 'react'
import styled from 'styled-components'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Countup from 'react-countup'

const Container = styled.div`margin: 50px 0;`

const useStyles = makeStyles({
  card: {
    margin: '0 2% !important',
  },
  infected: {
    borderBottom: '10px solid rgba(0,0,255,0.5)',
  },
  recovered: {
    borderBottom: '10px solid rgba(0,255,0,0.5)',
  },
  deaths: {
    borderBottom: '10px solid rgba(255,0,0,0.5)',
  },
})

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles()

  if (!confirmed) {
    return 'Loading...'
  }

  return (
    <Container>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={`${classes.card} ${classes.infected}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography vairant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={`${classes.card} ${classes.recovered}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography vairant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={`${classes.card} ${classes.deaths}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography vairant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of death cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cards
