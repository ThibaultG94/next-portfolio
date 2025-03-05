import "./styles/index.scss";

export const metadata = {
  title: "La Montagne ça vous gagne",
  description:
    "Découvrez la beauté des montagnes et la sérénité qu'elles procurent",
};

export default function MontagneLayout({ children }) {
  return <div className="montagne-container">{children}</div>;
}
