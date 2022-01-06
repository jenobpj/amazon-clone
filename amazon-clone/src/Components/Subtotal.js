import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const navigation = () => {
    navigate("/payment");
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order a contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={navigation}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
