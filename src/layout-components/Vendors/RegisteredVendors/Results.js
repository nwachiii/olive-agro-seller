import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const Results = ({ className, count, RegisteredVendors, ...rest }) => {
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
        RegisteredVendors &&
        RegisteredVendors.map((RegisteredVendor) => RegisteredVendor._id);
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
              {RegisteredVendors &&
                RegisteredVendors.map((RegisteredVendor) => (
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
      {/* <TablePagination
        component="div"
        count={count}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  PendingVendors: PropTypes.array.isRequired,
};

export default Results;
