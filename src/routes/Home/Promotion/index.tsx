import CardText from "../../../components/CardText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página de promoção" />
            <div className="dsflex">
            <Link to={'/registration'}> <ButtonPrimary text="Quero participar" /> </Link>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
