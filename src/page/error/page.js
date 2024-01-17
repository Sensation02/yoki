import React from 'react'
import SectionHeading from '../../components/ui/SectionHeading'
import './style.scss'

const Error = () => {
  return (
    <section style={{ marginTop: '2rem' }}>
      <SectionHeading
        title='Error, page not found'
        subtitle='currently under maintenance'
      />
    </section>
  )
}

export default Error
