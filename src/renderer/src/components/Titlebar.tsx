import { Box, Button, Drawer, DrawerContent, Icon, useDisclosure } from '@chakra-ui/react'
import { MutableRefObject, useRef } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

function Titlebar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnref = useRef() as MutableRefObject<HTMLButtonElement>

  return (
    <Box
      w="100vw"
      h={10}
      bgColor="background.main"
      className="titlebar"
      display="flex"
      alignItems="center"
    >
      <Button colorScheme="" ref={btnref} onClick={onOpen}>
        <Icon as={HiMenuAlt2} color="white" className="nodrag" />
      </Button>

      <Drawer
        placement="left"
        finalFocusRef={btnref}
        isOpen={isOpen}
        onClose={onClose}
        isFullHeight={false}
      >
        <DrawerContent
          borderRadius="8px"
          bgColor="background.main"
          h={'80vh'}
          w={'10vw'}
          maxW={36}
          marginTop={20}
        ></DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Titlebar
