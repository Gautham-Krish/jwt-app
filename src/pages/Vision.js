import React,{useState} from 'react'
 

const Vision = () => {
    const imgUrl1 = "https://i.pinimg.com/550x/05/88/d7/0588d7634ec5e97bcda4c1dc2899fed9.jpg";
    const imgUrl2 = "https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg";
  
    const [currentImgUrl, setCurrentImgUrl] = useState(imgUrl1);
  
    const updateImage = () => {
      if (currentImgUrl === imgUrl1) {
        setCurrentImgUrl(imgUrl2);
      } else {
        setCurrentImgUrl(imgUrl1);
      }
    };
    return (
      <div className='container'>
        
        <img className="arrange" src={currentImgUrl} />
        <button className="submit" onClick={updateImage}>Change Image</button>
      </div>
    );
  };

export default Vision
