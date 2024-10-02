import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Counter from '@renderer/components/counter'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import data from '../../assets/data.json'
import { FaPlay, FaPause, FaCheck } from 'react-icons/fa'
import { useStopwatch } from 'react-timer-hook'

export default function CounterPage(): JSX.Element {
  const [counter, setCounter] = useState<Counter | null>(null)
  const [encounters, setEncounters] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isRunning, setIsRunning] = useState(false)

  const { seconds, minutes, hours, reset, start, pause } = useStopwatch()

  const selref = useRef() as MutableRefObject<HTMLSelectElement>

  useEffect(() => {
    const lsCounter = localStorage.getItem('counter')
    if (lsCounter != undefined) {
      const parsed: { time: number[]; pokemon: string; encounters: number } = JSON.parse(lsCounter)
      const _counter = new Counter(parsed.time, parsed.pokemon, parsed.encounters)
      setCounter(_counter)
      setEncounters(_counter.encounters)
      const offset = new Date()
      offset.setSeconds(offset.getSeconds() + _counter.time[2])
      offset.setMinutes(offset.getMinutes() + _counter.time[1])
      offset.setHours(offset.getHours() + _counter.time[0])
      reset(offset, false)
    }

    if (localStorage.getItem('hunts') == undefined) {
      localStorage.setItem('hunts', JSON.stringify([]))
    }
  }, [])

  function timeString(hrs: number, mns: number, sec: number): string {
    let secString: string
    let minString: string
    let hrsString: string

    if (sec < 10) {
      secString = `0${sec}`
    } else {
      secString = `${sec}`
    }

    if (mns < 10) {
      minString = `0${mns}`
    } else {
      minString = `${mns}`
    }

    if (hrs < 10) {
      hrsString = `0${hrs}`
    } else {
      hrsString = `${hrs}`
    }

    return `${hrsString}:${minString}:${secString}`
  }

  function handleSetCounter(): void {
    const val = selref.current.value
    const _counter = new Counter([0, 0, 0], val, 0)
    setCounter(_counter)

    // Store counter in local storage
    const json = JSON.stringify(_counter.getJson())
    localStorage.setItem('counter', json)
  }

  return (
    <Box
      padding={4}
      display="flex"
      flexDir="column"
      alignItems={'center'}
      justifyContent="center"
      h="80vh"
    >
      {counter ? (
        <Box textAlign="center">
          <Text>{timeString(hours, minutes, seconds)}</Text>
          <Image src={`../../assets/pokemon/${counter.pokemon.toLowerCase()}.png`} />
          <Heading
            userSelect={'none'}
            cursor="pointer"
            onClick={() => {
              // Increment encounters
              setEncounters((prev) => prev + 1)

              // Store into counter
              counter.encounters = encounters + 1
              counter.time[0] = hours
              counter.time[1] = minutes
              counter.time[2] = seconds

              console.log(counter)

              // Store into localstorage
              const json = JSON.stringify(counter.getJson())
              localStorage.setItem('counter', json)
            }}
          >
            {encounters}
          </Heading>
          <Button
            marginTop={8}
            bgColor="accent.main"
            _hover={{ bgColor: 'accent.400' }}
            onClick={() => {
              if (!isRunning) {
                start()
              } else {
                pause()
              }
              setIsRunning((prev) => !prev)
            }}
          >
            <Icon as={isRunning ? FaPause : FaPlay} />
          </Button>
          <Button
            marginTop={8}
            marginLeft={4}
            bgColor="accent.main"
            _hover={{ bgColor: 'accent.400' }}
            onClick={() => {
              // Save hunt into local storage
              const lsHunts = localStorage.getItem('hunts')
              if (lsHunts) {
                const parsed: [{ time: number[]; pokemon: string; encounters: number }] =
                  JSON.parse(lsHunts)

                const json = counter.getJson()
                parsed.push(json)

                localStorage.setItem('hunts', JSON.stringify(parsed))
              }

              reset()
              setEncounters(0)

              // Clear local storage
              localStorage.removeItem('counter')
              setCounter(null)
            }}
          >
            <Icon as={FaCheck} />
          </Button>
        </Box>
      ) : (
        <Box>
          <Heading>No current hunt</Heading>
          <Box textAlign={'center'} marginTop={4}>
            <Button onClick={onOpen}>New Hunt</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Hunt</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Select ref={selref}>
                    {data.names.map((name, index) => {
                      return (
                        <option key={index} value={name}>
                          {name}
                        </option>
                      )
                    })}
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="red" marginRight={4} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button onClick={handleSetCounter}>Start hunt</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      )}
    </Box>
  )
}
