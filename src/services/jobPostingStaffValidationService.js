import axios from "axios";

export default class JobPostingStaffValidationService{

    getAllUnverifiedJobPostings(){
        return axios.get("http://localhost:8080/api/jobpostingstaffvalidation/getall");
    }

    addUnverifiedJobPosting(unverifiedJobPosting){
        return axios.post("http://localhost:8080/api/jobpostingstaffvalidation/add",unverifiedJobPosting);
    }

    verifyJobPosting(id){
        return axios.put("http://localhost:8080/api/jobpostingstaffvalidation/verifyJobPosting?id=" + id);
    }

}