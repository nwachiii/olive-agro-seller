import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import data from '../../PendingVendors/data';

import cacDocument from 'assets/documents/cac-document-sample.jpg';
import driversLicense from 'assets/documents/drivers-license-sample.jpg';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '2em'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

// const VendorData = data;

function VendorInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className="">
        {/* {VendorData.map(vendorInfo => ( ))} */}
        <form className="d-flex p-3 flex-wrap direction-column">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                className="m-2"
                id="outlined-basic"
                variant="outlined"
                label="Company name"
                value="Kwame Ishola"
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
                value="kwak.seong.min@devias.io"
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
                value="34 Wildrose Lane"
                disabled
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                className="m-2 text-black"
                id="outlined-basic"
                variant="outlined"
                label="City"
                value="Kaduna"
                disabled
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <TextField
                fullWidth
                className="m-2 text-black80"
                id="outlined-basic"
                variant="outlined"
                label="Phone"
                value="08038128947"
                disabled
              />
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={cacDocument} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            CAC Document
          </h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={driversLicense} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            Director's ID
          </h5>
        </Grid>
      </Grid>
    </div>
  );
}

export default VendorInfo;
