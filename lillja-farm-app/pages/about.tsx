import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About - Lillja Farm</title>
        
        <meta name="description" content="Learn about Lillja Farm and our commitment to providing fresh, high-quality poultry and eggs to the Houston community." />
      </Head>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          id='about'
          className="py-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Lillja Farm</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img className="rounded-lg shadow-lg" src="/lillja.jpg" alt="Lillja Farm" />
            </div>
            
            <div>
              <p className="text-xl leading-7 text-gray-500">
                At Lillja Farm, we are committed to providing fresh, high-quality poultry and eggs to the Houston community. 
                Our locally raised chickens are processed on-site using humane and sustainable methods to ensure that our customers receive only the best products.
              </p>
              <br />
              <p className="mt-4 text-xl leading-7 text-gray-500">
                  Our farm has been in operation since 2000, and we take pride in the quality of our
                  products and our commitment to sustainable farming practices. 
                  We believe in the importance of knowing where your food comes from and how it is produced, 
                  which is why we are transparent about our farming practices and welcome visitors to our farm. 
                  We are also dedicated to promoting the welfare of animals and the health of our planet by using eco-friendly farming methods.
              </p>
              <br />
              <p className="mt-4 text-xl leading-7 text-gray-500">
                  Whether you are a home cook looking for the freshest, most delicious eggs or you are searching for delicious processed chickens, 
                  Lillja Farm has you covered. Contact us today to learn more about our products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
