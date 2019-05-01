import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FilterIcon from '@material-ui/icons/FilterList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const FilterButton = props => {
    const [anchorEl, setAnchorEl] = useState(null)
    // const [check, setCheck] = useState(false);
    const {sample, handleFilterCheck, filterCheck} = props;

    const openAnchor = evt => {
        setAnchorEl(evt.currentTarget);
    }
    const closeAnchor = () => {
        setAnchorEl(null)
    }
    // const handleCheck = evt => {
    //     setCheck(evt.target.checked)
    //     filtering(sample, !check);

    // }

    return(
        <div>
            <Button onClick={openAnchor} variant="outlined" style={{marginRight:"18px"}}>
                Filter
                <FilterIcon />
            </Button>
            <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeAnchor}
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
    )
}
export default FilterButton