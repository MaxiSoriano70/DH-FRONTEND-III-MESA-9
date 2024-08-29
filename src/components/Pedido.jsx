import { useEffect } from "react";

const Pedido = (props) => {
    useEffect(() => {
        return () => {
            console.log("ADIOS PEDIDO!!!");
        };
    }, []);
    return (
        <div className="content">
            {props.pedido}
            <br />
            <time>11:09 PM - 1 Jan 2016</time>
        </div>
    )
}

export default Pedido;
