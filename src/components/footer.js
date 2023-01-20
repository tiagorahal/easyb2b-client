import React from 'react';
import './footer.css';

const Footer = () => (

    <div className="footer">
        <div className="row newsletter p-0 m-0 pt-3">
            <div className="row justify-content-center pb-3">
                <div className="col-7 d-inline-block d-sm-flex justify-content-center justify-content-lg-end align-items-center">
                    <div className="mb-3 mb-sm-0 d-flex h-100 d-sm-flex justify-content-center align-items-center">
                        <svg className="paper-plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
                        <p className="subscribe">ASSINE NOSSA <br /> NEWSLETTER</p>
                    </div>
                    <div className="ct-input-footer d-flex justify-content-center align-items-center">
                        <input type="text" name="" id="" placeholder="NOS DIGA SEU E-MAIL" />
                        <button>ENVIAR</button>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="text-center mt-3 mt-lg-0 col-5 d-block d-sm-flex justify-content-center justify-content-lg-start align-items-center">
                    <p className="keepup d-block d-sm-block font-weight-normal mb-3 mb-sm-0">
                        ACOMPANHE
                    </p>
                    <button className="icon-social-btn">
                        <img src="assets/icons/linkedin-in.svg" alt='something' />
                    </button>
                    <button className="icon-social-btn">
                        <img src="assets/icons/facebook-f.svg" alt='something' />
                    </button>
                    <button className="icon-social-btn">
                        <img src="assets/icons/instagram.svg" alt='something' />
                    </button>
                    <button className="icon-social-btn">
                        <img src="assets/icons/twitter.svg" alt='something' />
                    </button>
                </div>
            </div>

            <div className="foot col-12">
                <div className="foot-stamps">
                    <img className="foot-img" src="assets/logo2.png" alt='nothing' />
                    <img className="foot-img" src="assets/secure.png" alt='nothing' />
                </div>
                <div className="foot-address">
                    <p>Copyright - 2019 | EasyB2B - suporte@easyb2b.io <br /> (011) 2500-5555 Alameda Vicente Pinzon, 54 - Vila Olímpia, São Paulo - SP, 04547-130</p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer