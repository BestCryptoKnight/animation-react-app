import React from 'react'

const GreenLinesComponent = ({animated}) => {
  return (
      <div className={animated ? "frameAnimated" : "frame"}>
          <img
              src="/green/Vector.svg"
              className={animated ? "v_animated" : "v"}
              alt=""
          />
          <img
              src="/green/Vector-1.svg"
              className={animated ? "v1_animated" : "v1"}
              alt=""
          />
          <img
              src="/green/Vector-2.svg"
              className={animated ? "v2_animated" : "v2"}
              alt=""
          />
          <img
              src="/green/Vector-3.svg"
              className={animated ? "v3_animated" : "v3"}
              alt=""
          />
          <img
              src="/green/Vector-4.svg"
              className={animated ? "v4_animated" : "v4"}
              alt=""
          />
          <img
              src="/green/Vector-5.svg"
              className={animated ? "v5_animated" : "v5"}
              alt=""
          />
          <img
              src="/green/Vector-6.svg"
              className={animated ? "animated_v6" : "v6"}
              alt=""
          />
          <img
              src="/green/Vector-7.svg"
              className={animated ? "v7_animated" : "v7"}
              alt=""
          />
          <img
              src="/green/Vector-8.svg"
              className={animated ? "v8_animated" : "v8"}
              alt=""
          />
          <img
              src="/green/Vector-9.svg"
              className={animated ? "v9_animated" : "v9"}
              alt=""
          />
      </div>
  )
}

export default GreenLinesComponent