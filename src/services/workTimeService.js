import axios from "axios";

export default class WorkTimeService{

    getAll(){
        return axios.get("http://localhost:8080/api/worktime/getall");
    }

    add(workTime){
        return axios.post("http://localhost:8080/api/api/worktime/add",workTime);
    }

}