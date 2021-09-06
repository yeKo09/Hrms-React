import axios from "axios";

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobposting/getAllActiveJobPostings");
    }

    getAllJobPostingsWithDto(){
        return axios.get("http://localhost:8080/api/jobposting/getAllActiveJobPostingsWithDto")
    }

    getAllSortedByDateASC(){
        return axios.get("http://localhost:8080/api/jobposting/getAllSortedByDateASC");
    }

    getAllSortedByDateDESC(){
        return axios.get("http://localhost:8080/api/jobposting/getAllSortedByDateDESC");
    }

    getByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobposting/getByCompanyName?companyName=" + companyName);
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobposting/getById?id=" + id);
    }

    addJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobposting/addJobPosting",jobPosting);
    }

    deactivateJobPosting(id){
        return axios.put("http://localhost:8080/api/jobposting/deactivateJobPosting?id=" + id);
    }
}