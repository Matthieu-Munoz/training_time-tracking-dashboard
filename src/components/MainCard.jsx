function MainCard() {
  return (
    <div className="box md:h-auto md:row-span-2 ">
      <div className="flex items-center h-2/3 rounded-lg bg-blue p-8">
        <img
          className="w-auto max-h-20 h-full rounded-full border-white border-2"
          src="src/assets/images/mm-profil.jpeg"
          alt="Matthieu's profil"
        />
        <div className="flex flex-col mx-3 text-2xl font-light">
          <span className="text-paleblue text-sm">Report for</span>Matthieu
          Munoz
        </div>
      </div>
      <div className="flex h-1/3 items-center justify-around p-1 text-desaturatedblue">
        <a href="#" className="">
          Daily
        </a>
        <a href="#" className="text-active">
          Weekly
        </a>
        <a href="#" className="">
          Monthly
        </a>
      </div>
    </div>
  );
}

export default MainCard;
