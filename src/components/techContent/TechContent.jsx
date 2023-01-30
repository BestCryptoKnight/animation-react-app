import React,{useState,useEffect} from 'react'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import SolutionDetailContainer from '../solutionDetailContainer/SolutionDetailContainer'
import './tech.css'
export const TechContent = ({animated,contents}) => {

  return (
    <SolutionDetailContainer animated={animated}>
      <div className="option techOption1   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon3.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Social Media Strategy
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option techOption2   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/Group 21.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Social Media Management
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option techOption3   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon1.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Content Creators
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option techOption4   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon19.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Content Production
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option techOption5   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon2.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Community Growth & Management
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

export default TechContent