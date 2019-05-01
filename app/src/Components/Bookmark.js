import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Star';
import NonFavoriteIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';

const Bookmark = props => {
    const {userId, sample, fav, saveBookMark} = props;
    // const [bookmark, setBookMark] = useState(fav)
    
    console.log("fav", fav)
    return (
        <IconButton onClick={() => saveBookMark(userId)} style={{ float: "right" }}>
            {
                fav ? <FavoriteIcon /> : <NonFavoriteIcon />
            }
        </IconButton>
    )
}
//sample
//filterAry
//
export default Bookmark