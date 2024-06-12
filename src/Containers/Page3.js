import React from 'react';
import packing from '../assets/Packing.svg';
import { Grid } from '@mui/material';
import StatusCard from '../Components/StatusCard/StatusCard';
import ContactInformation from '../Components/ContactInformation/ContactInformation';
function Page3() {

    return (
        <div style={{ border: '1px solid white', marginBottom: '10%', width: '100%', backgroundColor: '#F5F8F8', height: 'auto' }}>
            <div>
                <p style={{ marginTop: '2%', marginLeft: '3%', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <div style={{ margin: '1%', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '2%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '50%' }}>
                        <div style={{ marginBottom: '6%', height: 'auto' }}>
                            <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114', marginBottom: '1%' }}>Tracking Status</p>
                            <p style={{ fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p>
                        </div>

                        <StatusCard trackingId="2203331212" status="Shipment info shared" />
                        <StatusCard trackingId="2203331213" status="Tracking not generated" />
                        <Grid container style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '90%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                                <p style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: '#121114'
                                }}>Tracking id : <span style={{ fontWeight: '400' }}>2203331213</span></p>
                            </Grid>
                            <Grid item xs={5.5}>
                                <p style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    color: '#D54029',
                                    paddingLeft: '1%'
                                }}>Sorry ! Invalid order-id</p>
                            </Grid>
                            <Grid item xs={2.5}>
                                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '106px', height: '36px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', verticalAlign: 'center', padding: '10px', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                                    Details&nbsp;&nbsp;&gt;
                                </button>
                            </Grid>
                        </Grid>

                        <a href="http://localhost:3000/" style={{ color: '#0C77FF', fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', lineHeight: '18px', textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#0C77FF' }}> Need help?</a>

                    </div>
                    <div style={{ width: '50%', height: '100%' }}>
                        <div style={{ width: '100%', border: '1px solid #D9D9D9', height: '75%', borderRadius: '16px', marginBottom: '40px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <img style={{ marginTop: '20%' }} src={packing} alt="no logo"></img>
                                <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '28px', lineHeight: '41.44px', color: '#121114', marginBottom: '20%' }}>Sorry! Invalid Order ID</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: '1px solid black',
                                borderRadius: '6px',
                                padding: '10px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#121114',
                                textAlign: 'center',
                                width: '240px',
                                height: '36px',
                                fontFamily: 'Poppins',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}

                        >
                            Back
                        </button>
                    </div>

                    <ContactInformation width="50%" />

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#121114', marginLeft: '85%', paddingTop: '1%' }}>Powered by Zippyy</p>
                </div>
            </div>
        </div >
    );
}

export default Page3;

