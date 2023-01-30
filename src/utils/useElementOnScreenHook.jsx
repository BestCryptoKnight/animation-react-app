import React, {useRef,useState,useMemo,useEffect} from "react"
export const useElementOnScreen = (options) =>{
    const containerRef = useRef(null)
    const [isVisible,setIsVisible] = useState(false)

    const callbackFunction = (entries) =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }
    const observer = useMemo(
        () =>
            new IntersectionObserver(callbackFunction, options),
        [],
    );
    useEffect(() => {
      if(containerRef.current) observer.observe(containerRef.current)
    
      return () => {
          if (containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef,isVisible])
    
    return [containerRef, isVisible]
}