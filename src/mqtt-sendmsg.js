import Paho from "paho-mqtt/paho-mqtt";

function enviarMensajeMQTT(mensaje, topicEnviar) {
    let message = new Paho.Message(mensaje);
    message.destinationName = topicEnviar;
    clientMQTT.send(message);
}

export default enviarMensajeMQTT;
