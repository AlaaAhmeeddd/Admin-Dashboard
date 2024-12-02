import { Box } from "@mui/material"
import LineChart from "../../components/LineChart"
import Container from "../../components/Container"
import Header from "../../components/Header"

function index() {
  return (
    <Container>
      <Box className="overflow-x-hidden">
        <Header title="Line Chart" subTitle="Simple Line Chart" />
        <Box className="overflow-x-auto">
          <Box className="min-w-[500px]" height="75vh" >
            <LineChart />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default index