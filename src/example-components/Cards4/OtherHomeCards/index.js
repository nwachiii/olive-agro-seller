import React, { useState } from 'react';

import { Card, Grid } from '@material-ui/core';
import { Box, Flex, Heading, Divider } from '@chakra-ui/react';

export default function OtherHomeCards() {
  const [count] = useState(0);
  return (
    <>
      <Grid item xs={12} sm={12} lg={12} spacing={4}>
        <Card className="card-box mb-4 p-4 text-center">
          <Flex width="90%">
            <Box>
              <Heading>INQUIRES &amp; QUOTATION</Heading>
            </Box>
            <Box>
              <a href="/#">{count} Unread</a>
              <Divider orientation="vertical" h="sm" />

              <a href="/#">View all</a>
            </Box>
          </Flex>
          <Divider orientation="horizontal" />
          <Flex direction="column" justify="center" align="center" maxW="80%">
            <p>
              <strong>No new messages for now</strong>
            </p>
            <p className="text-black-50">
              You can view your previous Inquiries and Quotations in Message
              Center.
            </p>
            <a href="/#">
              <button>Go to Message Center</button>
            </a>
          </Flex>
        </Card>
      </Grid>
    </>
  );
}
