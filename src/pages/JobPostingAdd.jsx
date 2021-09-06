import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import HrmsTextInput from '../utilities/customFormControls/HrmsTextInput';
import CityService from '../services/cityService';
import WorkTimeService from '../services/workTimeService';
import WorkPlaceService from '../services/workPlaceService';
import JobPositionService from '../services/jobPositionService';
import HrmsSelect from '../utilities/customFormControls/HrmsSelect';
import JobPostingService from '../services/jobPostingService';

export default function JobPostingAdd() {

    const [isLoading, setLoading] = useState(true);

    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data));
    }, [])


    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.cityId
    }));

    cityOptions.unshift({
        key: -1,
        text: "Select a City",
        value: "Default Value"
    })

    const [workTimes, setWorkTimes] = useState([]);

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        workTimeService.getAll().then(result => setWorkTimes(result.data.data));
    }, [])

    const workTimeOptions = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.workTime,
        value: workTime.id
    }));

    workTimeOptions.unshift({
        key: -1,
        text: "Select Work Time",
        value: "Default Value"
    })

    const [workPlaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        let workPlaceService = new WorkPlaceService();
        workPlaceService.getAll().then(result => setWorkPlaces(result.data.data));
    }, [])

    const workPlaceOptions = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.workPlace,
        value: workPlace.id
    }));

    workPlaceOptions.unshift({
        key: -1,
        text: "Select Work Place",
        value: "Default Value"
    })

    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => {
            setJobPositions(result.data.data)
            setLoading(false);
        });
    }, [])

    const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobTitle,
        value: jobPosition.id
    }));

    jobPositionOptions.unshift({
        key: -1,
        text: "Select Job Title",
        value: "Default Value"
    })


    const initialValues = {
        cityId: "",
        deadlineDate: "",
        jobDescription: "",
        jobPositionId: "",
        maximumWage: 0,
        minimumWage: 0,
        numberOfOpenPositions: 1,
        workPlaceId: "",
        workTimeId: ""
    };

    const schema = Yup.object({
        cityId: Yup.number().required("City field is required."),
        deadlineDate: Yup.date().required("Deadline Date is required."),
        jobDescription: Yup.string().required("Job Description is required."),
        maximumWage: Yup.number().required("Maximum wage is required.").min(1),
        minimumWage: Yup.number().required("Minimum wage is required.").min(1),
        numberOfOpenPositions: Yup.number().required("Number of Open Positions is required.").min(1),
        workPlaceId: Yup.number().required("Work Place is required."),
        workTimeId: Yup.number().required("Work time is required."),
        jobPositionId: Yup.number().required("Job Title is required.")
    });

    if (isLoading) {
        return <div>Loading..</div>
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {

                    let today = new Date();
                    let dd = String(today.getDate()).padStart(2, '0');
                    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    let yyyy = today.getFullYear();

                    today = yyyy + '-' + mm + '-' + dd;

                    let jobPosting = {
                        city: { cityId: values.cityId },
                        createdAt: today,
                        deadlineDate : values.deadlineDate,
                        employer : { id: 7 },
                        isActive : "yes",
                        jobDescription : values.jobDescription,
                        jobPosition : { id : values.jobPositionId },
                        maximumWage : values.maximumWage,
                        minimumWage : values.minimumWage,
                        numberOfOpenPositions : values.numberOfOpenPositions,
                        workPlace : { id: values.workPlaceId },
                        workTime : { id: values.workTimeId }
                    }

                    console.log(jobPosting);

                    const jobPostingService = new JobPostingService();

                    jobPostingService.addJobPosting(jobPosting).then(result=>{
                        console.log(result.data.message);
                    })
                }}
                validator={() => ({})}
            >
                <Form className="ui form">
                    <HrmsTextInput name="jobDescription" label="Job Description" type="text"  placeholder="Job Description" />
                    <HrmsTextInput name="numberOfOpenPositions" label="Number of Open Positions" type="number" min="1" placeholder="Number Of Open Positions" />
                    <HrmsTextInput name="minimumWage" label="Minimum Wage" type="number" placeholder="Minimum Wage" />
                    <HrmsTextInput name="maximumWage" label="Maximum Wage" type="number" placeholder="Maximum Wage" />
                    <HrmsTextInput name="deadlineDate" label="Deadline Date" type="date" />
                    <HrmsSelect label="Select City" name="cityId" options={cityOptions} />
                    <HrmsSelect label="Select Work Time" name="workTimeId" options={workTimeOptions} />
                    <HrmsSelect label="Select Work Place" name="workPlaceId" options={workPlaceOptions} />
                    <HrmsSelect label="Select Job Title" name="jobPositionId" options={jobPositionOptions} />
                    {/* <FormField>
                        <Field name="jobDescription" placeholder="Job Description"></Field>
                        <ErrorMessage name="jobDescription" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="numberOfOpenPositions" placeholder="Number of Open Positions"></Field>
                        <ErrorMessage name="numberOfOpenPositions" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit">ADD</Button>
                </Form>
            </Formik>
        </div >
    )
}
