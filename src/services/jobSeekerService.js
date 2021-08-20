import axios from "axios";

export default class JobSeekerService{

    getAllJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseeker/getall");
    }

    getByFirstName(firstName){
        return axios.get("http://localhost:8080/api/jobseeker/getByFirstName?firstName" + firstName);
    }

    addJobSeeker(jobSeeker){
        return axios.post("http://localhost:8080/api/jobseeker/signup",jobSeeker);
    }

}