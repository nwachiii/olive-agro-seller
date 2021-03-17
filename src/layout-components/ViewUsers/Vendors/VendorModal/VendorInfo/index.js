import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import data from "../../PendingVendors/data";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "2em",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function VendorInfo({ vendorId }) {
  const [vendor] = data.filter((vendor) => vendor._id === vendorId);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className="">
        <form className="d-flex p-3 flex-wrap direction-column">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                className="m-2"
                id="outlined-basic"
                variant="outlined"
                label="Company name"
                value={vendor.companyName}
                disabled
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                className="m-2 text-black80"
                id="outlined-basic"
                variant="outlined"
                label="Company email"
                value={vendor.email}
                disabled
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} className="mt-3">
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                className="m-2"
                id="outlined-basic"
                variant="outlined"
                label="Address"
                value={vendor.companyAddress}
                disabled
              />
            </Grid>
            {/* <Grid item xs={12} lg={6}> comment this grid out
              <TextField
                fullWidth
                className="m-2 text-black"
                id="outlined-basic"
                variant="outlined"
                label="City"
                value={vendor.companyAddress.state}
                disabled
              />
            </Grid> end of commenting grid */}
            <Grid item xs={12} lg={12}>
              <TextField
                fullWidth
                className="m-2 text-black80"
                id="outlined-basic"
                variant="outlined"
                label="Phone"
                value={vendor.phoneNumber}
                disabled
              />
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={vendor.cac} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            CAC Document
          </h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={vendor.ID.documentUrl} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            Director's ID
          </h5>
        </Grid>
      </Grid>
    </div>
  );
}

export default VendorInfo;

// import React from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import data from "../../PendingVendors/data";
// import { TextField } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//       padding: "2em",
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//   })
// );

// function VendorInfo({ vendorId }) {
//   const [vendor] = data.filter((vendor) => vendor.id === vendorId);
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={4} className="">
//         <form className="d-flex p-3 flex-wrap direction-column">
//           <Grid container spacing={4}>
//             <Grid item xs={12} lg={6}>
//               <TextField
//                 fullWidth
//                 className="m-2"
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="Company name"
//                 value={vendor.companyName}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <TextField
//                 fullWidth
//                 className="m-2 text-black80"
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="Company email"
//                 value={vendor.companyEmail}
//                 disabled
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={4} className="mt-3">
//             <Grid item xs={12} lg={6}>
//               <TextField
//                 fullWidth
//                 className="m-2"
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="Address"
//                 value={vendor.companyAddress.street}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} lg={6}>
//               <TextField
//                 fullWidth
//                 className="m-2 text-black"
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="City"
//                 value={vendor.companyAddress.state}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} lg={12}>
//               <TextField
//                 fullWidth
//                 className="m-2 text-black80"
//                 id="outlined-basic"
//                 variant="outlined"
//                 label="Phone"
//                 value={vendor.phoneNumber}
//                 disabled
//               />
//             </Grid>
//           </Grid>
//         </form>
//         <Grid item xs={12} sm={12}>
//           <img className="card-img" src={vendor.cacDocument} alt="" />
//           <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
//             CAC Document
//           </h5>
//         </Grid>
//         <Grid item xs={12} sm={12}>
//           <img className="card-img" src={vendor.directorsID} alt="" />
//           <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
//             Director's ID
//           </h5>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default VendorInfo;
