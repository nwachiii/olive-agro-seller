import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function Vendors() {
  const [open3, setOpen3] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

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
    <Fragment>
      <Card className="card-box mb-4 p-3 text-center">
        <div className="my-4">
          <h6 className="font-weight-bold font-size-xxl mb-2 text-black">
            Vendor's Place
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
            <div className="font-weight-bold mt-3">Shammah Agric Produce</div>
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

      <VendorModal
        open3={open3}
        handleClose3={handleClose3}
        scroll={scroll}
        DialogContentText={DialogContentText}
        descriptionElementRef={descriptionElementRef}
      />
    </Fragment>
  );
}

const VendorModal = Props => {
  const {
    open3,
    handleClose3,
    scroll,
    DialogContentText,
    descriptionElementRef
  } = Props;
  return (
    <Dialog
      open={open3}
      onClose={handleClose3}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">
        <h4 className="mb-0">Vendor Info</h4>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}>
          {[...new Array(10)]
            .map(() => 'All vendor information comes in here.\n')
            .join('\n')}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="justify-content-center flex-wrap">
        <Button onClick={handleClose3} color="secondary" variant="contained">
          Accept
        </Button>
        <Button onClick={handleClose3} color="secondary" variant="contained">
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  );
};
