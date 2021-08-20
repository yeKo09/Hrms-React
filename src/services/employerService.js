import axios from "axios";

export default class EmployerService{
    getAllEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall");
    }

    addEmployer(employer){
        return axios.post("http://localhost:8080/api/employer/signUp",employer);
    }
}