export function BlogBanner() {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] my-4 md:px-[64px] md:py-[56px] bg-[url('https://img.freepik.com/free-photo/globe-digital-grid-futuristic-background_53876-129730.jpg?w=1380&t=st=1682312680~exp=1682313280~hmac=8d95ba7f960db8d613b87ba75d4f447230238987a13ccd38f569e83a0997ca21')]">
      <div className="w-full">
        <h2 className="mb-[14px] max-w-full text-2xl font-bold leading-[32px] text-white md:w-[64%] md:text-[34px] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Únete a la red más grande de Latinoamérica!
        </h2>
        <p className="mb-[40px] max-w-full text-base font-medium leading-[28px] text-[#ebebeb] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          La red GWT te provee de los mejores artículos del momento, con los cuales podrás
          desarrollar tu propio negocio y generar mejores ingresos.
        </p>
        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-primary-500 linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Únete
          </button>
        </div>
      </div>
    </div>
  )
}
