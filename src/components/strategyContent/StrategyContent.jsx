import React,{useEffect,useState} from 'react'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import SolutionDetailContainer from '../solutionDetailContainer/SolutionDetailContainer'
import './strategy.css'

export const StrategyContent = ({animated}) => {
  
  return (
    <SolutionDetailContainer animated={animated}>
          <div className="option strategyOption1   flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
                src="/icons/Vector 68.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Marketing Research
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
            <div className="option strategyOption2  flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
                src="/icons/Union.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Marketing Consultation
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
            <div className="option strategyOption3   flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
              src="/icons/Union.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Creative strategy
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
            <div className="option strategyOption4   flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
                src="/icons/Group 21.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Omni-Channel Marketing Strategy
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
            <div className="option strategyOption5   flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
            src="/icons/Union.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Budget Planing
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
          <div className="option strategyOption6   flex ">
            <div className="solutionIconContainer flex items-center justify-center">
              <img
                src="/icons/Frame.svg"
                className="w-4 h-4 object-contain"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
                Automation Implmentation
              </h2>
              <p className="text-white uppercase text-xs w-80 ml-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ullam obcaecati error officiis, laboriosam hic possimus,
                debitis pariatur adipisci
              </p>
            </div>
          </div>
    </SolutionDetailContainer>

  )
}

export default StrategyContent