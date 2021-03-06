import React from "react"

import "./cv.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Cv = () => (
  <div className="cv">
    <a href="./vipul_dessai_cv_jan_2021.pdf" target="_blank" rel="noopener noreferrer">Download CV&nbsp;<FontAwesomeIcon icon={icon({ prefix: 'fa', iconName: 'file-download' })} /></a>
  </div>
)

export default Cv