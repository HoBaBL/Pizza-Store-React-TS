import React from "react"
import ContentLoader from "react-content-loader"
import style from './MenuPizza.module.css'

const Skeleton = (props:any) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={590}
    viewBox="0 0 280 590"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="135" r="135" /> 
    <rect x="0" y="286" rx="10" ry="10" width="280" height="22" /> 
    <rect x="120" y="376" rx="0" ry="0" width="8" height="1" /> 
    <rect x="0" y="331" rx="10" ry="10" width="280" height="82" /> 
    <rect x="0" y="426" rx="10" ry="10" width="61" height="26" /> 
    <rect x="-1" y="464" rx="10" ry="10" width="280" height="70" /> 
    <rect x="0" y="554" rx="10" ry="10" width="55" height="24" /> 
    <rect x="220" y="554" rx="10" ry="10" width="55" height="24" />
  </ContentLoader>
)

export default Skeleton