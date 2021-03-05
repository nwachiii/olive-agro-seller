import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar } from "./layout-blueprints";
// import { PresentationLayout } from "./layout-blueprints";

// layout-components
import Inbox from "./layout-components/Inbox";
import AllOrders from "./layout-components/OliveOrders/AllOrders";
import AddCategory from "./layout-components/Categories/AddCategory";
import SeeAllCategories from "./layout-components/Categories/SeeAllCategories";
import FruitsVeg from "./layout-components/Products/FruitsVeg";
import Drinks from "./layout-components/Products/Drinks";
import Spices from "./layout-components/Products/Spices";
import DryHerbs from "./layout-components/Products/DryHerbs";
import Legumes from "./layout-components/Products/Legumes";
import Flours from "./layout-components/Products/Flours";
import Oils from "./layout-components/Products/Oils";
import Customers from "./layout-components/ViewUsers/Customers";
import PendingVendors from "./layout-components/ViewUsers/Vendors/PendingVendors";
import RegisteredVendors from "./layout-components/ViewUsers/Vendors/RegisteredVendors";

const Home = lazy(() => import("./layout-components/Home"));

//auth
const LoginRegister = lazy(() => import("./Login/LoginRegister"));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7,
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load your dashboard
              </div>
            </div>
          }
        >
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route exact path="/Login" component={LoginRegister}>
              {/* <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  ></motion.div>
                </Switch>
              </PresentationLayout> */}
            </Route>

            <Route
              path={[
                "/Home",
                "/Inbox",
                "/AddCategory",
                "/SeeAllCategories",
                "/FruitsVeg",
                "/Spices",
                "/Drinks",
                "/DryHerbs",
                "/Legumes",
                "/Oils",
                "/Flours",
                "/PendingVendors",
                "/RegisteredVendors",
                "/Customers",
                "/AllOrders",
                "/Login",
              ]}
            >
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/Home" component={Home} />
                    <Route path="/Inbox" component={Inbox} />

                    <Route path="/AllOrders" component={AllOrders} />
                    <Route path="/AddCategory" component={AddCategory} />
                    <Route
                      path="/SeeAllCategories"
                      component={SeeAllCategories}
                    />
                    <Route path="/FruitsVeg" component={FruitsVeg} />
                    <Route path="/Spices" component={Spices} />
                    <Route path="/Drinks" component={Drinks} />
                    <Route path="/DryHerbs" component={DryHerbs} />
                    <Route path="/Legumes" component={Legumes} />
                    <Route path="/Oils" component={Oils} />
                    <Route path="/Flours" component={Flours} />
                    <Route path="/PendingVendors" component={PendingVendors} />
                    <Route
                      path="/RegisteredVendors"
                      component={RegisteredVendors}
                    />
                    <Route path="/Customers" component={Customers} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
