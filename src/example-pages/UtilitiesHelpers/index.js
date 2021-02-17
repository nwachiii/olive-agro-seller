import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import UtilitiesHelpersPrimaryColors from '../../example-components/UtilitiesHelpers/UtilitiesHelpersPrimaryColors';
import UtilitiesHelpersNeutralColors from '../../example-components/UtilitiesHelpers/UtilitiesHelpersNeutralColors';
import UtilitiesHelpersBrandColors from '../../example-components/UtilitiesHelpers/UtilitiesHelpersBrandColors';
export default function UtilitiesHelpers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Utilities &amp; Helpers"
        titleDescription="These are helpers that speed up the dev time for various components and effects."
      />
    </Fragment>
  );
}
