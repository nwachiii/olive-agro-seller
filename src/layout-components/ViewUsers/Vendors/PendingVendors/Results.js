import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import getInitials from '../../../../utils/getInitials';
import VendorModal from '../VendorModal';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, props, PendingVendors, ...rest }) => {
  const classes = useStyles();
  const [selectedPendingVendorIds, setSelectedPendingVendorIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [showVendorInfo, setShowVendorInfo] = useState(false);

  const handleVendorInfo = () => {
    return setShowVendorInfo(!showVendorInfo);
  };

  const handleSelectAll = event => {
    let newSelectedPendingVendorIds;

    if (event.target.checked) {
      newSelectedPendingVendorIds = PendingVendors.map(
        PendingVendor => PendingVendor.id
      );
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
    } else if (selectedIndex === 0) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(1)
      );
    } else if (selectedIndex === selectedPendingVendorIds.length - 1) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
        selectedPendingVendorIds.slice(0, selectedIndex),
        selectedPendingVendorIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPendingVendorIds(newSelectedPendingVendorIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      selectedPendingVendorIds.length === PendingVendors.length
                    }
                    color="primary"
                    indeterminate={
                      selectedPendingVendorIds.length > 0 &&
                      selectedPendingVendorIds.length < PendingVendors.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                {/* <TableCell>Registration date</TableCell> */}
                <TableCell>Approve/Decline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PendingVendors.slice(0, limit).map(PendingVendor => (
                <TableRow
                  hover
                  key={PendingVendor.id}
                  selected={
                    selectedPendingVendorIds.indexOf(PendingVendor.id) !== -1
                  }>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={
                        selectedPendingVendorIds.indexOf(PendingVendor.id) !==
                        -1
                      }
                      onChange={event =>
                        handleSelectOne(event, PendingVendor.id)
                      }
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar
                        className={classes.avatar}
                        src={PendingVendor.avatarUrl}>
                        {getInitials(PendingVendor.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {PendingVendor.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{PendingVendor.email}</TableCell>
                  <TableCell>{PendingVendor.address.state}</TableCell>
                  <TableCell>{PendingVendor.phone}</TableCell>
                  {/* <TableCell>
                    {moment(PendingVendor.createdAt).format('DD/MM/YYYY')}
                  </TableCell> */}
                  <TableCell>
                    {showVendorInfo ? null : <VendorModal />}
                    <Button
                      onClick={handleVendorInfo}
                      color="secondary"
                      variant="contained">
                      see more...
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={PendingVendors.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  PendingVendors: PropTypes.array.isRequired
};

export default Results;
