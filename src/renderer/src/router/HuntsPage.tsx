import { Box, Card, CardBody, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Counter from '@renderer/components/counter'
import { useEffect, useState } from 'react'

export default function HuntsPage(): JSX.Element {
  const [hunts, setHunts] = useState<Counter[]>([])

  useEffect(() => {
    // Get hunts from local storage
    const lsHunts = localStorage.getItem('hunts')
    if (lsHunts) {
      const _arr: Counter[] = []
      const jsonHunts: [{ time: number[]; pokemon: string; encounters: number }] =
        JSON.parse(lsHunts)

      jsonHunts.forEach((hunt) => {
        const _h = new Counter(hunt.time, hunt.pokemon, hunt.encounters)
        _arr.push(_h)
      })

      setHunts(_arr)
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

  return (
    <Wrap margin={4}>
      {hunts.map((hunt, index) => {
        return (
          <WrapItem key={hunt.pokemon + '' + index}>
            <Card>
              <CardBody textAlign={'center'}>
                <Text>{timeString(hunt.time[0], hunt.time[1], hunt.time[2])}</Text>
                <Image src={`../../assets/pokemon/${hunt.pokemon}.png`} />
                <Heading size="md">{hunt.encounters}</Heading>
              </CardBody>
            </Card>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
