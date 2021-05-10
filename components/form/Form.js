const form = () => {
  const Datos = [
    {
      name: "Rut PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/rut.svg",
    },
    {
      name: "Logo PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/logo.svg",
    },
    {
      name: "Acta de constitución PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/acta.svg",
    },
    {
      name: "Cámara de comercio PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/camara.svg",
    },
    {
      name: "Otro Documento PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/otro.svg",
    },
  ];

  return (
    <div>
      <h2 className="font-sans text-xl text-center font-bold m-6">
        DOCUMENTOS CARGADOS
      </h2>
      {Datos.map((data, i) => {
        return (
          <div className="grid grid-cols-3" key={i}>
            <div className="m-6 grid col-span-2">
              <h1 className="font-sans sm:text-sm md:text-lg xl:text-lg lg:text-lg font-medium">{data.name}</h1>
            </div>
            <div className="m-2 grid col-span-1 text-right">
              <a href={data.url} target="_blank">
                <img src={data.image}></img>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default form;
