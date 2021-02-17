import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { VendorModal } from './VendorModal';

import {
  Box,
  Container,
  makeStyles,
  Avatar,
  Card,
  DialogContentText
} from '@material-ui/core';
import Page from '../../Page';
import Toolbar from '../../Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function Vendors() {
  const classes = useStyles();
  const [open3, setOpen3] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen3 = scrollType => () => {
    setOpen3(true);
    setScroll(scrollType);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open3]);

  return (
    <Page className={classes.root} title="Vendors">
      <Container maxWidth={false}>
        <Toolbar componentTitle="Vendor" />
        <Box mt={3}>
          <Card className="card-box mb-4 p-3 text-center">
            <div className="my-4">
              <h6 className="font-weight-bold font-size-xxl mb-2 text-black">
                Vendors
              </h6>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center ">
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Zoe Farms</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>6.0</span>
                  <span className="px-1">|</span>
                  101 Sales
                </div>
              </Card>

              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Dosh Ltd</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>7.0</span>
                  <span className="px-1">|</span>
                  202 Sales
                </div>
              </Card>
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3 flex-wrap">
                  Shammah Agric Produce
                </div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>2.9</span>
                  <span className="px-1">|</span>
                  50 Sales
                </div>
              </Card>
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Johnny Farms</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>4.8</span>
                  <span className="px-1">|</span>
                  77 Sales
                </div>
              </Card>
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Excel Products</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>5.0</span>
                  <span className="px-1">|</span>
                  81 Sales
                </div>
              </Card>
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Gbenga Inc</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>3.6</span>
                  <span className="px-1">|</span>
                  48 Sales
                </div>
              </Card>
              <Card
                className="card-box mb-4 p-3 text-center position-relative mx-3 px-3 py-3"
                style={{ cursor: 'pointer' }}
                onClick={handleClickOpen3('paper')}>
                <div className="px-auto mx-5">
                  <Avatar src="/broken-image.jpg" />
                </div>
                <div className="font-weight-bold mt-3">Jayeola Farms</div>
                <div className="font-weight-bold font-size-sm text-black-50">
                  <FontAwesomeIcon
                    icon={['fas', 'star']}
                    className="text-warning mr-1"
                  />
                  <span>4.0</span>
                  <span className="px-1">|</span>
                  62 Sales
                </div>
              </Card>
            </div>
          </Card>
        </Box>
      </Container>
      <VendorModal
        open3={open3}
        handleClose3={handleClose3}
        scroll={scroll}
        DialogContentText={DialogContentText}
        descriptionElementRef={descriptionElementRef}
      />
    </Page>
  );
}
