import axios from "axios";

export default class CvService{

    getAllCv(){
        return axios.get("http://localhost:8080/api/jobseekercv/getall");
    }

    getCvById(id){
        return axios.get("http://localhost:8080/api/jobseekercv/getcvbyid?id=" + id);
    }

    addCv(cv){
        return axios.post("http://localhost:8080/api/jobseekercv/addcv",cv);
    }

}