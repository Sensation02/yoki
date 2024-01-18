import Meals from '../../components/meals/Meals'
import SectionHeading from '../../components/ui/SectionHeading'
import Constructor from '../../components/constructor/Constructor'
import './style.scss'

const Sets = () => {
  return (
    <section>
      <Meals meal='sushi' />
      <br />
      <SectionHeading
        title='Build your sushi set'
        subtitle='Sushi constructor'
      />
      <Constructor type='sushi' />
    </section>
  )
}

export default Sets
