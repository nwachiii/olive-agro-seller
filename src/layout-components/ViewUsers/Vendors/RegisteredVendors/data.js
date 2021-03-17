import { useState, useEffect } from "react";
import axios from "axios";

const RegisteredVendorData = () => {
  // state to store results from endpoints
  const [registeredVendors, setRegisteredVendors] = useState(undefined);
  const [count, setCount] = useState(null);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //fetch all pending vendors with useEffect hook!
  useEffect(() => {
    let vendorData;
    let vendorCount;
    axios
      .get(
        "https://www.api.oliveagro.org/api/merchant/list/all?status=ACTIVATED",
        config
      )
      .then((response) => {
        const res = response.data.merchants.map((merchant, index) => merchant);
        // const res = response.data;
        vendorData = res;
        vendorCount = response.data.count;
        //map all category details
        console.log("Registered vendors from endpoints", res);
        console.log("count from endpoints", vendorCount);
      })
      .catch((err) => {
        console.log(err);
      });
    setRegisteredVendors(vendorData);
    setCount(vendorCount);
  }, [registeredVendors, config, count]);

  // return pendingVendors;
};

export default RegisteredVendorData;

// import { v4 as uuid } from "uuid";

// export default [
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Lagos",
//       street: "2849 Fulton Street",
//     },
//     avatarUrl: "/static/images/avatars/avatar_3.png",
//     createdAt: 1555016400000,
//     companyEmail: "ekaterina.dambo@devias.io",
//     companyName: "Ekaterina Dambo",
//     phoneNumber: "08123344556",
//     status: "Expired",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },

//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Benin",
//       street: "1865  Pleasant Hill Road",
//     },
//     avatarUrl: "/static/images/avatars/avatar_4.png",
//     createdAt: 1555016400000,
//     companyEmail: "dayo.yu@devias.io",
//     companyName: "Dayo Odunlade",
//     phoneNumber: "09045567684",
//     status: "Active",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Sokoto",
//       street: "4894  Lakeland Park Drive",
//     },
//     avatarUrl: "/static/images/avatars/avatar_2.png",
//     createdAt: 1555016400000,
//     companyEmail: "alex.richardson@devias.io",
//     companyName: "Alex Richardson",
//     phoneNumber: "08033425567",
//     status: "Expired",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Anambra",
//       street: "4158  Hedge Street",
//     },
//     avatarUrl: "/static/images/avatars/avatar_5.png",
//     createdAt: 1554930000000,
//     companyEmail: "anjola.kosofe@devias.io",
//     companyName: "Anjola Kosofe",
//     phoneNumber: "09082156378",
//     status: "Active",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Delta",
//       street: "75 Anthony avenue",
//     },
//     avatarUrl: "/static/images/avatars/avatar_6.png",
//     createdAt: 1554757200000,
//     companyEmail: "clara.gloria@devias.io",
//     companyName: "Clara Gloria",
//     phoneNumber: "09072456547",
//     status: "Expired",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Ibadan",
//       street: "31 Oke-Ado Road",
//     },
//     avatarUrl: "/static/images/avatars/avatar_1.png",
//     createdAt: 1554670800000,
//     companyEmail: "adam.denis@devias.io",
//     companyName: "Adam Denis",
//     phoneNumber: "08158602340",
//     status: "Active",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Abeokuta",
//       street: "21 Ambode Drive",
//     },
//     avatarUrl: "/static/images/avatars/avatar_7.png",
//     createdAt: 1554325200000,
//     companyEmail: "avam.kwame@devias.io",
//     companyName: "Avam Kwame",
//     phoneNumber: "08159072647",
//     status: "Active",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Kano",
//       street: "18  Hickory Ridge Drive",
//     },
//     avatarUrl: "/static/images/avatars/avatar_8.png",
//     createdAt: 1523048400000,
//     companyEmail: "emilee.simchenko@devias.io",
//     companyName: "Emilee Simchenko",
//     phoneNumber: "07026611654",
//     status: "Active",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Kaduna",
//       street: "34  Wildrose Lane",
//     },
//     avatarUrl: "/static/images/avatars/avatar_9.png",
//     createdAt: 1554702800000,
//     companyEmail: "kwak.seong.min@devias.io",
//     companyName: "Kwame Ishola",
//     phoneNumber: "08038128947",
//     status: "Expired",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
//   {
//     id: uuid(),
//     companyAddress: {
//       state: "Abuja",
//       street: "38 Lamberts Branch Road",
//     },
//     avatarUrl: "/static/images/avatars/avatar_10.png",
//     createdAt: 1522702800000,
//     companyEmail: "merrile.bridget@devias.io",
//     companyName: "Merrile Bridget",
//     phoneNumber: "08013017894",
//     status: "Expired",
//     cacDocument: "../../../../assets/documents/cac-document-sample.jfif",
//     directorsID: "../../../../assets/documents/drivers-license-sample.jpg",
//   },
// ];
