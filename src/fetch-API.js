const getAPI = function (lon, lat){

    if (lat !=="" & lon !==""){
        const url = `http://localhost:5000/pole_api/getPoleNearest?lat=${lat}&lon=${lon}`
        const fetchPromise = fetch(url);
        // fetchPromise
        //     .then(response => response.json())
        //     .then (text => {
        //         doStuff(text);
        //     })
        //     .catch(error => {
        //         console.log("catch error:", error);
        //     });
        return fetchPromise;

    }

}

// function doStuff(text) {
//     const pole = text[0];
//     if (pole['codigoapoyo'] != -1 ){
//         let pole_text = `apoyo: ${pole['codigoapoyo']} ---- ubicacion: ${pole['ubicacion']}`;
//         console.log('doStuff: '+ pole_text);
//         polePosition = pole_text;
//     }
// }

// let polePosition = '';

// export {polePosition};
export default getAPI