import { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import ReactPlayer from 'react-player'

import { Modal } from '~/components/modal'
import { useGlobalContext } from '~/context/global'

export function MarketplaceBanner() {
  const [showVideo, setShowVideo] = useState(false)
  const { setGlobalState } = useGlobalContext()
  return (
    <>
      {/* <div className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] bg-[url('https://www.barclays.co.uk/content/dam/lifestyle-images/personal/make-money-work-for-you/moneyverse_hub_girl_phone_blue_3_1.large.medium_quality.jpg')]"> */}
      <div className="flex w-full  bg-cover bg-center rounded-[20px] bg-[url('/bg-market.jpeg')]">
        <div className="w-full px-[30px] py-[30px] rounded-[20px] md:px-[64px] md:py-[56px] bg-[rgba(0,0,0,.4)]">
          <h2 className="mb-[14px] max-w-full text-xl font-bold leading-[32px] text-white md:w-[64%] md:text-[34px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
            Únete a la red más grande de Latinoamérica!
          </h2>
          <p className="mb-[40px] max-w-full text-base font-medium leading-[28px] text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
            La red GWT te provee todas las herramients necesarias para desarrollar tu propio negocio
            y generar ingresos desde tu celular.
          </p>

          <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
            <button
              onClick={() => setGlobalState({ showSignUp: true })}
              className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70"
            >
              Afiliación
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-between text-base font-medium align-middle text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
            >
              <BsPlayCircle className="mr-2" /> Ver Video
            </button>

            <Modal width={700} show={showVideo} close={() => setShowVideo(false)} padding={false}>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=f6GX7-fiJdM"
                width="100%"
                height={500}
                controls={false}
              />
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
