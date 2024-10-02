import { Box, Icon, Text } from '@chakra-ui/react'
import { PiClockCounterClockwiseBold } from 'react-icons/pi'
import { GiHunterEyes } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { BsGithub, BsTwitter } from 'react-icons/bs'

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
        _hover={{ color: 'accent.600' }}
        cursor="pointer"
        as={PiClockCounterClockwiseBold}
        className="nodrag"
        marginLeft={24}
      />
      <Icon
        cursor="pointer"
        onClick={() => nav('/hunts')}
        _hover={{ color: 'accent.600' }}
        className="nodrag"
        color="accent.main"
        as={GiHunterEyes}
        marginLeft={4}
      />
      <Text marginLeft={4} color="accent.main">
        {'|'}
      </Text>
      <Icon
        as={BsGithub}
        marginLeft={4}
        color="accent.main"
        _hover={{ color: 'accent.600' }}
        cursor="pointer"
        className="nodrag"
        //@ts-expect-error electronAPI has trouble being found
        onClick={() => window.electronAPI.github()}
      />
      <Icon
        as={BsTwitter}
        marginLeft={4}
        color="accent.main"
        _hover={{ color: 'accent.600' }}
        cursor="pointer"
        className="nodrag"
        //@ts-expect-error electronAPI not found
        onClick={() => window.electronAPI.twitter()}
      />
    </Box>
  )
}

export default Titlebar
