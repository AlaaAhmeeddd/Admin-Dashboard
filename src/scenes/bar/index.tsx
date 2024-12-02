import { Box } from "@mui/material"
import BarChart from "../../components/BarChart"
import Container from "../../components/Container"
import Header from "../../components/Header"

function index() {
  return (
    <Container>
      <Box className="overflow-x-hidden">
        <Header title="Bar Chart" subTitle="Simple Bar Chart" />
        <Box className="overflow-x-auto">
          <Box className="min-w-[500px]" height="75vh" >
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default index