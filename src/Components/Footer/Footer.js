import React from 'react'
import mail from '../../assets/mail.svg'
function Footer() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ul style={{ listStyle: 'none', marginLeft: '30%', padding: 0, display: 'flex', gap: '15px' }}>
                <li style={{ display: 'flex', color: '#68717D', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px' }}>
                    &copy; 2024 GoDash. All rights reserved
                </li>
                <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                    <span style={{ marginRight: '8px' }}>•</span>
                    <a href="/privacy-policy" style={{ textDecoration: 'none', color: '#68717D' }}>Privacy policy</a>
                </li>
                <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                    <span style={{ marginRight: '8px' }}>•</span>
                    <a href="/terms-of-service" style={{ textDecoration: 'none', color: '#68717D' }}>Terms of service</a>
                </li>
                <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                    <span style={{ marginRight: '8px' }}>•</span>
                    <a href="mailto:Support@gdoash.ai" style={{ textDecoration: 'underline', color: '#68717D', display: 'flex', alignItems: 'center' }}>
                        <img src={mail} alt='nologo' style={{ marginRight: '4px' }}></img> Support@gdoash.ai
                    </a>
                </li>
                <li>
                    <div style={{ display: 'flex', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '18px', marginLeft: '200px' }}>
                        <p>Powered by Zippyy</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Footer;