import { useEffect, useState } from "react";
import Pedido from "./Pedido";

const Card = () => {
    const [cargarPedido, setCargarPedido] = useState(false);
    const [mostrarPedido, setMostrarPedido] = useState(true);
    const pedido = "Pizza de pepperoni";

    useEffect(() => {
        setTimeout(() => {
            setCargarPedido(true);
        }, 2000);
    }, []);

    const cambiarEstadoDePedido = () => {
        setMostrarPedido(!mostrarPedido);
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">Su pedido</p>
                    </div>
                </div>
            </div>
            {mostrarPedido ?
                !cargarPedido ? "Cargando...":<Pedido pedido={pedido}/>:
                "NO EXISTEN PEDIDOS EN CURSO"
            }
            <footer className="card-footer">
                <button className="button is-success" onClick={cambiarEstadoDePedido}>{mostrarPedido ? "Cancelar pedido": "Hacer pedido"}</button>
            </footer>
        </div>
    );
}

export default Card;
