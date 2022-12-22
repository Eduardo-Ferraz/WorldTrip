import axios, { AxiosError } from "axios";

type IHit = {
  webformatURL: string;
  likes: number;

}
type IAxiosResponse = {
  hits: IHit[];
  total: number;
  totalHits: number;
}

async function getPhoto(continente: string){
    try {
      const response = await axios.get<IAxiosResponse>('http://pixabay.com/api/' ,{params: {

    'key':'32109703-e24e76e2a55db4499708d50ee',
    'q': continente,
    'safesearch':true,
    'image_type':'photo',
    'min_width':1500

    }})

     return response.data
  } catch(error) {
    console.log(error);
    return null
  } 
}

export default getPhoto