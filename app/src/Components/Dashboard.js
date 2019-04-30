import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SampleData from '../sample.json'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import SortButton from './SortButton'
import FilterButton from './FilterButton'
import DetailApplicationPopup from './DetailApplicationPopup'
import Bookmark from './Bookmark';

const Dashboard = props => {
    const [sample, setSample] = useState(SampleData)
    const [dialogPopup, setDialogPopup] = useState(false);
    const [applicant, setApplicant] = useState({});

    const openDialogPopup = user => {
        setDialogPopup(true);
        setApplicant(user)
    }
    const closeDialogPopup = () => {
        setDialogPopup(false)
    }
    const sorting = (data, check) => {
        if (check) {
            const newAry = data.map(a => a).sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            setSample(newAry);
        } else {
            setSample(data);
        }
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ paddingLeft: "18px" }}>
                    <Typography variant="h6" color="inherit">
                        Job Application Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px", marginTop: "15px" }}>
                <SortButton SampleData={SampleData} sorting={sorting} />
                <FilterButton />
            </div>
            <Divider />
            {
                sample.map(x => {
                    return (
                        <List key={x.id}>
                            <ListItem>
                                <Grid container spacing={24} alignItems="center">
                                    <Grid item xs={4} >
                                        <ListItemText primary={x.name} secondary={"Applied " + x.applied} />
                                    </Grid>
                                    <Grid item xs={4} >
                                        <ListItemText primary={"Position: " + x.position} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => openDialogPopup(x)} style={{ float: "right" }}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Bookmark />
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider />
                        </List>
                    )
                })
            }
            <DetailApplicationPopup applicant={applicant} dialogPopup={dialogPopup} closeDialogPopup={closeDialogPopup} />
        </div>
    )
}
export default Dashboard