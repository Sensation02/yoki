import React from 'react'
import titleDecor from '../../assets/title_decor_white.svg'

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className='meals-container__title-block'>
      <div className='meals-container__title-block__inner'>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <img src={titleDecor} alt='' width={30} height={30} />
          <h2 className='meals-container__title-text'>{title}</h2>
        </div>
        <div className='meals-container__title-signs'>{subtitle}</div>
      </div>
    </div>
  )
}

export default SectionHeading