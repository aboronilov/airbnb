import React from "react";

const Footer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-sm text-gray-800">
        <h1 className="font-bold">ABOUT</h1>
        <p>How Airbnb Works</p>
        <p>Newsrooms</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h1 className="font-bold">COMMUNITY</h1>
        <p>Accessability</p>
        <p>This is not a real site</p>
        <p>This is a pretty awesome clone</p>
        <p>Referals acceppted</p>
        <p>Stay Tuned</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h1 className="font-bold">HOST</h1>
        <p>Become a host</p>
        <p>Aircover for hosts</p>
        <p>Host resources</p>
        <p>Forum</p>
        <p>Guest meeting</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h1 className="font-bold">SUPPORT</h1>
        <p>Press Center</p>
        <p>This is not a real site</p>
        <p>This is a pretty awesome clone</p>
        <p>Vouchers</p>
        <p>Carrer</p>
      </div>
    </section>
  );
};

export default Footer;
