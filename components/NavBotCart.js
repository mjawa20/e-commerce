import Container from "@material-ui/core/Container";
import nav from "../styles/navbotcart.module.css";

const NavBotCart = () => {
  return (
    <div className={nav.container}>
      <Container>
        <div className={nav.content}>
          <div className={nav.price}>
              <p>Total</p>
              <span>Rp500.000</span>
          </div>
          <button>Checkout (1)</button>
        </div>
      </Container>
    </div>
  );
};

export default NavBotCart;
