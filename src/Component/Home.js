import React from 'react';
import appstore from '../assests/img/app-store.png';
import dummyrightimg from '../assests/img/dummyrightimg.png';
import googleplay from '../assests/img/google-play.png'
import kiril from '../assests/img/kiril-dobrev.png';
import pexels from '../assests/img/pexels-vanessa.png';
import shans from '../assests/img/shan-s-.png';
import xmockup from '../assests/img/x-mockup.png';
import Slider from './Slider';
import SliderComponent from './SliderComponent';

export default function Home() {
 
  return <>

  

    <section className="newget-inspired">
    <div className="custom_container">
      <div className='newsec-ctntwrap'>
        <h4 className='newsec-hdng text-white'>Get Inspired</h4>
        <p className='newsec-prgh text-lggrey'>New experiences for wherever you are</p>
      </div>
      <SliderComponent />
      <div className='text-center'>
        <a href='https://www.airhireme.com/' className='newexp-catebtn'>Explore all categories</a>
      </div>
      </div>
    </section>
      <section className="new-adventure-stories">
      <div className="custom_container">
        <div className="adventstories-wrapper">
          <h4 className="new-tophead">Adventure Stories</h4>
          <div className="flex_row">
            <div className="flex_col_sm_6">
              <div className="new-adventure-leftwrapper">
                <div className="advstor-list">
                  <div className="new-adventure-rytimg">
                    <img src={dummyrightimg} alt="" />
                  </div>
                  <div className="new-adventure-content">
                    <h5>Sundays on Whitsunday</h5>
                    <p className="advstori-time"><span>5 min read</span></p>
                    <p className="advstori-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <a href=" https://www.airhireme.com/">Read more</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex_col_sm_6">
              <div className="new-adventure-rytwrapper">
                <div className="advstor-list">
                  <div className="new-adventure-rytimg">
                    <img src={pexels} alt="" />
                  </div>
                  <div className="new-adventure-content">
                    <h5>Getting paid to travel?</h5>
                    <p className="advstori-time"><span>5 min read</span></p>
                    <p className="advstori-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod..
                    </p>
                    <a href=" https://www.airhireme.com/">Read more</a>
                  </div>
                </div>
                <div className="advstor-list">
                  <div className="new-adventure-rytimg">
                    <img src={shans}alt="" />
                  </div>
                  <div className="new-adventure-content">
                    <h5>One Week in Melbourne</h5>
                    <p className="advstori-time"><span>5 min read</span></p>
                    <p className="advstori-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod..
                    </p>
                    <a href=" https://www.airhireme.com/">Read more</a>
                  </div>
                </div>
                <div className="advstor-list">
                  <div className="new-adventure-rytimg">
                    <img src={kiril} alt="" />
                  </div>
                  <div className="new-adventure-content">
                    <h5>10 Scuba Diving Tips</h5>
                    <p className="advstori-time"><span>5 min read</span></p>
                    <p className="advstori-para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod..
                    </p>
                    <a href=" https://www.airhireme.com/">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="new-downldaccess">
      <div className="custom_container">
        <div className="downldaccess-wrapper">
          <div className="flex_row">
            <div className="flex_col_sm_6">
              <div className="downldaccess-leftimg">
                <img src={xmockup} alt="" />
              </div>
            </div>
            <div className="flex_col_sm_6">
              <div className="downldaccess-rytside">
                <h5>Download AirhireMe to access <br />
                  exclusive features. </h5>
                  <div className="downl-appicon">
                    <a href=" https://www.airhireme.com/"><img src={googleplay} alt="" /></a>
                    <a href=" https://www.airhireme.com/"><img src={appstore} alt="" /></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="new-slider">
      <div className="custom_container">

 <Slider />

        </div>
        </section>


  </>;
}
