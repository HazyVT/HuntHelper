import { Box, Icon } from '@chakra-ui/react'
import { PiClockCounterClockwiseBold } from 'react-icons/pi'
import { GiHunterEyes } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

function Titlebar(): JSX.Element {
  const nav = useNavigate()

  return (
    <Box
      w="100vw"
      h={10}
      bgColor="background.main"
      className="titlebar"
      display="flex"
      alignItems="center"
    >
      <Icon
        onClick={() => nav('/')}
        color="accent.main"
        cursor="pointer"
        as={PiClockCounterClockwiseBold}
        className="nodrag"
        marginLeft={24}
      />
      <Icon
        cursor="pointer"
        onClick={() => nav('/hunts')}
        className="nodrag"
        color="accent.main"
        as={GiHunterEyes}
        marginLeft={4}
      />
    </Box>
  )
}

export default Titlebar
