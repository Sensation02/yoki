import React from 'react'
import useScreenWidth from '../../utils/useScreenWidth'

const SectionHeading = ({ title, subtitle }) => {
  const windowWidth = useScreenWidth()

  return (
    <div className='meals-container__title-block'>
      <div className='meals-container__title-block__inner'>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          {windowWidth > 620 && (
            <img
              src='../../../assets/title_decor_white.svg'
              alt=''
              width={30}
              height={30}
            />
          )}
          <h2 className='meals-container__title-text'>{title}</h2>
        </div>
        <div className='meals-container__title-signs'>{subtitle}</div>
      </div>
    </div>
  )
}

export default SectionHeading
