import React from 'react';
import bookmarkSave from '../assests/img/bookmarksave.png';
import startIcon from '../assests/img/starticon.png';
import mapGroup from '../assests/img/map-group.png';
import expAvatar from '../assests/img/expavatar.png';
import reviewStar from '../assests/img/reviewstar.png'
import Calender from './Calender';



function ActivityExperience() {

  // function EnterDetail() {  // Named function
  //   return (
  //     <div className=''>
  //       <p>test test test</p>
  //     </div>
  //   )
  // };

  let EnterDetail = (function(){
    return (
      <div className=''>
        <p>test test test</p>
      </div>
    )
  });


  const newMethod = () => { // Arrow Function:
    return (
      <div className=''>
        <p>newMethod newMethod newMethod</p>
      </div>
    )
  }

  return (
    <>
      <Calender />

      <h4>Enter Detail:-- </h4>
      <EnterDetail />
      {EnterDetail()}
      <hr />

      <h4>Enter Method:---</h4>
      <p> This function:<span>{newMethod()} </span>  </p>
      <hr />


      <div className='newactivity-experiencewraper'>
        <div className='newact-exphead'>
          <h5>Beginner Surf Experience</h5>
          <div className='newact-revsave'>
            <p className='newactreview'><img src={startIcon} alt='' />&nbsp;<span>4.5</span> (10 reviews)&nbsp;&nbsp;|&nbsp;&nbsp;100+ Booked </p>
            <p className='newactsave'><img src={bookmarkSave} alt='' /> Save</p>
          </div>
        </div>
        <div className='newacexper-wraper'>

          <div className='newactexpbody'>
            <h5 className='newacexphead'>What you’ll do</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat...  <a href='https://www.airhireme.com/'>Read more</a></p>
          </div>

          <div className='newactexpbody'>
            <h5 className='newacexphead'>Things to note</h5>
            <ul>
              <li>Please do not bring valuable items</li>
              <li>Please arrive in swimming wear- surf wear and equipment provided</li>
            </ul>
          </div>

          <div className='newactexpbody'>
            <h5 className='newacexphead'>Location</h5>
            <div>
              <img src={mapGroup} alt='' />
            </div>
          </div>

          <div className='experreview-feedback'>
            <h5 className='expfedbackhead'>Beginner Surf Experience Reviews</h5>
            <div className='revfed-wrapper'>
              <span className='rew-ratno'>4.5</span>
              <ul>
                <li><img src={reviewStar} alt='' /></li>
                <li><img src={reviewStar} alt='' /></li>
                <li><img src={reviewStar} alt='' /></li>
                <li><img src={reviewStar} alt='' /></li>
                <li><img src={reviewStar} alt='' /></li>
              </ul>
              <span className='totrevno'>10 reviews</span>
            </div>
            <div className='exprevwrapper'>
              <div className='newexreview-box'>
                <img src={expAvatar} alt='' className='exprevimg' />
                <div className='exprevnamelist'>
                  <h6>Daniel Allen</h6>
                  <p>December 2021</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='exprevwrapper'>
              <div className='newexreview-box'>
                <img src={expAvatar} alt='' className='exprevimg' />
                <div className='exprevnamelist'>
                  <h6>Daniel Allen</h6>
                  <p>December 2021</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='exprevwrapper'>
              <div className='newexreview-box'>
                <img src={expAvatar} alt='' className='exprevimg' />
                <div className='exprevnamelist'>
                  <h6>Daniel Allen</h6>
                  <p>December 2021</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className='expreview-lodmor'>
            <a href='https://www.airhireme.com/'>Load More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivityExperience;