import React from 'react';
import { Tag, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
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
      <TabList
        variant="solid"
        px="2em"
        pt="1em"
        my="auto"
        borderBottom="1px solid lightgray">
        <Tab
          defaultIndex={1}
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          All
        </Tab>
        <Tab
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          To be Confirmed
        </Tab>
        <Tab
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          Unpaid
        </Tab>
        <Tab
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          To be Shipped
        </Tab>
        <Tab
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          To be received
        </Tab>
        <Tab
          border="none"
          borderRight="1.5px solid darkgray"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          In Dispute
        </Tab>
        <Tab
          border="none"
          mr={2}
          _hover={{
            background: '#95c53e'
          }}
          _active={{
            borderBottom: '3px solid #95c53e'
          }}
          _focus={{
            borderBottom: '3px solid #95c53e'
          }}>
          Completed/Closed
        </Tab>
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
