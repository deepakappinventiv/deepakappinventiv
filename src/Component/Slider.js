import React from 'react';

import sliderimg from '../assests/img/sliderimg.png'
import activitiesname from '../assests/img/activities-name.png'
import topdestinationimg from '../assests/img/top-destinationimg.png'
import starticon from '../assests/img/starticon.png'

export default function Slider() {
  return (
    <div>
      <section>
        <div className="custom_container">
          <div className="new-slider-wrapper">
            <div className="slidercard">
              <div className="starticon-box">
                <img src={starticon} className="staricon" alt="" />
                <span>4.5</span>
              </div>
              <img src={sliderimg} className="activimg" alt='' />
              <div className="slider-content">
                <h4 className="activname">Mountain Hiking Tour</h4>
                <p className="activcnty">Sydney, Australia</p>
                <div className='newpric-book'>
                  <p className='prcst'>$25</p>
                  <a href="https://www.airhireme.com/" className='bookbtn'>Book Now</a>
                </div>
              </div>
            </div>
            <div className="slidercard">
              <div className="starticon-box">
                <img src={starticon} className="staricon" alt="" />
                <span>4.5</span>
              </div>
              <img src={sliderimg} className="activimg" alt='' />
              <div className="slider-content">
                <h4 className="activname">Mountain Hiking Tour</h4>
                <p className="activcnty">Sydney, Australia</p>
                <div className='newpric-book'>
                  <p className='prcst'>$25</p>
                  <a href="https://www.airhireme.com/" className='bookbtn'>Book Now</a>
                </div>
              </div>
            </div>
            <div className="slidercard">
              <div className="starticon-box">
                <img src={starticon} className="staricon" alt="" />
                <span>4.5</span>
              </div>
              <img src={sliderimg} className="activimg" alt='' />
              <div className="slider-content">
                <h4 className="activname">Mountain Hiking Tour</h4>
                <p className="activcnty">Sydney, Australia</p>
                <div className='newpric-book'>
                  <p className='prcst'>$25</p>
                  <a href="https://www.airhireme.com/" className='bookbtn'>Book Now</a>
                </div>
              </div>
            </div>
            <div className="slidercard">
              <div className="starticon-box">
                <img src={starticon} className="staricon" alt="" />
                <span>4.5</span>
              </div>
              <img src={sliderimg} className="activimg" alt='' />
              <div className="slider-content">
                <h4 className="activname">Mountain Hiking Tour</h4>
                <p className="activcnty">Sydney, Australia</p>
                <div className='newpric-book'>
                  <p className='prcst'>$25</p>
                  <a href="https://www.airhireme.com/" className='bookbtn'>Book Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="custom_container">
          <div className="new-gallerylist">
            <div className="slidergalylst">
              <img src={topdestinationimg} className="galyimg" alt='' />
              <div className="galstcont">
                <p className="galname">Goldcoast</p>
              </div>
              <div className="destdist">25Km</div>
            </div>
            <div className="slidergalylst">
              <img src={topdestinationimg} className="galyimg" alt='' />
              <div className="galstcont">
                <p className="galname">Goldcoast</p>
              </div>
              <div className="destdist">25Km</div>
            </div>
            <div className="slidergalylst">
              <img src={topdestinationimg} className="galyimg" alt='' />
              <div className="galstcont">
                <p className="galname">Goldcoast</p>
              </div>
              <div className="destdist">25Km</div>
            </div>
            <div className="slidergalylst">
              <img src={topdestinationimg} className="galyimg" alt='' />
              <div className="galstcont">
                <p className="galname">Goldcoast</p>
              </div>
              <div className="destdist">25Km</div>
            </div>
            <div className="slidergalylst">
              <img src={topdestinationimg} className="galyimg" alt='' />
              <div className="galstcont">
                <p className="galname">Goldcoast</p>
              </div>
              <div className="destdist">25Km</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="custom_container">
          <div className="new-activgallerylist">
            <div className="activgalylst">
              <img src={activitiesname} className="activityimage" alt='' />
              <div className="galactcont">
                <p className="galactname">Surfing</p>
              </div>
            </div>
            <div className="activgalylst">
              <img src={activitiesname} className="activityimage" alt='' />
              <div className="galactcont">
                <p className="galactname">Hiking Trails</p>
              </div>
            </div>
            <div className="activgalylst">
              <img src={activitiesname} className="activityimage" alt='' />
              <div className="galactcont">
                <p className="galactname">Camping</p>
              </div>
            </div>
            <div className="activgalylst">
              <img src={activitiesname} className="activityimage" alt='' />
              <div className="galactcont">
                <p className="galactname">Goldcoast</p>
              </div>
            </div>
          </div>
        </div>
      </section>













    </div>
  )
}

