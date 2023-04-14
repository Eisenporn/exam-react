import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SignelPage = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://exam.avavion.ru/api/services/${params.id}`)
      .then((r) => r.json())
      .then((data) => setItem(data.data));
  }, []);

  return (
    <div>
      <div>
        <img src={item.image_url} alt="Картинка" />
        <h2>{item.name}</h2>
        <p>{item.content}</p>
        <NavLink to={`/articles/${item.id}`}>Перейти</NavLink> 
        <br />
        <NavLink to={`/`}>Ввернуться на главную страницу  </NavLink>
      </div>
    </div>
  );
};

export default SignelPage;
