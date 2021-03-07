import React, { Fragment, useState } from "react";

import { Grid, Card, Avatar } from "@material-ui/core";
import { Flex } from "@chakra-ui/react";

export default function HomeFirstCard() {
  const [count] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} spacing={4} textAlign="center">
          <Card className="p-3 mb-4 align-box-row flex-wrap">
            <div className="align-box-row mb-4 mr-auto flex-wrap">
              <a className="pr-3 mx-auto" href="/#">
                <Avatar src="/broken-image.jpg" />
              </a>
              <div className="flex-grow-1 mt-4">
                <h1 className="text-black-40">
                  {user ? ` ${user.firstName} ${user.lastName}` : ""}
                </h1>
                <a className="text-black-50 pt-2" href="/#">
                  {user ? <h5>View Profile</h5> : ""}
                </a>
              </div>
            </div>

            <Flex
              direction="row"
              align="center"
              justify="space-around"
              wrap="wrap"
              textAlign="center"
              spacing={8}
              maxWidth="500px"
            >
              <div className="flex-grow-1 mt-4 mx-4">
                <h1 className="text-black-40">{count}</h1>
                <a className="text-black-50 pt-2" href="/#">
                  CARD REQUESTS
                </a>
              </div>
              <div className="flex-grow-1 mt-4 mx-4">
                <h1 className="text-black-40">{count}</h1>
                <a className="text-black-50 pt-2" href="/#">
                  FAVORITES
                </a>
              </div>
              <div className="flex-grow-1 mt-4 mx-4">
                <h1 className="text-black-40">{count}</h1>
                <a className="text-black-50 pt-2" href="/#">
                  MY COUPONS
                </a>
              </div>
            </Flex>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
