import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SortButton = props => {
    const {sorting, SampleData} = props;
    const [anchorEl, setAnchorEl] = useState(null)
    const [check, setCheck] = useState(false);

    const openAnchor = evt => {
        setAnchorEl(evt.currentTarget);
    }
    const closeAnchor = () => {
        setAnchorEl(null)
    }
    const handleCheck = evt => {
        setCheck(evt.target.checked)
        sorting(SampleData, !check)
    }

    return(
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
                    Alphabetical Sort
                    <Checkbox
                        checked={check}
                        onChange={handleCheck}
                    />
                </MenuItem>
            </Menu>
        </div>
    )
}
export default SortButton