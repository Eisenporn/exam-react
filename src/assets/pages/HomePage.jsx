import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    email: "",
    full_name: "",
    message: "",
    service_id: 1,
  });

  const onChangeForm = (e) => {
    setForm((prevState) => {
      prevState = { ...prevState };

      prevState[e.target.name] = e.target.value;

      return prevState;
    });
  };

  const onChangeSelect = (e) => {
    console.log(e.target.value);
    setForm((prevState) => {
      prevState = { ...prevState };

      prevState[e.target.name] = e.target.options[e.target.selectedIndex];

      return prevState;
    });
  };

  const send = (e) => {
    e.preventDefault();

    fetch("https://flowers.avavion.ru/api/applications/create", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("https://flowers.avavion.ru/api/products")
      .then((r) => r.json())
      .then((data) => setItems(data.data));
  }, []);

  return (
    <div className="main">
      <div className="items">
        {items.map((item) => {
          if (item.quantity === 0) {
            return (
              <div className="item">
                <img src={item.preview_image} alt="Картинка" />
                <h2>{item.name}</h2>
                <div>
                  <p>{item.tag}</p>
                  <p>Количество: {item.quantity}</p>
                  <NavLink to={`/articles/${item.id}`}>Подать заявку</NavLink>
                </div>
              </div>
            );
          } else {
            return (
              <div className="item">
                <img src={item.preview_image} alt="Картинка" />
                <h2>{item.name}</h2>
                <div>
                  <p>{item.tag}</p>
                  <p>Количество: {item.quantity}</p>
                  <NavLink to={`/articles/${item.id}`}>Купить</NavLink>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="flower-form">
        <div>
          <h1>Если вашего товара нету в наличии, то вы можете отправить завяку</h1>
        </div>
        <div>
          <form action="" method="post">
            <input
              onChange={(e) => onChangeForm(e)}
              type="text"
              name="email"
              placeholder="Эл.почта"
            />
            <input
              onChange={(e) => onChangeForm(e)}
              type="text"
              name="full_name"
              placeholder="Мирак Фасон"
            />
            <input
              onChange={(e) => onChangeForm(e)}
              type="text"
              name="address"
              placeholder="Ваш адрес"
            />
            <textarea
              placeholder="Сообщение"
              onChange={(e) => onChangeForm(e)}
              name="message"
              cols="30"
              rows="10"
            ></textarea>
            <select onChange={(e) => onChangeSelect(e)} name="service_id">
              {items.map((item) => {
                if (item.quantity === 0)
                {
                  return <option value={item.id}>{item.name}</option>;
                }
                else return;
              })}
            </select>
            <button onClick={(e) => send(e)}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
