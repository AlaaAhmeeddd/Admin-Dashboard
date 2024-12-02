import { Box } from "@mui/material"
import PieChart from "../../components/PieChart"
import Container from "../../components/Container"
import Header from "../../components/Header"

function index() {
  return (
    <Container>
      <Box className="overflow-x-hidden">
        <Header title="Pie Chart" subTitle="Simple Pie Chart" />
        <Box className="overflow-x-auto">
          <Box className="min-w-[500px]" height="75vh" >
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default index