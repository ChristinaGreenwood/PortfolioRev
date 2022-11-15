import React from "react";
import contactPagePicture from "../../../src/images/new.jpg";
import { HiPhone, HiMail, HiStar, HiChatAlt2 } from "react-icons/hi";

const Contact = () => {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <a>
                <HiPhone />
              </a>
            </div>
            <div className='text'>801-426-9286</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <a>
                <HiMail />
              </a>
            </div>
            <div className='text'>softwareanddesign2022@gmail.com</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <a>
                <HiStar />
              </a>
            </div>
            <div className='text'>Utah County / Remote</div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <a>
                <HiChatAlt2 />
              </a>
            </div>
            <div className='text'>
              <a
                href='https://www.linkedin.com/in/christina-greenwood-20636a157/'
                target='_blank'
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <a><FontAwesomeIcon icon="wrench"/></a>
export default Contact;
