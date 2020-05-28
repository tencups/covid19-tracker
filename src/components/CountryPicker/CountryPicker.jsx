import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../../api'
import { NativeSelect, FormControl, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  formControl: {
    width: '30%',
    marginBottom: '30px !important',
  },
})

const CountryPicker = ({ handleCountryChange }) => {
  const classes = useStyles()
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(
    () => {
      const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries())
      }
      fetchAPI()
    },
    [setFetchedCountries]
  )

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value)
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
