import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import getInitials from "../../../utils/getInitials";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Results = ({ className, count, RegisteredVendors, ...rest }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        "https://www.api.oliveagro.org/api/merchant/list/all?status=ACTIVATED",
        config
      )
      .then((response) => {
        console.log("Registered vendors response:", response);
        setData(response.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  const [
    selectedRegisteredVendorIds,
    setSelectedRegisteredVendorIds,
  ] = useState([]);
  const avatarUrl = "/static/images/avatars/avatar_9.png";

  const handleSelectAll = (event) => {
    let newSelectedRegisteredVendorIds;

    if (event.target.checked) {
      newSelectedRegisteredVendorIds =
        data.merchants &&
        data.merchants.map((RegisteredVendor) => RegisteredVendor._id);
    } else {
      newSelectedRegisteredVendorIds = [];
    }

    setSelectedRegisteredVendorIds(newSelectedRegisteredVendorIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRegisteredVendorIds.indexOf(id);
    let newSelectedRegisteredVendorIds = [];

    if (selectedIndex === -1) {
      newSelectedRegisteredVendorIds = newSelectedRegisteredVendorIds.concat(
        selectedRegisteredVendorIds,
        id
      );
    }

    setSelectedRegisteredVendorIds(newSelectedRegisteredVendorIds);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox onChange={handleSelectAll} />
                </TableCell>
                <TableCell>Company name</TableCell>
                <TableCell>Company email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!data.merchants
                ? null
                : data.merchants.map((RegisteredVendor) => (
                    <TableRow
                      hover
                      key={RegisteredVendor._id}
                      selected={
                        selectedRegisteredVendorIds.indexOf(
                          RegisteredVendor._id
                        ) !== -1
                      }
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedRegisteredVendorIds.indexOf(
                              RegisteredVendor._id
                            ) !== -1
                          }
                          onChange={(event) =>
                            handleSelectOne(event, RegisteredVendor._id)
                          }
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <Box alignItems="center" display="flex">
                          <Avatar className={classes.avatar} src={avatarUrl}>
                            {getInitials(RegisteredVendor.companyName)}
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">
                            {RegisteredVendor.companyName}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{RegisteredVendor.email}</TableCell>
                      <TableCell>{RegisteredVendor.companyAddress}</TableCell>
                      <TableCell>{RegisteredVendor.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  PendingVendors: PropTypes.array.isRequired,
};

export default Results;
