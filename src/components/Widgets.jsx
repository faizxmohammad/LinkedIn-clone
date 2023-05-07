import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
const newsArticle = (heading , subtitle) =>(
  <div className="widgets__article">

    <div className="widgets__articleLeft">
      <FiberManualRecordIcon/>

    </div>

    <div className="widgets__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>

    </div>

  </div>
)

  return (
    <div className='widgets'>
        <div className="widgets__header">
          <h2>Linkedin news</h2>
          <InfoIcon/>
        </div>
        {newsArticle("Hello my leaders" , "x prime minister said this!!")}
        {newsArticle("Hello my leaders" , "x prime minister said this!!")}
        {newsArticle("Hello my leaders" , "x prime minister said this!!")}
        {newsArticle("Hello my leaders" , "x prime minister said this!!")}
    </div>
  )
}

export default Widgets