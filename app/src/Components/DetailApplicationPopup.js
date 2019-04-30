import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';


const DetailApplicationPopup = prop => {
    const {closeDialogPopup, dialogPopup, applicant, fullScreen} = prop;
    console.log("USER", applicant, fullScreen);
    return(
        <Dialog 
            open={dialogPopup}
            onClose={closeDialogPopup}
            fullScreen={fullScreen}
            >
            <DialogTitle>
                {applicant.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {applicant.position}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={closeDialogPopup}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
DetailApplicationPopup.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};
export default withMobileDialog() (DetailApplicationPopup)