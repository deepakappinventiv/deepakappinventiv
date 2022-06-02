import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import locationbannerimg from "../assests/img/locationbanner.png";
import activitylocation from "../assests/img/activitylocation.png";
import sliderimg from "../assests/img/sliderimg.png";
import starticon from "../assests/img/starticon.png";
import exppicture from "../assests/img/exppicture.png";
import exppicture1 from "../assests/img/exppicture1.png";
import exppicture2 from "../assests/img/exppicture2.png";

import appstore from "../assests/img/app-store.png";
import dummyrightimg from "../assests/img/dummyrightimg.png";
import googleplay from "../assests/img/google-play.png";
import kiril from "../assests/img/kiril-dobrev.png";
import pexels from "../assests/img/pexels-vanessa.png";
import shans from "../assests/img/shan-s-.png";
import xmockup from "../assests/img/x-mockup.png";

function Location() {
  // Location Banner
  const locationBanner = () => {
    return (
      <div className="newlocatactivity-wraper">
        <div className="custom_container">
          <div className="newlocation-bannerwrap">
            <div className="locatactiv">
              <img src={locationbannerimg} className="locbanimg" alt="" />
              <div className="locatactiv-content">
                <h5>Goldcoast</h5>
                <button>View Map </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Small Slider
  const smallactivSlider = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5.5,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4.5,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <Carousel responsive={responsive}>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Surfing</h6>
          </div>
        </div>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Boat Tours</h6>
          </div>
        </div>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Kayak</h6>
          </div>
        </div>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Hiking</h6>
          </div>
        </div>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Bike Tours</h6>
          </div>
        </div>
        <div className="sm-sldwrap">
          <div className="smsglcont">
            <img src={activitylocation} className="actlocimage" alt="" />
            <h6 className="actlocnme">Bike Tours</h6>
          </div>
        </div>
      </Carousel>
    );
  };

  // Location Activity Slider
  const locatactivSlider = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel responsive={responsive}>
        <div className="slidercard">
          <div className="starticon-box">
            <img src={starticon} className="staricon" alt="" />
            <span>4.5</span>
          </div>
          <img src={sliderimg} className="activimg" alt="" />
          <div className="slider-content">
            <h4 className="activname">Mountain Hiking Tour</h4>
            <p className="activcnty">Sydney, Australia</p>
            <div className="newpric-book">
              <p className="prcst">$25</p>
              <a href="https://www.airhireme.com/" className="bookbtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="slidercard">
          <div className="starticon-box">
            <img src={starticon} className="staricon" alt="" />
            <span>4.5</span>
          </div>
          <img src={sliderimg} className="activimg" alt="" />
          <div className="slider-content">
            <h4 className="activname">Mountain Hiking Tour</h4>
            <p className="activcnty">Sydney, Australia</p>
            <div className="newpric-book">
              <p className="prcst">$25</p>
              <a href="https://www.airhireme.com/" className="bookbtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="slidercard">
          <div className="starticon-box">
            <img src={starticon} className="staricon" alt="" />
            <span>4.5</span>
          </div>
          <img src={sliderimg} className="activimg" alt="" />
          <div className="slider-content">
            <h4 className="activname">Mountain Hiking Tour</h4>
            <p className="activcnty">Sydney, Australia</p>
            <div className="newpric-book">
              <p className="prcst">$25</p>
              <a href="https://www.airhireme.com/" className="bookbtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="slidercard">
          <div className="starticon-box">
            <img src={starticon} className="staricon" alt="" />
            <span>4.5</span>
          </div>
          <img src={sliderimg} className="activimg" alt="" />
          <div className="slider-content">
            <h4 className="activname">Mountain Hiking Tour</h4>
            <p className="activcnty">Sydney, Australia</p>
            <div className="newpric-book">
              <p className="prcst">$25</p>
              <a href="https://www.airhireme.com/" className="bookbtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="slidercard">
          <div className="starticon-box">
            <img src={starticon} className="staricon" alt="" />
            <span>4.5</span>
          </div>
          <img src={sliderimg} className="activimg" alt="" />
          <div className="slider-content">
            <h4 className="activname">Mountain Hiking Tour</h4>
            <p className="activcnty">Sydney, Australia</p>
            <div className="newpric-book">
              <p className="prcst">$25</p>
              <a href="https://www.airhireme.com/" className="bookbtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    );
  };

  // Experience for Everyone Slider
  const expershareSlider = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <Carousel responsive={responsive}>
        <div className="expsharecontwrap">
          <img src={exppicture} className="exppictureimage" alt="" />
          <div className="expshcont-upperpart">
            <h6>Fun with the Family</h6>
            <p>Enjoy a family day out at Gold Coast’s top attractions </p>
          </div>
          <div className="expshcont-lowerpart">See activities</div>
        </div>
        <div className="expsharecontwrap">
          <img src={exppicture1} className="exppictureimage" alt="" />
          <div className="expshcont-upperpart">
            <h6>Adrenaline Rush</h6>
            <p>Get your heart racing with these thrilling experiences! </p>
          </div>
          <div className="expshcont-lowerpart">See activities</div>
        </div>
        <div className="expsharecontwrap">
          <img src={exppicture2} className="exppictureimage" alt="" />
          <div className="expshcont-upperpart">
            <h6>Nature & Discovery</h6>
            <p>
              Take in all the natural wonders that Gold Coast has to offer.{" "}
            </p>
          </div>
          <div className="expshcont-lowerpart">See activities</div>
        </div>
        <div className="expsharecontwrap">
          <img src={exppicture} className="exppictureimage" alt="" />
          <div className="expshcont-upperpart">
            <h6>Fun with the Family</h6>
            <p>Enjoy a family day out at Gold Coast’s top attractions </p>
          </div>
          <div className="expshcont-lowerpart">See activities</div>
        </div>
      </Carousel>
    );
  };

  return (
    <>
      <div className="">
        {locationBanner()}
        <div className="newloctnslider">
          <div className="custom_container">
            <div className="locatsldwrap">
              <h4 className="newloctslid-head">Best of Goldcoast</h4>
              {smallactivSlider()}

              <div className="newloctophead">
                <h4 className="newloctslid-head">AirhireMe Top Picks</h4>

                <div className="locationlistwrap">
                  <div className="locationlist-head">
                    <h5 className="">Water Sports</h5>
                    <a href="https://www.airhireme.com/">Explore all</a>
                  </div>
                  {locatactivSlider()}
                </div>
                <div className="locationlistwrap">
                  <div className="locationlist-head">
                    <h5 className="">Walking & Biking Tours</h5>
                    <a href="https://www.airhireme.com/">Explore all</a>
                  </div>
                  {locatactivSlider()}
                </div>
                <div className="locationlistwrap">
                  <div className="locationlist-head">
                    <h5 className="">Thrill-seeking Adventure</h5>
                    <a href="https://www.airhireme.com/">Explore all</a>
                  </div>
                  {locatactivSlider()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="expsharecomponent">
          <div className="custom_container">
            <h5 className="">Still Unsure?</h5>
            <p className="">Experiences for Everyone</p>
            {expershareSlider()}
          </div>
        </div>

        <div className="new-travel-inspiration">
          <div className="custom_container">
            <div className="adventstories-wrapper">
              <h4 className="new-tophead">Get Inspired</h4>
              <div className="flex_row">
                <div className="flex_col_sm_6">
                  <div className="new-adventure-rytwrapper">
                    <div className="advstor-list">
                      <div className="new-adventure-rytimg">
                        <img src={pexels} alt="" />
                      </div>
                      <div className="new-adventure-content">
                        <h5>Getting paid to travel?</h5>
                        <p className="advstori-time">
                          <span>5 min read</span>
                        </p>
                        <p className="advstori-para">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod..
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
                        <p className="advstori-time">
                          <span>5 min read</span>
                        </p>
                        <p className="advstori-para">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod..
                        </p>
                        <a href=" https://www.airhireme.com/">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center">
                <a href="https://www.airhireme.com/" class="newexp-fadebg">
                  Find more travel inspiration
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="custom_container">
            <div className="adventstories-wrapper">
              <h4 className="new-tophead">Nearby Destinations</h4>
              <div className="flex_row">
                <div className="flex_col_sm_3">
                  <div class="slidergalylst">
                    <img src={exppicture2} class="galyimg" alt="" />
                    <div class="galstcont">
                      <p class="galname">Tweed Heads</p>
                    </div>
                    <div class="destdist">25Km</div>
                  </div>
                </div>
                <div className="flex_col_sm_3">
                  <div class="slidergalylst">
                    <img src={exppicture2} class="galyimg" alt="" />
                    <div class="galstcont">
                      <p class="galname">Byron Bay</p>
                    </div>
                    <div class="destdist">25Km</div>
                  </div>
                </div>
                <div className="flex_col_sm_3">
                  <div class="slidergalylst">
                    <img src={exppicture2} class="galyimg" alt="" />
                    <div class="galstcont">
                      <p class="galname">Sunshine Coast</p>
                    </div>
                    <div class="destdist">25Km</div>
                  </div>
                </div>
                <div className="flex_col_sm_3">
                  <div class="slidergalylst">
                    <img src={exppicture2} class="galyimg" alt="" />
                    <div class="galstcont">
                      <p class="galname">Brisbane</p>
                    </div>
                    <div class="destdist">25Km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
