import { Box } from "@mui/material"
import GeographyChart from "../../components/GeographyChart"
import Container from "../../components/Container"
import Header from "../../components/Header"

function index() {
  return (
    <Container>
      <Box className="overflow-x-hidden">
        <Header title="Geography Chart" subTitle="Simple Geography Chart" />
        <Box className="overflow-x-auto">
          <Box className="border rounded-[4px] mt-8" height="75vh">
            <GeographyChart />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default index