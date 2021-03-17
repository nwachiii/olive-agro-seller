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
import getInitials from "../../../../utils/getInitials";

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
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(0);
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
    // else if (selectedIndex === 0) {
    //   newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
    //     selectedPendingVendorIds.slice(1)
    //   );
    // }
    // else if (selectedIndex === selectedPendingVendorIds.length - 1) {
    //   newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
    //     selectedPendingVendorIds.slice(0, -1)
    // );
    // }
    // else if (selectedIndex > 0) {
    //   newSelectedPendingVendorIds = newSelectedPendingVendorIds.concat(
    //     selectedPendingVendorIds.slice(0, selectedIndex),
    //     selectedPendingVendorIds.slice(selectedIndex + 1)
    //   );
    // }

    setSelectedRegisteredVendorIds(newSelectedRegisteredVendorIds);
  };

  // const handleLimitChange = (event) => {
  //   setLimit(event.target.value);
  // };

  // const handlePageChange = (event, newPage) => {
  //   setPage(newPage);
  // };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    // checked={
                    //   selectedRegisteredVendorIds.length === RegisteredVendors.length
                    // }
                    // color="primary"
                    // indeterminate={
                    //   selectedRegisteredVendorIds.length > 0 &&
                    //   selectedRegisteredVendorIds.length < RegisteredVendors.length
                    // }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Company name</TableCell>
                <TableCell>Company email</TableCell>
                {/* <TableCell>City</TableCell> comment this out */}
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
                    {/* <TableCell>{PendingVendor.companyAddress.state}</TableCell> comment this out */}
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

// import React, { useState } from "react";
// import clsx from "clsx";
// import PropTypes from "prop-types";
// // import moment from 'moment';
// import PerfectScrollbar from "react-perfect-scrollbar";
// import {
//   Avatar,
//   Box,
//   Card,
//   Checkbox,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Typography,
//   makeStyles,
// } from "@material-ui/core";
// import getInitials from "../../../../utils/getInitials";
// // import { VendorModal } from '../VendorModal';

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   avatar: {
//     marginRight: theme.spacing(2),
//   },
// }));

// const Results = ({ className, RegisteredVendors, ...rest }) => {
//   const classes = useStyles();
//   const [
//     selectedRegisteredVendorIds,
//     setSelectedRegisteredVendorIds,
//   ] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [page, setPage] = useState(0);
//   const [open3] = useState(false);
//   // const [scroll, setScroll] = useState('paper');

//   // const handleClickOpen3 = scrollType => () => {
//   //   setOpen3(true);
//   //   setScroll(scrollType);
//   // };

//   // const handleClose3 = () => {
//   //   setOpen3(false);
//   // };

//   const descriptionElementRef = React.useRef(null);
//   React.useEffect(() => {
//     if (open3) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open3]);

//   const handleSelectAll = (event) => {
//     let newSelectedRegisteredVendorIds;

//     if (event.target.checked) {
//       newSelectedRegisteredVendorIds = RegisteredVendors.map(
//         (RegisteredVendor) => RegisteredVendor.id
//       );
//     } else {
//       newSelectedRegisteredVendorIds = [];
//     }

//     setSelectedRegisteredVendorIds(newSelectedRegisteredVendorIds);
//   };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedRegisteredVendorIds.indexOf(id);
//     let newSelectedRegisteredVendorIds = [];

//     if (selectedIndex === -1) {
//       newSelectedRegisteredVendorIds = newSelectedRegisteredVendorIds.concat(
//         selectedRegisteredVendorIds,
//         id
//       );
//     } else if (selectedIndex === 0) {
//       newSelectedRegisteredVendorIds = newSelectedRegisteredVendorIds.concat(
//         selectedRegisteredVendorIds.slice(1)
//       );
//     } else if (selectedIndex === selectedRegisteredVendorIds.length - 1) {
//       newSelectedRegisteredVendorIds = newSelectedRegisteredVendorIds.concat(
//         selectedRegisteredVendorIds.slice(0, -1)
//       );
//     } else if (selectedIndex > 0) {
//       newSelectedRegisteredVendorIds = newSelectedRegisteredVendorIds.concat(
//         selectedRegisteredVendorIds.slice(0, selectedIndex),
//         selectedRegisteredVendorIds.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedRegisteredVendorIds(newSelectedRegisteredVendorIds);
//   };

//   const handleLimitChange = (event) => {
//     setLimit(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   //Registered vendor's status
//   const activeStatusClass =
//     "badge badge-success py-0 my-4 text-center  text-white";
//   const expiredStatusClass =
//     "h-auto py-0 badge badge-danger text-center text-white";

//   return (
//     <Card className={clsx(classes.root, className)} {...rest}>
//       <PerfectScrollbar>
//         <Box minWidth={1050}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     checked={
//                       selectedRegisteredVendorIds.length ===
//                       RegisteredVendors.length
//                     }
//                     color="primary"
//                     indeterminate={
//                       selectedRegisteredVendorIds.length > 0 &&
//                       selectedRegisteredVendorIds.length <
//                         RegisteredVendors.length
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </TableCell>
//                 <TableCell>Company name</TableCell>
//                 <TableCell>Company email</TableCell>
//                 <TableCell>City</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Address</TableCell>
//                 {/* <TableCell>Others</TableCell> */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {RegisteredVendors.slice(0, limit).map((RegisteredVendor) => (
//                 <TableRow
//                   hover
//                   key={RegisteredVendor.id}
//                   selected={
//                     selectedRegisteredVendorIds.indexOf(RegisteredVendor.id) !==
//                     -1
//                   }
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={
//                         selectedRegisteredVendorIds.indexOf(
//                           RegisteredVendor.id
//                         ) !== -1
//                       }
//                       onChange={(event) =>
//                         handleSelectOne(event, RegisteredVendor.id)
//                       }
//                       value="true"
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Box alignItems="center" display="flex">
//                       <Avatar
//                         className={classes.avatar}
//                         src={RegisteredVendor.avatarUrl}
//                       >
//                         {getInitials(RegisteredVendor.companyName)}
//                       </Avatar>
//                       <Typography color="textPrimary" variant="body1">
//                         {RegisteredVendor.companyName}
//                       </Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell>{RegisteredVendor.companyEmail}</TableCell>
//                   <TableCell>{RegisteredVendor.companyAddress.state}</TableCell>
//                   {RegisteredVendor.status === "Active" ? (
//                     <div className="my-4 px-3">
//                       <TableCell className={activeStatusClass}>
//                         {RegisteredVendor.status}
//                       </TableCell>
//                     </div>
//                   ) : (
//                     <div className="my-4 px-3">
//                       <TableCell className={expiredStatusClass}>
//                         {RegisteredVendor.status}
//                       </TableCell>
//                     </div>
//                   )}

//                   <TableCell>
//                     {RegisteredVendor.companyAddress.street}
//                   </TableCell>
//                   <TableCell>{RegisteredVendor.phoneNumber}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Box>
//       </PerfectScrollbar>
//       <TablePagination
//         component="div"
//         count={RegisteredVendors.length}
//         onChangePage={handlePageChange}
//         onChangeRowsPerPage={handleLimitChange}
//         page={page}
//         rowsPerPage={limit}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Card>
//   );
// };

// Results.propTypes = {
//   className: PropTypes.string,
//   RegisteredVendors: PropTypes.array.isRequired,
// };

// export default Results;
