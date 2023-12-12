import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container bg-color-secondary text-color-primary">
      <div className="about-us-content">
      <h2 className="text-4xl text-color-tertiary font-primary mb-4">Welcome to SendiT Delivery</h2>

        <p className="mb-6 text-gray-800">
          SendiT is a courier service that helps users deliver parcels to different destinations. SendiT provides courier quotes based on weight categories. Whether you need to send small packages or larger shipments, SendiT ensures a reliable and efficient delivery experience.
        </p>

        <div className='section'>
          <div className='text'>
            <h3 className="text-2xl font-primary mb-2">Our Mission</h3>
            <p className="text-gray-800">
              At SendiT, our mission is to provide a seamless and dependable courier service for individuals and businesses alike. We strive to make parcel delivery hassle-free by offering transparent pricing based on weight, ensuring that your packages reach their destinations safely and on time.
            </p>
          </div>
          <div className='image1'>
            <img src="https://cdn.pixabay.com/photo/2023/02/18/16/02/bicycle-7798227_1280.jpg" alt="Image 2" className="w-full h-auto" />
          </div>
        </div>

        <div className='section'>
          <div className='image2'>
            <img src="https://cdn.pixabay.com/photo/2012/04/02/12/45/fork-lift-24394_1280.png" alt="Image 3" className="w-full h-auto" />
          </div>
          <div className='text'>
            <h3 className="text-2xl font-primary mb-2">The SendiT Experience</h3>
            <p className="text-gray-800">
              What sets the SendiT experience apart is our commitment to reliable and affordable parcel delivery. Users can easily calculate shipping costs based on weight categories, track their packages in real-time, and enjoy the convenience of a user-friendly platform that simplifies the entire delivery process.
            </p>
          </div>
        </div>

        <div className='section'>
          <div className='text'>
            <div className="highlighted-section">
              <h3 className="text-2xl font-primary mb-2">Why Choose SendiT?</h3>
              <ul className="text-gray-800">
                <li>
                  <strong className="text-color-tertiary">Dependable Courier Service:</strong> We offer a reliable and efficient courier service to ensure your parcels reach their destination securely.
                </li>
                <li>
                  <strong className="text-color-tertiary">Transparent Pricing:</strong> SendiT provides courier quotes based on weight categories, offering transparent and competitive pricing for your shipping needs.
                </li>
                <li>
                  <strong className="text-color-tertiary">Real-time Package Tracking:</strong> Stay informed about the status of your packages with our real-time tracking feature.
                </li>
                <li>
                  <strong className="text-color-tertiary">User-Friendly Platform:</strong> Our user-friendly platform makes it easy to calculate shipping costs, book deliveries, and manage your shipments with ease.
                </li>
              </ul>
            </div>
          </div>
          <div className='image3'>
            <img src="https://cdn.pixabay.com/photo/2018/09/12/07/40/moving-3671446_1280.png" alt="Image 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
