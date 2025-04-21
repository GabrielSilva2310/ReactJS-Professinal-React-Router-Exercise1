import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CardText from "../../../components/CardText";

export default function HomeBody() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página inicial" />
            <div className="dsflex">
            <Link to={'/promotion'}> <ButtonPrimary text="Ver Promoção" /> </Link>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
