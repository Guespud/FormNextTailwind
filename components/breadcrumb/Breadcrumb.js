import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className="text-black font-sans m-3" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/">
            <a className="text-blue-400">Administracion</a>
          </Link>
        </li>
        <h1 className="m-2">/</h1>
        <li className="flex items-center">
          <Link href="Administrador">
            <a>Aprobación de Empresas</a>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
