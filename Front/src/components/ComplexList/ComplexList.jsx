import { useEffect, useState } from "react";

import { Card } from "./Card/Card";
import { Loading } from "../Loading/Loading";

import { instance } from "../../axios/axiosConfig";

import classes from "./ComplexList.module.css";

const { container, card__container } = classes;

export const ComplexList = () => {
  const [complexRenderList, setComplexRenderList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    instance.get("complejo").then((res) => {
      setComplexRenderList(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={container}>
      <div className={card__container}>
        {!loading ? (
          complexRenderList?.map(
            (complex) =>
              complex.nombre && <Card complex={complex} key={complex.usuario} />
          )
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};
