import React, { Fragment } from 'react';
import { VStack } from '@chakra-ui/react';

import { PageTitle } from '../../layout-components';

import PaginationBasic from '../../example-components/Pagination/PaginationBasic';
import HomeFirstCard from '../../example-components/Cards4/HomeFirstCard';
import OtherHomeCards from '../../example-components/Cards4/OtherHomeCards';

export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Olive-agro"
        titleDescription="Get personalized notifications here... "
      />

      <VStack spacing="4em" my="4em">
        <HomeFirstCard />
        <OtherHomeCards />
        <PaginationBasic />
      </VStack>
    </Fragment>
  );
}
