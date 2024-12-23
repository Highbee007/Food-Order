import { Fragment, useState } from "react";
import Header from "./component/Header/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header show={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
