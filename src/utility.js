import axios from "axios";

export const AuthUserAPI = () => {
  console.log("called from utility js file");
};

export const AddParkingDetailsAPI = (data) => {
  console.log({ data });
  axios.post(`http://localhost:9000/addParkingDetails`, data).then((res) => {
    console.log("Got reply from Add PARKING APP");
  });
};

export const GetAllAPrkingDataAPI = () => {
  axios.get(`http://localhost:9000/getAllParking`).then((res) => {
    console.log(res.data);
  });
};
