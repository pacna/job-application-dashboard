import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SampleData from "../sample.json";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";
import DetailApplicationPopup from "./DetailApplicationPopup";
import Bookmark from "./Bookmark";

import FavoriteIcon from "@material-ui/icons/Star";
import NonFavoriteIcon from "@material-ui/icons/StarBorder";

const Dashboard = props => {
  const [sample, setSample] = useState(SampleData);
  const [dialogPopup, setDialogPopup] = useState(false);
  const [applicant, setApplicant] = useState({});
  const [filterCheck, setFilterCheck] = useState(false);
  const [sorted, setSorted] = useState(false);

  console.log('sorted: ', sorted)

  const openDialogPopup = user => {
    setDialogPopup(true);
    setApplicant(user);
  };
  const closeDialogPopup = () => {
    setDialogPopup(false);
  };
  // const sorting = (data, check) => {
  //     console.log('ddata: ", ', data)
  //     data.forEach(x => console.log("data FAVS: " , x.favorites))
  //     if (check) {
  //         const newAry = data.sort((a, b) => {
  //             if (a.name < b.name) return -1;
  //             if (a.name > b.name) return 1;
  //             return 0;
  //         })
  //         setSample(newAry);
  //         console.log(newAry, data)
  //     } else {
  //         setSample(SampleData.map((x, i) => {
  //             x.favorite = data[i].favorite ? true : false
  //             return x
  //         }));
  //     }
  // }

  const withSort = apps => {
    if (sorted) {
      return apps.map(x => x).sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    }

    return apps;
  };

  const handleFilterCheck = evt => {
    setFilterCheck(evt.target.checked);
    localStorage.setItem("filterCheck", JSON.stringify(!filterCheck));
  };

  // sample.forEach(x => console.log(x.favorite))
  const saveBookMark = userId => {
    const newSample = sample.map(x => {
      console.log("favorites: ", x.favorite);
      if (x.id === userId) {
        x.favorite = x.favorite ? false : true;
        console.log("FAVVVVVV: ", x.favorite);
      }
      return x;
    });

    localStorage.setItem("sample", JSON.stringify(newSample));
    setSample(newSample.splice(0));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sample"));
    const isChecked = JSON.parse(localStorage.getItem("sortCheck"))
      ? true
      : false;
    const isFiltered = JSON.parse(localStorage.getItem("filterCheck"))
      ? true
      : false;

    setFilterCheck(isFiltered);
    setSorted(isChecked);
    // data && sorting(sample, isChecked);
    data && setSample(data);
  }, []);

  const applicantList = withSort(sample)
    .filter(x => {
      if (filterCheck) {
        return x.favorite === true;
      } else {
        return x;
      }
    })
    .map(x => {
      // x.favorite = x.favorite ? true : false
      sample.forEach(j => console.log("all false", j.favorite));
      console.log("9adfjafdj: ", x.favorite);
      return (
        <List key={x.id}>
          <ListItem>
            <Grid container spacing={24} alignItems="center">
              <Grid item xs={4} md={4}>
                <ListItemText
                  primary={x.name}
                  secondary={"Applied " + x.applied}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <ListItemText primary={"Position: " + x.position} />
              </Grid>
              <Grid item xs={2} md={2}>
                <IconButton
                  onClick={() => openDialogPopup(x)}
                  style={{ float: "right" }}
                >
                  <InfoIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2} md={2}>
                {/* <Bookmark fav={x.favorite} sample={sample} userId={x.id} saveBookMark={saveBookMark}/> */}
                <IconButton
                  onClick={() => saveBookMark(x.id)}
                  style={{ float: "right" }}
                >
                  {x.favorite ? <FavoriteIcon /> : <NonFavoriteIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
        </List>
      );
    });
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ paddingLeft: "18px" }}>
          <Typography variant="h6" color="inherit">
            Job Application Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
          marginTop: "15px"
        }}
      >
        <SortButton SampleData={sample} setSort={setSorted} />
        <FilterButton
          sample={sample}
          handleFilterCheck={handleFilterCheck}
          filterCheck={filterCheck}
          setFilterCheck={setFilterCheck}
        />
      </div>
      <Divider />
      {applicantList.length === 0 ? <h2>No favorites</h2> : applicantList}
      <DetailApplicationPopup
        applicant={applicant}
        dialogPopup={dialogPopup}
        closeDialogPopup={closeDialogPopup}
      />
    </div>
  );
};
export default Dashboard;