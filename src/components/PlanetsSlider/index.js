import PlanetItem from '../PlanetItem/index'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-container">
      <div className="planet-item-container">
        <PlanetItem data={planetsList} />
      </div>
    </div>
  )
}

export default PlanetsSlider
