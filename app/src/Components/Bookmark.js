import React from 'react'
import FavoriteIcon from '@material-ui/icons/Star';
import NonFavoriteIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';

const Bookmark = props => {
    const {userId, fav, saveBookMark} = props;
    return (
        <IconButton onClick={() => saveBookMark(userId)} style={{ float: "right" }}>
            {
                fav ? <FavoriteIcon /> : <NonFavoriteIcon />
            }
        </IconButton>
    )
}
export default Bookmark