import React,{useState,useEffect} from 'react'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import SolutionDetailContainer from '../solutionDetailContainer/SolutionDetailContainer'
import './ad.css'

export const AdsManagementContent = ({animated,contents}) => {

  return (
    <SolutionDetailContainer animated={animated}>
      <div className="option adOption1   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon17.svg"
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
      <div className="option adOption2   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/Vector 68.svg"
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
      <div className="option adOption3   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon11.svg"
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
      <div className="option adOption4   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon18.svg"
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
      <div className="option adOption5   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon12.svg"
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
      <div className="option adOption6   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon8.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Editorial Calendar
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option adOption7   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon3.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Influencers Management
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option adOption8   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon6.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Communications Planning
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option adOption9   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon15.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Advertising Management
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

export default AdsManagementContent