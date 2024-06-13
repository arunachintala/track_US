// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/zippyy_logo.svg';
// import Banner from '../Components/Banner/Banner';
// import ContactInformation from '../Components/ContactInformation/ContactInformation';
// import Footer from '../Components/Footer/Footer';
// function Page1() {
//   const [orderid, setorderid] = useState('');
//   const navigate = useNavigate();

//   const handleTrack = () => {
//     navigate('/page2');
//   };

//   return (
//     <div style={{ backgroundColor: '#F5F8F8', width: '100%', height: 'auto', padding: '1%' }}>
//       <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '2%' }}>

//         <Banner />
//         <div>
//           <h1 style={{ textAlign: 'center', marginTop: '3%', color: '#121114', fontFamily: 'Poppins', fontWeight: '500', fontSize: '32px', lineHeight: '48px' }}>Track your shipment</h1>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
//             <img src={logo} alt="nologo" style={{ maxWidth: '100%', height: 'auto' }} />
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <p style={{ color: '#121114', paddingTop: '30px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }}>Enter upto 25 of your AWB numbers<span style={{ fontSize: '10px', lineHeight: '15px' }}>(Comma separated)</span></p>
//           </div>

//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <input
//               style={{
//                 backgroundColor: 'white',
//                 color: '#D9D9D9',
//                 fontFamily: 'Poppins',
//                 fontWeight: '400',
//                 fontSize: '14px',
//                 lineHeight: '21px',
//                 width: '35%',
//                 height: '40px',
//                 borderRadius: '6px',
//                 border: '1px solid #D9D9D9',
//                 padding: '10px'
//               }}
//               type="text"
//               value={orderid}
//               placeholder='XXXXXX21233, WWWW1122, QQQWWW1122'
//               onChange={(e) => setorderid(e.target.value)}
//               required
//             />
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
//             <button
//               style={{
//                 fontFamily: 'Poppins',
//                 fontWeight: '500',
//                 fontSize: '16px',
//                 lineHeight: '24px',
//                 backgroundColor: '#D54029',
//                 color: 'white',
//                 border: '1px solid',
//                 padding: '10px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 width: '13%',
//                 height: '4%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               onClick={handleTrack}
//             >
//               Track
//             </button>
//           </div>

//           <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
//             <ContactInformation width="35%" />

//           </div>

//           <hr style={{ border: 'none', borderTop: '1px solid #D9D9D9', marginTop: '30px', marginBottom: '20px' }} />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page1;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/zippyy_logo.svg';
import Banner from '../Components/Banner/Banner';
import ContactInformation from '../Components/ContactInformation/ContactInformation';
import Footer from '../Components/Footer/Footer';
import './Page1.css';

function Page1() {
  const [orderid, setorderid] = useState('');
  const navigate = useNavigate();

  const handleTrack = () => {
    navigate('/page2');
  };

  return (
    <div className="page-container">
      <div className="inner-container">
        <Banner />
        <div>
          <h1 className="heading">Track your shipment</h1>
          <div className="logo-container">
            <img src={logo} alt="nologo" className="logo" />
          </div>
          <div className="input-container">
            <p className="input-label">Enter upto 25 of your AWB numbers<span className="small-text">(Comma separated)</span></p>
            <input
              type="text"
              value={orderid}
              placeholder='XXXXXX21233, WWWW1122, QQQWWW1122'
              onChange={(e) => setorderid(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="button-container">
            <button className="track-button" onClick={handleTrack}>
              Track
            </button>
          </div>
          <div className="contact-info-container">
            <ContactInformation width="35%" />
          </div>
          <hr className="separator" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Page1;