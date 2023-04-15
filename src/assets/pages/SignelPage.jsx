import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// import * as React from 'react';
// import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const SignelPage = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://flowers.avavion.ru/api/products/${params.id}`)
      .then((r) => r.json())
      .then((data) => setItem(data.data));
  }, []);

  if (item.quantity > 0) {
    return (
      <div className="single-main">
        <div className="signle-item">
          <div>
            <img src={item.preview_image} alt="Картинка" />
          </div>
          <div className="data-single">
            <div>
              <h2>{item.name}</h2>
              <p>Цена: {item.price}</p>
              <p>Количество: {item.quantity}</p>
              <p>Тип: {item.tag}</p>
            </div>
            <div>
              <NavLink to={`/`}>Ввернуться </NavLink>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="single-main">
        <div className="signle-item">
          <div>
            <img src={item.preview_image} alt="Картинка" />
          </div>
          <div className="data-single">
            <div>
              <h2>{item.name}</h2>
              <p>Цена: {item.price}</p>
              <p>Количество: {item.quantity}</p>
              <p>Тип: {item.tag}</p>
            </div>
            <div>
              <NavLink to={`/`}>Ввернуться </NavLink>
              <button>Оставить заявку</button>
            </div>
            <Alert severity="error">Ошибка отправления заявки. Проверьте правильность заполнения формы</Alert>
            <Alert severity="success">Заявка успешно отправлена</Alert>
          </div>
        </div>
      </div>
    );
  }
};

export default SignelPage;
