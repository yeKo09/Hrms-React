import axios from "axios";

export default class WorkPlaceService{

    getAll(){
        return axios.get("http://localhost:8080/api/workplace/getall");
    }

    add(workPlace){
        return axios.post("http://localhost:8080/api/api/workplace/add",workPlace);
    }

}