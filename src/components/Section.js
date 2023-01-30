import React from "react"
import { ButtonGroup, DownArrow, ItemText, Wrap } from "../styles/SectionStyles"
import Fade from "react-reveal/Fade"

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <div>
        <Fade>
          <ButtonGroup>
            <div className="left-button">{leftBtnText}</div>
            {rightBtnText && <div className="right-button">{rightBtnText}</div>}
          </ButtonGroup>
          <DownArrow src="/assets/down-arrow.svg" />
        </Fade>
      </div>
    </Wrap>
  )
}

export default Section
