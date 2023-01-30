import React, { Children, useEffect, useState } from 'react'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import './solutionDetail.css'
const SolutionDetailContainer = ({children,animated}) => {
    const [contentVisible, setContentVisible] = useState(animated)
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    }
    const [containerRef, isVisible] = useElementOnScreen(options)

    useEffect(() => {
        if (isVisible) {
            setContentVisible(true)
        } else {
            setContentVisible(false)
        }
    }, [isVisible])
  return (
      <div ref={containerRef} className="w-full flex absolute z-20 items-start justify-between optionsContainer">
          <div className={(contentVisible ? 'contentStyleAnimated ' : 'contentStyle') + " relative"}>
              <div className={(contentVisible ? "step1  opacity-100" : "opacity-0 ") + " absolute  z-30  w-full solutions-options-container"} >
                {children}
              </div>
          </div>
      </div>
  )
}

export default SolutionDetailContainer