import React from 'react'
import Meals from '../../components/meals/Meals'
import SectionHeading from '../../components/ui/SectionHeading'
import Constructor from '../../components/constructor/Constructor'
import './style.scss'

const Pizza = () => {
  return (
    <section>
      <Meals meal='pizza' /> <br />
      <SectionHeading
        title='Build your own pizza'
        subtitle='Pizza constructor'
      />
      <Constructor />
    </section>
  )
}

export default Pizza
