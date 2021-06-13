import NavBot from "../components/Navigasi/NavBotCart";
import { useSelector } from "react-redux";
import CartStore from "../components/Cart/CartStore";
import style from "../styles/cart.module.css";
import { useState } from "react";
import { useEffect } from "react";

const CartRawToSort = (cart) => {
  const data = new Object();
  cart.length > 0 &&
    cart.map((item) => {
      const { store } = item.product;
      if (store in data) {
        data[store] = [...data[store], item];
      } else {
        data[store] = [item];
      }
    });
  return { data };
};

const cart = () => {
  const CartList = useSelector((state) => state.cart.cartList);
  const { data } = CartRawToSort(CartList);
  const [isSelectAll, setIselectAll] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [checkoutItem, setCheckoutItem] = useState({});

  useEffect(() => {
    setCheckoutItem(getSelectItem(selectItem))
  }, [isSelectAll, selectItem, CartList]);

  const getSelectItem = (items) => {
    if (items.length === 0) {
      return {};
    } else {
      return CartList.filter((item) => {
        if(items.length <= 0){
          return false
        }else if (items.includes(item.product.id)){
          return true
        }
        return false
      });
    }
  };

  const onCheck = (e) => {
    let { id, value, checked } = e.target;
    if (id === "selectAll") {
      setIselectAll(checked);
      if (checked) {
        setSelectItem(CartList.map((item) => item.product.id));
        setCheckoutItem(CartList);
      } else {
        setCheckoutItem({});
        setSelectItem([]);
      }
    } else if (id === "itemCheck") {
      value = Number(value);
      checked
        ? setSelectItem((prev) => {
            return [...prev, value];
          })
        : setSelectItem((prev) => prev.filter((item) => item !== value));
    } else if (id === "store-check") {
      checked
        ? setSelectItem((prev) => {
            const temp = CartList.map((item) => {
              const { id, store } = item.product;
              if (store === value) {
                return id;
              }
            });
            return [...prev, ...temp.filter(e => !isNaN(e))];
          })
        : setSelectItem((prev) => {
            const temp = CartList.map((item) => {
              const { id, store } = item.product;
              if (store === value) {
                return id;
              }
            });
            return prev.filter((item) => !temp.includes(item));
          });
    }
  };
  return (
    <>
      <div className={style.Container}>
        <div className={style.all}>
          <label>
            <input
              type="checkbox"
              checked={isSelectAll}
              id={"selectAll"}
              onChange={(e) => onCheck(e)}
              className={style.check}
            />
            Select All Product
          </label>
        </div>
        {Object.keys(data).map((key) => {
          return (
            <CartStore
              key={key}
              store={key}
              cartList={data[key]}
              selectItem={selectItem}
              onCheck={onCheck}
            />
          );
        })}
      </div>
      <NavBot cartList={checkoutItem} />
    </>
  );
};

export default cart;
