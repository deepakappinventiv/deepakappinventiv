import React from "react";
import exppicture from "../assests/img/exppicture.png";
import starticon from "../assests/img/starticon.png";
import locatgoogmap from "../assests/img/locatgoogmap.png";
import exppicture2 from "../assests/img/exppicture2.png";

function NewMap() {
    return (
        <>
            <section className="newlocation-mapscreenwrap">
                <div className="custom_container">
                    <div className="newmaplocationouter">
                        <div className="flex_row">
                            <div className="flex_col_sm_5">
                                <div className="locatmapwrap">
                                    <div className="location-mapimg">
                                        <div className="locmapimg">
                                            <img src={exppicture} />
                                        </div>
                                        <div className="locmapcont">
                                            <h4>Beginner Surfing Experience</h4>
                                            <div className="locatrev-rating">
                                                <p>
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                </p>
                                                <span>4.8</span>
                                            </div>
                                            <div className="locatdistance">
                                                <p className="locaname">Surfer’s Paradise</p>
                                                <p className="locadist">2.5km away</p>
                                            </div>

                                            <h6 className="locat-perscaps"><span>From $30 </span>/ person</h6>
                                        </div>
                                    </div>
                                    <div className="location-mapimg">
                                        <div className="locmapimg">
                                            <img src={exppicture} />
                                        </div>
                                        <div className="locmapcont">
                                            <h4>Beginner Surfing Experience</h4>
                                            <div className="locatrev-rating">
                                                <p>
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                </p>
                                                <span>4.8</span>
                                            </div>
                                            <div className="locatdistance">
                                                <p className="locaname">Surfer’s Paradise</p>
                                                <p className="locadist">2.5km away</p>
                                            </div>

                                            <h6 className="locat-perscaps"><span>From $30 </span>/ person</h6>
                                        </div>
                                    </div>
                                    <div className="location-mapimg">
                                        <div className="locmapimg">
                                            <img src={exppicture} />
                                        </div>
                                        <div className="locmapcont">
                                            <h4>Beginner Surfing Experience</h4>
                                            <div className="locatrev-rating">
                                                <p>
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                </p>
                                                <span>4.8</span>
                                            </div>
                                            <div className="locatdistance">
                                                <p className="locaname">Surfer’s Paradise</p>
                                                <p className="locadist">2.5km away</p>
                                            </div>

                                            <h6 className="locat-perscaps"><span>From $30 </span>/ person</h6>
                                        </div>
                                    </div>
                                    <div className="location-mapimg">
                                        <div className="locmapimg">
                                            <img src={exppicture} />
                                        </div>
                                        <div className="locmapcont">
                                            <h4>Beginner Surfing Experience</h4>
                                            <div className="locatrev-rating">
                                                <p>
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                    <img src={starticon} />
                                                </p>
                                                <span>4.8</span>
                                            </div>
                                            <div className="locatdistance">
                                                <p className="locaname">Surfer’s Paradise</p>
                                                <p className="locadist">2.5km away</p>
                                            </div>

                                            <h6 className="locat-perscaps"><span>From $30 </span>/ person</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex_col_sm_7">
                                <div className="locatgoogmap">
                                    <img src={locatgoogmap} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newlocation-mapdestinslider">
                <div className="custom_container">
                    <div className="newmapdestinsliderouter">
                        <h4 className="new-tophead">Nearby Destinations</h4>
                        <div className="" style={{display:'flex'}}>
                            <div class="slidergalylst">
                                <img src={exppicture2} class="galyimg" alt="" />
                                <div class="galstcont">
                                    <p class="galname">Sunshine Coast</p>
                                </div>
                                <div class="destdist">25Km</div>
                            </div>
                            <div class="slidergalylst">
                                <img src={exppicture2} class="galyimg" alt="" />
                                <div class="galstcont">
                                    <p class="galname">Sunshine Coast</p>
                                </div>
                                <div class="destdist">25Km</div>
                            </div>
                        </div>
                        <div class="text-center"><a href="https://www.airhireme.com/" class="newexp-catebtn">Explore all destinations</a></div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default NewMap;
