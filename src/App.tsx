import { LoadingButton } from "@mui/lab";
import { Checkbox } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
// import AdapterDateFns '@mui/lab/AdapterDateFns';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import "./App.css";
import Home from "./components/Home";
import MuiAccordion from "./components/MuiAccordion";
import MuiAler from "./components/MuiAler";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiButton from "./components/MuiButton";
import MuiButtonNavigation from "./components/MuiButtonNavigation";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiChip from "./components/MuiChip";
import MuiDialog from "./components/MuiDialog";
import MuiDrawer from "./components/MuiDrawer";
import MuiimageList from "./components/MuiimageList";
import MuiLayout from "./components/MuiLayout";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiNavbar from "./components/MuiNavbar";
import MuiProgress from "./components/MuiProgress";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSkelton from "./components/MuiSkelton";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiSpeedDail from "./components/MuiSpeedDail";
import MuiSwitch from "./components/MuiSwitch";
import MuiTable from "./components/MuiTable";
import MuiTextField from "./components/MuiTextField";
import MuiTolltip from "./components/MuiTolltip";
import MuiTyprography from "./components/MuiTyprography";

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}> <>dd</></LocalizationProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/triprography" element={<MuiTyprography />}></Route>{" "}
        <Route path="/button" element={<MuiButton />}></Route>{" "}
        <Route path="/textField" element={<MuiTextField />}></Route>{" "}
        <Route path="/select" element={<MuiSelect />}></Route>
        <Route path="/radioButton" element={<MuiRadioButton />}></Route>{" "}
        <Route path="/checkBok" element={<MuiCheckbox />}></Route>{" "}
        <Route path="/switch" element={<MuiSwitch />}></Route>{" "}
        <Route path="/rating" element={<MuiRating />}></Route>
        <Route path="/autoComplete" element={<MuiAutoComplete />}></Route>
        <Route path="/layout" element={<MuiLayout />}></Route>{" "}
        <Route path="/card" element={<MuiCard />}></Route>
        <Route path="/accordian" element={<MuiAccordion />}></Route>{" "}
        <Route path="/imagelist" element={<MuiimageList />}></Route>{" "}
        <Route path="/navbar" element={<MuiNavbar />}></Route>{" "}
        <Route path="/link" element={<MuiLink />}></Route>
        <Route path="/breadCrums" element={<MuiBreadcrumbs />}></Route>{" "}
        <Route path="/drawer" element={<MuiDrawer />}></Route>
        <Route path="/speedDail" element={<MuiSpeedDail />}></Route>
        <Route
          path="/buttonNavigation"
          element={<MuiButtonNavigation />}
        ></Route>{" "}
        <Route path="/avatar" element={<MuiAvatar />}></Route>
        <Route path="/badge" element={<MuiBadge />}></Route>
        <Route path="/list" element={<MuiList />}></Route>{" "}
        <Route path="/chip" element={<MuiChip />}></Route>
        <Route path="/tooltip" element={<MuiTolltip />}></Route>{" "}
        <Route path="/table" element={<MuiTable />}></Route>
        <Route path="/alert" element={<MuiAler />}></Route>
        <Route path="/snackbar" element={<MuiSnackbar />}></Route>{" "}
        <Route path="/dialog" element={<MuiDialog />} />{" "}
        <Route path="/progress" element={<MuiProgress />} />{" "}
        <Route path="/skelton" element={<MuiSkelton />} />
        <Route path="/loadingButton" element={<MuiLoadingButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App"></div>;
