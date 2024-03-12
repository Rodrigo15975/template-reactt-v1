const Data = () => {
  return (
    <>
      <div>
        <div className="text-center border-b text-primary text-xl font-robotoSlab_500 py-[1rem]">
          <p>Jhon Smith</p>
        </div>
        <div className="flex flex-col text-center min-h-[45vh] justify-evenly px-[1rem] py-[1rem] pb-[2rem]">
          <p className="text-secondary/90 text-[1rem] gap-1 flex flex-col font-robotoSlab_500 ">
            <span className="text-primary/80  text-[1.1rem] font-robotoSlab_700">
              DNI
            </span>
            70537447
          </p>
          <p className="text-secondary/90 text-[1rem] font-robotoSlab_500 flex flex-col">
            <span className="text-primary/80 text-[1.1rem] font-robotoSlab_700">
              Teléfono
            </span>
            931022090
          </p>
          <p className="text-secondary/90 text-[1rem] font-robotoSlab_500 flex flex-col">
            <span className="text-primary/80 text-[1.1rem] font-robotoSlab_700">
              Apellido Paterno
            </span>
            Rumpler
          </p>
          <p className="text-secondary/90 text-[1rem] font-robotoSlab_500 flex flex-col">
            <span className="text-primary/80 text-[1.1rem] font-robotoSlab_700">
              Apellido Materno
            </span>
            Braun
          </p>
          <p className="text-secondary/90 text-[1rem] font-robotoSlab_500 flex flex-col">
            <span className="text-primary/80 text-[1.1rem] font-robotoSlab_700">
              Email
            </span>
            Rodrigorumpler@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Data;
