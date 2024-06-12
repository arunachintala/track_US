// import React from 'react'
// import box from '../../assets/Vector.svg'
// import phone from '../../assets/Phone.svg'
// function ContactInformation() {
//     return (
//         <div style={{ backgroundColor: '#F5F8F8', width: '35%', height: '151px', marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
//             <div style={{ paddingLeft: '41px', paddingTop: '11px', color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px' }}>
//                 <p>Contact Information</p>
//             </div>
//             <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
//                 <img src={box} alt="logo" />
//                 <span style={{ paddingLeft: '10px', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
//             </div>
//             <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
//                 <img src={phone} alt="logo" />
//                 <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
//             </div>
//             <div style={{ paddingLeft: '4px', paddingTop: '10px', paddingRight: '4px' }}>
//                 <hr style={{ width: '100%' }}></hr>
//             </div>
//             <div style={{ paddingLeft: '41px', paddingTop: '5px', color: "#0C77FF", fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', lineHeight: '15px' }}>
//                 <p>Privacy policy</p>
//             </div>
//         </div>
//     )
// }
// export default ContactInformation
import React from 'react';
import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg';

function ContactInformation({ width = '35%' }) {
    return (
        <div style={{ backgroundColor: '#F5F8F8', width: width, height: '151px', marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ paddingLeft: '41px', paddingTop: '11px', color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px' }}>
                <p>Contact Information</p>
            </div>
            <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
                <img src={box} alt="logo" />
                <span style={{ paddingLeft: '10px', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
            </div>
            <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
                <img src={phone} alt="logo" />
                <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
            </div>
            <div style={{ paddingLeft: '4px', paddingTop: '10px', paddingRight: '4px' }}>
                <hr style={{ width: '100%' }}></hr>
            </div>
            <div style={{ paddingLeft: '41px', paddingTop: '5px', color: "#0C77FF", fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', lineHeight: '15px' }}>
                <p>Privacy policy</p>
            </div>
        </div>
    );
}

export default ContactInformation;
// import React from 'react';
// import box from '../../assets/Vector.svg';
// import phone from '../../assets/Phone.svg';
// import './ContactInformation.css';

// function ContactInformation({ width = '35%' }) {
//     return (
//         <div className="contact-container" style={{ '--width': width }}>
//             <div className="contact-title">
//                 <p>Contact Information</p>
//             </div>
//             <div className="contact-info">
//                 <img src={box} alt="logo" />
//                 <span className="contact-text"> support@godash.ai</span>
//             </div>
//             <div className="contact-info">
//                 <img src={phone} alt="logo" />
//                 <span className="contact-text"> 1800097866</span>
//             </div>
//             <div style={{ marginTop: '10px' }}>
//                 <hr style={{ width: '100%' }} />
//             </div>
//             <div className="privacy-policy">
//                 <p>Privacy policy</p>
//             </div>
//         </div>
//     );
// }

// export default ContactInformation;
