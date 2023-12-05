import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  import QRCode from 'react-qr-code'; // Assuming this package or similar is available for QR code generation
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const ConcertEventEmail = ({ eventDetails = {
    name: 'Big Comedy Live Underground',
    date: 'Show Date',
    venue: 'Show Venue',
    time: 'Show Time',
    moreInfoUrl: 'https://www.google.com',
    ticketId: '1234567890'
  }, qrCodeValue }) => (
    <Html>
      <Head />
      <Preview>Get Ready for an Unforgettable comedy Experience!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <div style={
                {
                    textAlign: 'center' as const,
                    margin: '20px 0',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                }
            }>
                <Img
                    style={{ margin: '0 auto' }}
                    src={`https://www.bigcomedy.live/_next/image?url=%2FLogo.png&w=256&q=75`}
                    width="256"
                    height="150"
                    alt="Concert Logo"
                />
            </div>
            <Hr style={hr} />
            <Text style={title}>{eventDetails.name}</Text>
            <Text style={footer}>
            Thank you for choosing Big Comedy Live! This email confirms your recent ticket purchase.
            </Text>
            <div>
            <Img 
            src={`https://chart.googleapis.com/chart?cht=qr&chl=${eventDetails.ticketId}&chs=150x150`} 
            alt="QR Code"
            width="150"
            height="150"
            style={{ margin: '0 auto' }}

            /> 
            </div>
            <Text style={paragraph}>
              Date: {eventDetails.date}
            </Text>
            <Text style={paragraph}>
              Venue: {eventDetails.venue}
            </Text>
            <Text style={paragraph}>
              Time: {eventDetails.time}
            </Text>
            <div style={{ textAlign: 'center' as const, margin: '20px 0' }}>
              {/* <QRCode 
              value={qrCodeValue} 
              size={128} 
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              /> */}
            </div>
            {/* <Button
              pX={10}
              pY={10}
              style={button}
              href={eventDetails.moreInfoUrl}
            >
              More About The Event
            </Button> */}
            <Hr style={hr} />
            <Text style={footer}>
              For any inquiries, contact us at info@bigcomedy.live
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ConcertEventEmail;
  
  const main = {
    backgroundColor: '#000', // Black background
    color: '#fff', // White text color
    fontFamily: 'Arial, sans-serif',
  };
  
  const container = {
    backgroundColor: '#1a1a1a', // Slightly lighter black for the container
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const box = {
    padding: '0 48px',
  };
  
  const hr = {
    borderColor: '#333', // Dark grey for the horizontal rule
  };
  
  const title = {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
  };
  
  const paragraph = {
    color: '#ccc', // Light grey for text
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
  };
  
  const button = {
    backgroundColor: '#813BF6', // A bright color for the button
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
  };
  
  const footer = {
    color: '#888', // Grey for footer
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
  };
  