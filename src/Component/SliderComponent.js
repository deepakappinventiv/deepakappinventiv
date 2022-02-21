import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import activitiesname from '../assests/img/activities-name.png';

function SliderComponent() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Carousel arrows centerMode responsive={responsive} infinite={true} className="new-activgallerylist">
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
                <div className="activgalylst">
                    <img src={activitiesname} className="activityimage" alt='' />
                    <div className="galactcont">
                        <p className="galactname">Goldcoast</p>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default SliderComponent;