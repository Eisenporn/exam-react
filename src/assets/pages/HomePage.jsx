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
    console.log(e.target.value)
    setForm((prevState) => {
      prevState = { ...prevState };

      prevState[e.target.name] = e.target.options[e.target.selectedIndex];

      return prevState;
    });
  };

  const send = (e) => {
    e.preventDefault();

    fetch("https://exam.avavion.ru/api/requests/create", {
      method: "POST",
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
    fetch("https://exam.avavion.ru/api/services")
      .then((r) => r.json())
      .then((data) => setItems(data.data));
  }, []);

  return (
    <div>
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
          <textarea
            onChange={(e) => onChangeForm(e)}
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <select onChange={(e)=>onChangeSelect(e)} name="service_id" id="">
            {items.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <button onClick={(e) => send(e)}>Отправить</button>
        </form>
      </div>

      <div className="items">
        {items.map((item) => {
          return (
            <div>
              <img src={item.image_url} alt="Картинка" />
              <h2>{item.name}</h2>
              <p>{item.content}</p>
              <NavLink to={`/articles/${item.id}`}>Перейти</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
