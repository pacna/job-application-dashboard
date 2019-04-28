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
import Colors from '../Colors/colors'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const Dashboard = props => {
    const [sample, setSample] = useState(SampleData)
    const [anchorEl, setAnchorEl] = useState(null);
    const [check, setCheck] = useState(false);
    const closeAnchor = () => {
        setAnchorEl(null)
    }
    const openAnchor = evt => {
        setAnchorEl(evt.currentTarget)
    }
    const handleCheck = evt => {
        setCheck(evt.target.checked);
        sorting(SampleData, !check);
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
                    <Button onClick={openAnchor} variant="outlined" color="primary" style={{marginRight:"18px"}}>
                        Sort
                        <SortByAlphaIcon />
                    </Button>
                    <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeAnchor}
                    >
                        <MenuItem>
                            Sort
                            <Checkbox
                                checked={check}
                                onChange={handleCheck}
                            />
                        </MenuItem>
                    </Menu>
                </div>
                <Button variant="outlined" style={{marginRight:"18px"}}>
                    Filter
                    <FilterIcon />
                </Button>
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
                                        <IconButton style={{float: "right"}}>
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
        </div>
    )
}
export default Dashboard