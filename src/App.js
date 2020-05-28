import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styled, { createGlobalStyle } from 'styled-components'
import { fetchData } from './api'
import coronaImage from './images/corona.jpg'
const GlobalStyle = createGlobalStyle`
	body {
		background-color:rgb(250,250,250);
	}
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 770px) {
    margin: 0 10%;
  }
`
const Img = styled.img`
  width: 370px;
  margin-top: 50px;
  @media (max-width: 770px) {
    width: 100%;
  }
`

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Img src={coronaImage} />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </Container>
      </React.Fragment>
    )
  }
}

export default App
