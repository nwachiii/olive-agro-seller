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
  // TablePagination,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import getInitials from "../../../utils/getInitials";
import SimpleModal from "../Modal/Modal";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Results = ({ className, PendingVendors, ...rest }) => {
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
        "https://www.api.oliveagro.org/api/merchant/list/all?status=PENDING",
        config
      )
      .then((response) => {
        console.log("response", response);
        setData(response.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  console.log("my data", data);

  const classes = useStyles();
  const [selectedPendingVendorIds, setSelectedPendingVendorIds] = useState([]);
  const avatarUrl = "/static/images/avatars/avatar_9.png";

  const handleSelectAll = (event) => {
    let newSelectedPendingVendorIds;

    if (event.target.checked) {
      newSelectedPendingVendorIds =
        PendingVendors &&
        PendingVendors.map((PendingVendor) => PendingVendor._id);
    } else {
      newSelectedPendingVendorIds = [];
    }

    setSelectedPendingVendorIds(newSelectedPendingVendorIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPendingVendorIds.indexOf(id);
    let newSelectedPendingVendorIds = [];

    if (selectedIndex === -1) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds,
        id
      );
    }

    setSelectedPendingVendorIds(newSelectedPendingVendorIds);
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
                <TableCell>Approve/Decline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!data.merchants
                ? null
                : data.merchants.map((PendingVendor) => (
                    <TableRow
                      hover
                      key={PendingVendor._id}
                      selected={
                        selectedPendingVendorIds.indexOf(PendingVendor._id) !==
                        -1
                      }
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedPendingVendorIds.indexOf(
                              PendingVendor._id
                            ) !== -1
                          }
                          onChange={(event) =>
                            handleSelectOne(event, PendingVendor._id)
                          }
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <Box alignItems="center" display="flex">
                          <Avatar className={classes.avatar} src={avatarUrl}>
                            {getInitials(PendingVendor.companyName)}
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">
                            {PendingVendor.companyName}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{PendingVendor.email}</TableCell>
                      <TableCell>{PendingVendor.companyAddress}</TableCell>
                      <TableCell>{PendingVendor.phoneNumber}</TableCell>

                      <TableCell>
                        <SimpleModal PendingVendor={PendingVendor} />
                      </TableCell>
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
