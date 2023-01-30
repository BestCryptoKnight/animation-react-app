import React,{useState,useEffect} from 'react'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import SolutionDetailContainer from '../solutionDetailContainer/SolutionDetailContainer'
import './social.css'
export const SocialContent = ({animated,contents}) => {

  return (
    <SolutionDetailContainer animated={animated}>
      <div className="option socialOption1   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon5.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Google Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption2   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon4.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Facebook Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption3   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon13.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Pinterest Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption4   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon10.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Tik-Tok Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption5   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon9.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Instagram Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption6   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon7.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Youtube Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption7   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon15.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Native Ads
          </h2>
          <p className="text-white uppercase text-xs w-80 ml-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam obcaecati error officiis, laboriosam hic possimus,
            debitis pariatur adipisci
          </p>
        </div>
      </div>
      <div className="option socialOption8   flex ">
        <div className="solutionIconContainer flex items-center justify-center">
          <img
            src="/icons/icon14.svg"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-pr cursor-pointer text-xl font-bold mt-6 ml-6">
            Snapchat Ads
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

export default SocialContent