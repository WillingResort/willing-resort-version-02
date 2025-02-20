import HeroSlider from "@/components/home/hero-slider";

export async function generateMetadata() {
  return {
    title: "Home | Willing Resort",
    description: "Welcome to Willing Resort, an enchanting getaway in central Bhutan.",
  };
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroSlider />

      {/* Willing resort fact sheet */}
      <div className="container mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px] mx-auto px-4 my-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
            Experience the Heart of Bhutan in Trongsa
          </h1>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] text-center">
              Nestled in the eastern Himalayas, Trongsa is a land of breathtaking landscapes, rich history, and deep spiritual heritage. As the ancestral home of Bhutan’s monarchy, it is home to the iconic Trongsa Dzong, a symbol of the nation’s unity under the Wangchuck dynasty.
              Amidst pristine forests, meandering rivers, and traditional Bhutanese architecture, Willing Resort offers an authentic retreat where ancient wisdom meets modern comforts. Immerse yourself in Bhutan’s timeless traditions, reconnect with nature, and experience the essence of the last Shangri-La.
            </p>
          </div>
          <button className="outline outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
            Explore More
          </button>
        </div>
      </div>

      {/* Explore Willing Resort  */}
      <div className="container mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px]  mx-auto px-4 h-[100vh] bg-[url('https://willingresort.github.io/assests-hosting/images/explore-willing.jpg')] bg-cover bg-bottom flex flex-col justify-end relative">
      </div>
      <div className="container mx-auto mt-8 flex flex-col items-center">
        <h1 className="font-normal text-heading tracking-heading uppercase text-center">
          The Story of Willing Resort
        </h1>
        <p className="w-[90%] mt-5 text-center">
          Perched on a serene hilltop in the heart of Trongsa Valley, Willing Resort is a luxurious sanctuary where rustic charm meets modern elegance. Named after the ancient village of Yueling—where Lam Ngagi Wangchuk built the first meditation temple in 1543—our resort is deeply rooted in Bhutan’s spiritual heritage.
          Just a 15-minute drive from the historic Trongsa Dzong and Ta Dzong museum, the resort offers breathtaking views of Trongsa’s iconic dzongs and the tranquil Mangdi River. Here, guests are welcomed with warm Bhutanese hospitality, ensuring a stay of comfort, peace, and rejuvenation.
          Designed to blend traditional Bhutanese artistry with modern indulgence, Willing Resort is surrounded by lush gardens and stunning landscapes, offering a tranquil escape from the outside world. More than just a retreat, it is a place to restore balance—where nature, culture, and luxury come together to create a whole new experiences.
        </p>
        <button className="outline w-[300px] outline-1 mt-5 outline-black px-[80px] py-[15px] uppercase  hover:text-white hover:bg-black hover:outline-none">
          Explore
        </button>
      </div>

      {/* Our Suite Section */}
      <div className="container mt-5 sm:mt-[150px] mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:pr-[60px] h-[70vh]:">
            <img className="h-[500px] w-[100%]" style={{ objectFit: 'cover', objectPosition: 'top' }} src="https://willingresort.github.io/assests-hosting/images/rooms/rooms.jpg" alt="" />
          </div>
          <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center">
            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
              Scenic Suite Stay
            </h1>
            <p className="mt-5 text-center">
              Escape to Willing Resort, where Bhutanese design meets modern comfort. Choose from three suites: Junior Suite, with mountain views; Deluxe Suite, featuring a balcony and soaking tub; or Luxury Cottage, offering a fireplace, spacious living, and breathtaking panoramas            </p>
            <button className="outline mt-10 outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
              Explore Our Suites
            </button>
          </div>
        </div>
      </div>

      {/* Dinnining Experience */}
      <div className="container mt-5 sm:mt-[150px]  mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
        <div className="flex flex-col-reverse  sm:flex-row flex-wrap w-full">
          <div className="w-full sm:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center">
            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
              Authentic Bhutanese Dining
            </h1>
            <p className="mt-5 text-center">
              Experience a delightful culinary journey at Willing Resort, where Bhutanese flavors blend with international cuisine. Enjoy stunning valley views while savoring signature dishes like our Blueberry Cake, made from wild local berries. Fresh, farm-to-table ingredients and cozy ambiance await.            </p>
            <button className="outline mt-10 outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
              Explore More
            </button>
          </div>
          <div className="w-full sm:w-[70%] sm:pl-[60px]">
            <img className="h-[500px] w-[100%]" style={{ objectFit: 'cover', objectPosition: 'bottom' }} src="https://willingresort.github.io/assests-hosting/images/dinning/dinning.jpg" alt="" />
          </div>
        </div>
      </div>


      {/* Travel Information */}
      <div className="container mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px] mx-auto px-4 sm:px-0 md:px-0 lg:px-0">
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-[60%] lg:w-[60%] pr-0 sm:pr-6">
            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase">
              Travel Information
            </h1>
            <p className="mt-5">
              Druk Air and Bhutan Airlines are the only airlines operating flights to and from Paro International Airport. Nestled amidst the Himalayan mountains, Paro International Airport is renowned for being one of the most challenging airports to land at, offering a unique and breathtaking arrival experience.
            </p>
            {/* Time line of tavel information */}
            <div className="mt-6">
              {/* Item 1 */}
              <div className="flex gap-x-3 relative">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#22232289]">
                  <div className="relative z-10 bg-[#222322] text-white rounded-full size-7 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor" d="M8.16 4a3 3 0 0 0-2.604 1.512L3.563 9H2.4a.4.4 0 0 0-.4.4v.475a.8.8 0 0 0 .606.777l.024.005a5 5 0 0 0-.457 2.79l.725 5.801A2 2 0 0 0 4.883 21H5a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2h.117a2 2 0 0 0 1.985-1.752l.725-5.8a5 5 0 0 0-.457-2.79l.024-.006A.8.8 0 0 0 22 9.875V9.4a.4.4 0 0 0-.4-.4h-1.163l-1.993-3.488A3 3 0 0 0 15.84 4zm10.262 5.504l-1.714-3A1 1 0 0 0 15.839 6H8.161a1 1 0 0 0-.869.504l-1.714 3A1 1 0 0 0 6.446 11h11.108a1 1 0 0 0 .868-1.496M5 15.039v-.7a.5.5 0 0 1 .738-.44l2.742 1.48c.373.202.218.769-.206.752l-2.314-.093A1 1 0 0 1 5 15.04Zm14-.7v.7a1 1 0 0 1-.96 1l-2.314.092c-.424.017-.58-.55-.206-.752l2.742-1.48a.5.5 0 0 1 .738.44" />
                      </g>
                    </svg>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0 p-2 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                    Paro International Airport to Willing Resort
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Chargeable car transfer directly from Paro International Airport to Willing Resort in Trongsa (6:00 hours).
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item 2 */}
              <div className="flex gap-x-3 relative">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#22232289]">
                  <div className="relative z-10 bg-[#222322] rounded-full size-7 text-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor" d="M8.16 4a3 3 0 0 0-2.604 1.512L3.563 9H2.4a.4.4 0 0 0-.4.4v.475a.8.8 0 0 0 .606.777l.024.005a5 5 0 0 0-.457 2.79l.725 5.801A2 2 0 0 0 4.883 21H5a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2h.117a2 2 0 0 0 1.985-1.752l.725-5.8a5 5 0 0 0-.457-2.79l.024-.006A.8.8 0 0 0 22 9.875V9.4a.4.4 0 0 0-.4-.4h-1.163l-1.993-3.488A3 3 0 0 0 15.84 4zm10.262 5.504l-1.714-3A1 1 0 0 0 15.839 6H8.161a1 1 0 0 0-.869.504l-1.714 3A1 1 0 0 0 6.446 11h11.108a1 1 0 0 0 .868-1.496M5 15.039v-.7a.5.5 0 0 1 .738-.44l2.742 1.48c.373.202.218.769-.206.752l-2.314-.093A1 1 0 0 1 5 15.04Zm14-.7v.7a1 1 0 0 1-.96 1l-2.314.092c-.424.017-.58-.55-.206-.752l2.742-1.48a.5.5 0 0 1 .738.44" />
                      </g>
                    </svg>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow p-2 py-0">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                    Bumthang Domestic Airport to Willing Resort
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Guests can take a scheduled domestic flight from Paro International Airport to Bumthang Domestic Airport (35 minutes). From Bumthang, we can arrange a chargeable car transfer to Willing Resort in Trongsa (1:30 hours).
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
            </div>
          </div>
          <div className="w-full sm:w-[40%] lg:w-[40%] pt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.695358016261!2d90.49274577626448!3d27.509848276296392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375f23aaf28f68a9%3A0xa76d1198c409bb3c!2sWilling%20Resort!5e0!3m2!1sen!2sbt!4v1739265804295!5m2!1sen!2sbt"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 5 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Adventures & Activities */}
      <div className="container mt-5 sm:mt-[150px] mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[70%] sm:pr-[60px] h-[70vh]:">
            <img className="h-[500px] w-[100%]" style={{ objectFit: 'cover', objectPosition: 'top' }} src="https://willingresort.github.io/assests-hosting/images/adventures-and-activities/IMG_5758.jpeg" alt="" />
          </div>
          <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center">
            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
              Adventures & Activities
            </h1>
            <p className="mt-5 text-center">
              Embark on trails with stunning views, such as Singye Thang from Dorji Goenba, and experience the breathtaking beauty of Gangkar Phunsum and Semjee Village. Immerse yourself in the serene landscapes, captivating mountain vistas, and the tranquil charm of these picturesque destinations, offering a perfect escape into nature's splendor.
            </p>
            <button className="outline mt-10 outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Willing Waterfall Cafe */}
      <div className="container mt-5 sm:mt-[150px]  mx-auto px-4 sm:px-[40px] md:px-[40px] lg:px-[70px]">
        <div className="flex flex-col-reverse  sm:flex-row flex-wrap w-full">
          <div className="w-full sm:w-[30%] p-6 sm:border-y-1.5 sm:border-y-textColor flex flex-col justify-center items-center">
            <h1 className="font-normal text-heading tracking-heading text-secondaryColor uppercase text-center">
              Willing Waterfall Cafe
            </h1>
            <p className="mt-5 text-center">
              Set against a breathtaking 50-meter waterfall, our café is a must-visit along Bhutan’s east-west highway. Just 15 minutes from Willing Resort, it offers fresh coffee, local teas, and light meals, providing a perfect stop between Trongsa and Bumthang
            </p>
            <button className="outline mt-10 outline-1 outline-textColor px-6 py-2 uppercase text-secondaryColor hover:text-white hover:bg-secondaryColor hover:outline-none">
              Explore More
            </button>
          </div>
          <div className="w-full sm:w-[70%] sm:pl-[60px]">
            <img className="h-[500px] w-[100%]" style={{ objectFit: 'cover', objectPosition: 'bottom' }} src="https://willingresort.github.io/assests-hosting/images/cafe/DSC_3633.jpg" alt="" />
          </div>
        </div>
      </div>

      {/*  Video Section */}
      <div className="w-full mt-5 sm:mt-[100px] md:mt-[100px] lg:mt-[100px]">
        <video className=" h-[90vh] object-cover" width="100%" autoPlay muted loop controls src="https://willingresort.github.io/assests-hosting/promotion.MOV"></video>
      </div>

    </div>
  );
}
