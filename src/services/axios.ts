import axios from "axios";

async function getPhoto(continente: string){


    var respFinal = await axios.get('http://pixabay.com/api/' ,{headers:{

    "Accept-Encoding": "gzip,deflate,compress"  

    }, params: {

    'key':'32109703-e24e76e2a55db4499708d50ee',
    'q': continente,
    'safesearch':true,
    'image_type':'photo'

    }}).then(function(resposta){

        return resposta.data["hits"][0]["previewURL"];

    }).catch(function(error){

        console.log(error);

    });   

    console.log(respFinal);

    return respFinal.html;

}

export default getPhoto