// import type { NextPage } from 'next'

// const Products = () => {
//   return (
//     <>
//       {/* <Head>
//         <title>Our Products - Lillja Farm</title>
//         <meta name="description" content="Explore Lillja Farm's selection of fresh poultry and eggs, including chickens and ducklings raised and processed on-site using humane and sustainable farming practices." />
//       </Head> */}
//       <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
//         <div className="py-12">
//           <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Our Products</h1>
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Chickens */}
//                 {/* Roosters */}
//                   <div>
//                     <img className="rounded-lg shadow-lg" src="/cockerel.png" alt="Rooster Chicken" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Rooster</h2>
//                     <ul className="list-disc list-inside mt-2 text-base text-gray-700">
//                       <ul>Prices vary depending on the market. Please visit our store for the latest prices.</ul>
//                     </ul>
//                   </div>


//                 {/* Hens */}
//                   <div>
//                     <img className="rounded-lg shadow-lg" src="/pullet.jpg" alt="Hen Chicken" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Hen</h2>
//                     <ul className="list-disc list-inside mt-2 text-base text-gray-700">
//                       <ul>Prices vary depending on the market. Please visit our store for the latest prices.</ul>
//                     </ul>
//                   </div>

//                 {/* Old Hens */}
//                 <div>
//                     <img className="rounded-lg shadow-lg" src="/oldhen.jpg" alt="Old Hen Chicken" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Old Hen</h2>
//                     <ul className="list-disc list-inside mt-2 text-base text-gray-700">
//                       <ul>Prices vary depending on the market. Please visit our store for the latest prices.</ul>
//                     </ul>
//                   </div>
              
//               {/* Eggs */}
//               <div>
//                 <img className="rounded-lg shadow-lg" src="/eggs.jpg" alt="Eggs (Tray of 30)" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-medium text-gray-900 mb-4">Eggs (Tray of 30)</h2>
//                   <ul className="list-disc list-inside mt-2 text-base text-gray-700">
//                     <ul>Prices vary depending on the market. Please visit our store for the latest prices.</ul>
//                   </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Products


import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from '../styles/Product.module.css';

const Products = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increase the speed option to control the transition speed
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '20%',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, // Disable pausing on hover

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderStyles = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    '& .slick-slide': {
      opacity: 0.5,
      transition: 'opacity 500ms ease',
      '&.slick-active': {
        opacity: 1,
      },
      '&:focus': {
        outline: 'none',
      },
    },
  };
  const handlePauseClick = () => {
    sliderRef.current?.slickPause();
  }
  
  const handleResumeClick = () => {
    sliderRef.current?.slickPlay();
  }
  
  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  }
  
  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  }
  return (
    <div className="{styles.max-w-screen-xl} px-4 sm:px-6 lg:px-8">
      <div 
          id='products'
          className="py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Products</h1>
        <p> Prices are depended on the size of the chicken. Please call or visit our store for more information.</p>
        <div className={styles.slider}>
          <Slider {...settings} ref ={sliderRef}>
            {/* Chickens */}
              {/* Roosters */}
              <div className="p-4">
                <img className={styles.productImage} src="/cockerel.png" alt="Rooster Chicken" />
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Rooster - (MKRT Price)</h2>
                  <ul className="list-disc list-inside mt-2 text-base text-gray-700">
                    <ul>Please visit our store for the latest prices.</ul>
                  </ul>
                </div>
              </div>
    
              {/* Hens */}
              <div className="p-4">
                <img className={styles.productImage} src="/pullet.jpg" alt="Hen Chicken" />
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Young Hen - (MKRT Price)</h2>
                  <ul className="list-disc list-inside mt-2 text-base text-gray-700">
                    <ul>Please visit our store for the latest prices.</ul>
                  </ul>
                </div>
              </div>
    
              {/* Old Hens */}
              <div className="p-4">
                <img className={styles.productImage} src="/oldhen.jpg" alt="Old Hen Chicken" />
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Fresh Processed Old Hen - (MKRT Price)</h2>
                  <ul className="list-disc list-inside mt-2 text-base text-gray-700">
                    <ul>Please visit our store for the latest prices.</ul>
                  </ul>
                </div>
              </div>
    
              {/* Eggs */}
              <div className="p-4">
                <img className={styles.productImage} src="/eggs.jpg" alt="Eggs (Tray of 30)" />
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Eggs (Tray of 30) - (MKRT Price)</h2>
                  <ul className="list-disc list-inside mt-2 text-base text-gray-700">
                    <li>Please visit our store for the latest prices.</li>
                  </ul>
                </div>
              </div>
          </Slider>
        </div>
      </div>
    </div>
  );    
};

export default Products;


