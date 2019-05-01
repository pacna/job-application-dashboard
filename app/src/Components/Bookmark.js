import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Star';
import NonFavoriteIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';

const Bookmark = props => {
    const {userId, sample} = props;
    const [bookmark, setBookMark] = useState(false)
    const saveBookMark = () => {
        //[]
        setBookMark(!bookmark);
        sample.forEach((x, index) => {
            if(x.id === userId){
                sample[index].favorite = !bookmark;
            }
        })

    }
    return (
        <IconButton onClick={saveBookMark} style={{ float: "right" }}>
            {
                bookmark ? <FavoriteIcon /> : <NonFavoriteIcon />
            }
        </IconButton>
    )
}
//sample
//filterAry
//
export default Bookmark