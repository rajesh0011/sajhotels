import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const PackagesOffers = () => {
  const timelineData = [
    {
      id: 1,
      image: "/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg",
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      url: "/"
    },
    {
      id: 2,
      image: "/img/2151914738.jpg",
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      url: "/"
    },
    
  ];

  return (
    <>
      <div className="timeline">
        <ul>
          {timelineData.map((item) => (
            <li key={item.id}>
              <div className="content">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Offer 1"
                    width={500}
                    height={300}
                  />
                )}
                <h3 className='mt-3 offer-package-title'>{item.title}</h3>
                <p>{item.description}</p>
                <div className="know-more-btn-center mt-4">
                  <Link href={item.url} className="box-btn know-more p-2 bg_green mt-2 color-white text-uppercase">
                    Know More
                  </Link>
                </div>
              </div>
             
            </li>
          ))}
          <div style={{ clear: "both" }} />
        </ul>
      </div>
    </>
  )
}

export default PackagesOffers
