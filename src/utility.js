import axios from "axios";

export const AuthUserAPI = () => {
  console.log("called from utility js file");
};

export const AddParkingDetailsAPI = (data,callBackFunction) => {
  // axios.post(`http://localhost:9000/addParkingDetails`, data).then((res) => {
  //   console.log("Got reply from Add PARKING APP");
  // });

  try {
    axios.post(`http://localhost:9000/addParkingDetails`, data).then((res) => {
      debugger;
      if (res.status != "200") {
        throw Error(res.statusText);
      }
      callBackFunction();
      return res;
    });
  } catch (error) {
    debugger;
    console.log(error);
    return false;
  }
};

export const GetAllAPrkingDataAPI = () => {
  axios.get(`http://localhost:9000/getAllParking`).then((res) => {
    console.log(res.data);
  });
};
