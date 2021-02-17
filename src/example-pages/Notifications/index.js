import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import NotificationsAlertsBasic from '../../example-components/Notifications/NotificationsAlertsBasic';
export default function Notifications() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Notifications"
        titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
      />
    </Fragment>
  );
}
