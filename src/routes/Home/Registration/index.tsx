import CardText from "../../../components/CardText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página de inscrição" />
            <div className="dsflex">
            <Link to={'/promotion'}> <ButtonPrimary text="Ver Promoção" /> </Link>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
