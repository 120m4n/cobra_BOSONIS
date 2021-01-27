import Paho from "paho-mqtt/paho-mqtt";
var clientMQTT;

let parametrosMQTT = {
    hostname: '45.79.217.158',
    port: 8083,
    usuario: 'worker',
    contrasena: 'sing-burning-VILLAGE-soft'
};

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function conectarServerMQTT() {
    let clientId = "EnergisWEB_" + makeid(6);
    clientMQTT = new Paho.Client(parametrosMQTT.hostname, parametrosMQTT.port, clientId);

    // set callback handlers
    clientMQTT.onConnectionLost = onConnectionLost;
    clientMQTT.onMessageArrived = onMessageArrived;


    // connect the client
    clientMQTT.connect({
        onSuccess: onConnect,
        userName: parametrosMQTT.usuario,
        password: parametrosMQTT.contrasena,
        keepAliveInterval: 300
    });
}

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    //Topico Subscrito ---Escucho
    // for (var i = 0; i < topicMQTT.length; i++) {
    clientMQTT.subscribe("EnerGisWEB");
    // }
    // var objEnviar = {Confirmacion: "OK"};
    // var myJSONEnviar = JSON.stringify(objEnviar);
    // enviarMensajeMQTT(myJSONEnviar.toString(), topicEnviar);
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    let jsonMensaje = JSON.parse(message.payloadString);
    console.log(jsonMensaje);
    // codigoElemento = jsonMensaje.CodigoApoyo;
    // getInformacionElemento();
}

function enviarMensajeMQTT(mensaje, topicEnviar) {
    let message = new Paho.Message(mensaje);
    message.destinationName = topicEnviar;
    clientMQTT.send(message);
}

function desconectarServer() {
    if (clientMQTT !== null) {
        clientMQTT.disconnect();
    }
}


export {clientMQTT, conectarServerMQTT, enviarMensajeMQTT} ;

