import React, {useState} from 'react'
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
import FavoriteIcon from '@material-ui/icons/Star';
import FilterIcon from '@material-ui/icons/FilterList';
import NonFavoriteIcon from '@material-ui/icons/StarBorder';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SampleData from '../sample.json' 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Dashboard = props => {
    const [sample, setSample] = useState(SampleData)
    const [sortAnchorEl, setSortAnchorEl] = useState(null);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const [sortCheck, setSortCheck] = useState(false);
    const [filterCheck, setFilterCheck] = useState(false);
    const [dialogPopup, setDialogPopup] = useState(false);
    const sortCloseAnchor = () => {
        setSortAnchorEl(null)
    }
    const sortOpenAnchor = evt => {
        setSortAnchorEl(evt.currentTarget)
    }
    const filterOpenAnchor = evt => {
        setFilterAnchorEl(evt.currentTarget)
    }
    const filterCloseAnchor = () => {
        setFilterAnchorEl(null)
    }
    const handleSortCheck = evt => {
        setSortCheck(evt.target.checked);
        sorting(SampleData, !sortCheck);
    }
    const handleFilterCheck = evt => {
        setFilterCheck(evt.target.checked);
    }
    const openDialogPopup = () => {
        setDialogPopup(true);
    }
    const closeDialogPopup = () => {
        setDialogPopup(false)
    }
    const sorting = (data, check) => {
        if(check){
            const newAry = data.map(a => a).sort((a,b) => {
                if(a.name < b.name ) return -1;
                if(a.name > b.name) return 1;
                return 0;
            })
            setSample(newAry);
        }else{
            setSample(data);
        }
    }
    return(
        <div>
            <AppBar position="static">
                <Toolbar  style={{paddingLeft: "18px"}}>
                    <Typography variant="h6" color="inherit">
                        Job Application Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"15px", marginTop:"15px"}}>
                <div>
                    <Button onClick={sortOpenAnchor} variant="outlined" color="primary" style={{marginRight:"18px"}}>
                        Sort
                        <SortByAlphaIcon />
                    </Button>
                    <Menu
                    anchorEl={sortAnchorEl}
                    open={Boolean(sortAnchorEl)}
                    onClose={sortCloseAnchor}
                    >
                        <MenuItem>
                            Alphabetical Sort
                            <Checkbox
                                checked={sortCheck}
                                onChange={handleSortCheck}
                            />
                        </MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button onClick={filterOpenAnchor} variant="outlined" style={{marginRight:"18px"}}>
                        Filter
                        <FilterIcon />
                    </Button>
                    <Menu
                    anchorEl={filterAnchorEl}
                    open={Boolean(filterAnchorEl)}
                    onClose={filterCloseAnchor}
                    >
                        <MenuItem>
                            Favorites
                            <Checkbox
                                checked={filterCheck}
                                onChange={handleFilterCheck}
                            />
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <Divider />
            {
                sample.map(x => {
                    return(
                        <List key={x.id}>
                            <ListItem>
                                <Grid container spacing={24} alignItems="center">
                                    <Grid item xs={4} >
                                        <ListItemText primary={x.name} secondary={"Applied " + x.applied}/>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <ListItemText primary={"Position: "  + x.position}/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={openDialogPopup} style={{float: "right"}}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <IconButton style={{float: "right"}}>
                                            <NonFavoriteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider />
                        </List>
                    )
                })
            }
            <Dialog 
            open={dialogPopup}
            onClose={closeDialogPopup}
            >
                <DialogTitle>
                    Foo
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hello World
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={closeDialogPopup}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Dashboard