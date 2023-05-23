import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function AtribuirUsuario() {
    let {idCompetencia} = useParams();
    let {idUsuario} = useParams();
    useEffect(() => {
        axios.put(`${BACKEND_URL}/usuario/${idUsuario}/competencia/${idCompetencia}`).then((response) => {
        });
    }, []);
  return (
    <h1>Usuario Atribuido Com sucesso!!</h1>
  )
}

export default AtribuirUsuario