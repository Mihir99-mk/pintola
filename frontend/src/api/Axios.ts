import Axios, { AxiosInstance } from "axios";

export const axios:AxiosInstance =  Axios.create({
    baseURL: "http://localhost:1337/api",
    responseType: "json",
    withCredentials: true,
    headers: {
      Authorization:
        "Bearer 6e17a736a2304bf4b03d725d2c09a8a5ec149a316f48c7be8da9834c1ebda7b9bae9625aef784afc274b8c64aa3060171d871fe5856719a6cb1320e8aa3894c56cbaaef80fcda0f9e17c7a486c31ac1f1e77dabdbede92abea72c1a0a8e1134762c678dfca1f1ef10f21c606ea0ed75f0bd431605c1afb674eb66831dd62625e",
      "content-type": "application/json",
      Accept: "application/json",
    },
  })


