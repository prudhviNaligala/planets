import Slider from 'react-slick'

import './index.css'

const PlanetItem = props => {
  const {data} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planets-item-container">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings} className="sliders">
          {data.map(eachItem => (
            <div className="planets" key={eachItem.name}>
              <img
                className="planets-pic"
                src={eachItem.imageUrl}
                alt={`planet ${eachItem.name}`}
              />
              <h1 className="planets-name">{eachItem.name}</h1>
              <p className="about-planets">{eachItem.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetItem
