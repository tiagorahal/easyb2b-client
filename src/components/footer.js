import React from 'react';
import './footer.css';
import Newsletter from './newsletter';

const Footer = () => (

    <div className="footer mt-5">
        <div className="row newsletter p-0 m-0 pt-3">
            <Newsletter />

            <div className="foot col-12">
                <div className="foot-stamps">
                    <img className="foot-img" src="assets/logo2.png" />
                    <img className="foot-img" src="assets/secure.png" />
                </div>
                <div className="foot-address">
                    <p>Copyright - 2019 | EasyB2B - suporte@easyb2b.io <br /> (011) 2500-5555 Alameda Vicente Pinzon, 54 - Vila Olímpia, São Paulo - SP, 04547-130</p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer