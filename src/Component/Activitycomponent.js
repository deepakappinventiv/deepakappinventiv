import React from 'react';
import '../assests/sass/custom.scss'
import activityBanner from '../assests/img/activitybanner.png';
import activityName from '../assests/img/activityname.png';

function Activitycomponent() {
  const activName = {
    position: "absolute",
    margin: "0px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
    left: "30px",
    fontSize: "28px"
  }
  const activimgBorder = {
    borderRadius: "10px",
    maxWidth: "100%",
    height: "210px",
    width: "100%",
    objectFit: "cover"
  }



  return (
    <>
      <section className=''>
        <div className='custom_container'>
          <div className='newactivity-banner'>
            <img src={activityBanner} alt='' className='newactiv-bnrimg' />
            <h5 className='new-activityName' style={activName}>Surfing</h5>
          </div>

          <div className='' style={{ display: "flex" }}>
            
            <div className='activListSlider'>
              <div className=''>
                <img src={activityName} alt='' style={activimgBorder} />
              </div>
              <div className='newactivity-content'>
                <h5>LESSON</h5>
                <p>Perfect for beginners or those wanting to brush up on your technique.</p>
              </div>
            </div>

            <div className='activListSlider'>
              <div className=''>
                <img src={activityName} alt='' style={activimgBorder} />
              </div>
              <div className='newactivity-content'>
                <h5>BOARDSHOP</h5>
                <p>Don’t have a board? Missing equipment? Get all your equipment here with rentals. </p>
              </div>
            </div>

            <div className='activListSlider'>
              <div className=''>
                <img src={activityName} alt='' style={activimgBorder} />
              </div>
              <div className='newactivity-content'>
                <h5>TOURS</h5>
                <p>Learning to surf with a group is a great way to share the experience of having fun in the ocean. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Activitycomponent;