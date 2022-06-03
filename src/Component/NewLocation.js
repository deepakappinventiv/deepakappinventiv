import React from "react";
import "../assests/sass/custom.scss";
import activityBanner from "../assests/img/activitybanner.png";
import activityName from "../assests/img/activityname.png";

function NewLocation() {
  return (
    <>
      <section className="activitycompowrap">
        <div className="custom_container">
          <div className="newactivity-banner">
            <img src={activityBanner} alt="" className="newactiv-bnrimg" />
            <div className="newlocatactivName">
              <h5 className="new-activityName">Explore</h5>
              <p>See what Australia has to offer</p>
            </div>
          </div>

          <div className="newloctopwrp">
            <h4>Top Locations</h4>
            <div className="newlocaslider">
              <div class="slidergalylst">
                <img src={activityBanner} class="galyimg" alt="" />
                  <div class="galstcont">
                    <p class="galname">Sunshine Coast</p>
                  </div>
              </div>
              <div class="slidergalylst">
                <img src={activityBanner} class="galyimg" alt="" />
                  <div class="galstcont">
                    <p class="galname">Sunshine Coast</p>
                  </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="destinationfeatouter">
        <div className="custom_container">
          <div className="destinfeatlist">
            <div className="flex_row">
              <div className="flex_col_sm_3">
                <div className="destinalist">
                  <h4>Destination</h4>
                  <ul>
                    <li className="active">All</li>
                    <li>Sydney</li>
                    <li>Byron Bay</li>
                    <li>Hunter Valley</li>
                    <li>Port Stephens</li>
                    <li>Newcastle</li>
                    <li>Blue Mountains</li>
                    <li>Eastern Creek</li>
                    <li>Wollongong</li>
                    <li>Central Coast</li>
                    <li>Jervis Bay</li>
                    <li>Coffs Harbour</li>
                    <li>Nelson Bay</li>
                    <li>Melbourne</li>
                    <li>Mornington Peninsula</li>
                    <li>Great Ocean Road</li>
                    <li>Phillip Island</li>
                    <li>Yarra Valley</li>
                    <li>Geelong</li>
                    <li>Perth</li>
                    <li>Rockingham</li>
                    <li>Barbagallo</li>
                    <li>Fremantle</li>
                    <li>Rottnest Island</li>
                    <li>Busselton</li>
                    <li>Exmouth & Ningaloo Reef</li>
                    <li>Gold Coast</li>
                    <li>Cairns</li>
                    <li>Brisbane</li>
                    <li>Whitsundays</li>
                    <li>Airlie Beach</li>
                    <li>Sunshine Coast</li>
                    <li>Surfers Paradise</li>
                    <li>Noosa</li>
                    <li>Port Douglas</li>
                    <li>Mooloolaba</li>
                    <li>Adelaide</li>
                    <li>Barossa Valley</li>
                    <li>Kangaroo Island</li>
                    <li>Hobart</li>
                    <li>Launceston</li>
                    <li>Darwin</li>
                    <li>Uluru</li>
                    <li>Alice Springs</li>
                    <li>Canberra</li>
                  </ul>
                </div>
              </div>
              <div className="flex_col_sm_9">
                <div className="catefeatlisting">
                  <div className="featlishead">
                    <h4>Featured Listings</h4>
                    <a href="">View all</a>
                  </div>
                  <div className="catfeat-row">
                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="catfeat-column">
                      <div class="slidercard">
                        <div class="starticon-box">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBnVLBsQFBEH2z9av+/zcZWBkQATIgAyFwwsk6oFSpQgZEQAZkIARCcHNivOkdanbZ2aIvM13T8/q91w3khJ6inVejvAAThKw4QqOk+jhl1QXwtxjYW8tflsUiQgF/OPBq2JxxIZuI50dMftEQAEEk4H82mycT0X9jsZLOBSsldGpPBBvKafOHT0qP6X6AOb4NhY4w+RrIAHSxcOXUCLQR/fmfz5TepJx9nDph92KHpBfpMN7U3b1JTEceFJbws1imF+91xBpV+EJTdiqCN51q8DOpekH0COWnscY87oXq8Wb2Q9lt5bueoZgJwqxsAbZ0v0LtkaTmZE6Atbxf0XS//SAZoTjfi0eXUBGb2eIEV2lf7rzuTmJyd0P4AAAAAElFTkSuQmCC" class="staricon" alt="" />
                          <span>4.5</span>
                        </div>
                        <img src={activityBanner} class="activimg" alt="" />
                        <div class="slider-content">
                          <h4 class="activname">Mountain Hiking Tour</h4>
                          <p class="activcnty">Sydney, Australia</p>
                          <div class="newpric-book">
                            <p class="prcst">$25</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="destfeatloadmore">
                    <a href="">Load More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewLocation;
