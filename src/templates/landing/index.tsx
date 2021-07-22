import React from 'react'
import ScrollProvider from 'providers/scrollProvider'
import Section0 from './section/0'
import Section1 from './section/1'
import Section2 from './section/2'
import Section3 from './section/3'
import Section4 from './section/4'
import Section5 from './section/5'

export default function Landing() {
  return (
    <ScrollProvider>
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </ScrollProvider>
  )
}
