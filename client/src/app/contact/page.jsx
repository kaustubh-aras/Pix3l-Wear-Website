import React from 'react';

const Contact = () => {
  return (
    <div
      style={{ fontFamily: 'Klapt-Regular' }}
      className="flex items-center justify-center flex-col"
    >
      <div className="flex items-center justify-center text-white flex-col">
        <h1 className="font-bold text-[50px]">Contact Us</h1>
        <p style={{ fontFamily: 'Klapt-Medium' }} className="text-[18px]">
          General Inquiries/Troubleshooting
        </p>
        <p style={{ fontFamily: 'Klapt-Medium' }} className="text-[18px]">
          Feel free to shoot us an email about any problems regarding PIX3L.WEAR products.
        </p>
        <p
          style={{ fontFamily: 'Klapt-Bold' }}
          className="text-[14px] mt-2 font-bold"
        >
          support@pix3lwear.in
        </p>
      </div>
      <div className="flex items-center justify-center text-white mt-8 flex-col">
        <h2 style={{ fontFamily: 'Klapt-Bold' }}>Frequently Asked Questions</h2>
        <h1 style={{ fontFamily: 'Klapt-Bold' }} className="mt-4 text-xl">
          Coming Soon Site Under Development
        </h1>
      </div>
    </div>
  );
};

export default Contact;
