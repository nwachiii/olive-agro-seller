import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ToBeConfirmed from './ToBeConfirmed';
import Unpaid from './Unpaid';
import ToBeShipped from './ToBeShipped';
import ToBeReceived from './ToBeReceived';
import InDispute from './InDispute';
import Completed from './Completed';
import AllOrders from './AllOrders';

function AllOrdersIndex() {
  return (
    <Tabs isLazy borderRadius="10px" border="1px solid lightgray">
      <TabList px="2em" py="1em" my="auto" borderBottom="1px solid lightgray">
        <Tab border="none" borderRight="0.5px solid darkgray">
          All
        </Tab>
        <Tab border="none">To be Confirmed</Tab>
        <Tab border="none">Unpaid</Tab>
        <Tab border="none">To be Shipped</Tab>
        <Tab border="none">To be received</Tab>
        <Tab border="none">In Dispute</Tab>
        <Tab border="none">Completed/Closed</Tab>
      </TabList>
      <TabPanels p="30px" display="flex" justifyContent="center" w="100%">
        <TabPanel>
          <AllOrders />
        </TabPanel>
        <TabPanel>
          <ToBeConfirmed />
        </TabPanel>
        <TabPanel>
          <Unpaid />
        </TabPanel>
        <TabPanel>
          <ToBeShipped />
        </TabPanel>
        <TabPanel>
          <ToBeReceived />
        </TabPanel>
        <TabPanel>
          <InDispute />
        </TabPanel>
        <TabPanel>
          <Completed />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default AllOrdersIndex;
