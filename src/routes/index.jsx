import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NavBar } from "../components"

const ContactDataPageElem = lazy(() => import("../pages/contactDataPage"));
const InfoPageElem = lazy(() => import("../pages/infoPage"));
const AccAndtransfersElem = lazy(() => import("../pages/accAndTransfersPage"));
const SignIngPageElem = lazy(() => import("../pages/signingPage")); 
const SuccessPageElem = lazy(() => import("../pages/successPage")); 

function Routers() {

  return (
    <>
    <Router>
      <NavBar>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes element={<NavBar />}>
              <Route path="/" element={<ContactDataPageElem />} />
              <Route path="/company_information" element={<InfoPageElem />} />
              <Route path="/company_accandtransfers" element={<AccAndtransfersElem/>} />
              <Route path="/company_signing" element={<SignIngPageElem />} />
              <Route path="/company_success" element={<SuccessPageElem />} />
              <Route path='/*' element={<div>NOT FOUND BLIA</div>} />
            </Routes>
        </Suspense>
      </NavBar>
    </Router>
   </>
 );
}

export default Routers;