import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Availability from './Availability';

const DetailApplicationPopup = prop => {
    const {closeDialogPopup, dialogPopup, applicant, fullScreen} = prop;
    console.log("USER", applicant, fullScreen);
    const displayExperience = experience => {
        if(experience === 0){
            return "None"
        }
        else if(experience === 1){
            return experience + " year"
        }
        else{
            return experience + " years"
        }
    }
    return(
        <Dialog 
            open={dialogPopup}
            onClose={closeDialogPopup}
            fullScreen={fullScreen}
            maxWidth = {'md'}
            >
            <DialogTitle>
                {applicant.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{marginBottom: "1em"}}>
                    <TextField 
                        fullWidth 
                        InputProps={{
                            readOnly: true,
                        }} 
                        label="Position" 
                        value={applicant.position}
                    />
                </DialogContentText >
                <DialogContentText style={{marginBottom: "1em"}}>
                    <TextField 
                        fullWidth 
                        InputProps={{
                            readOnly: true,
                        }}
                        label="Applied" 
                        value={applicant.applied}/>
                </DialogContentText>
                <DialogContentText style={{marginBottom: "1em"}}>
                    <TextField 
                        fullWidth 
                        label="Experience"
                        InputProps={{
                            readOnly: true,
                        }} 
                        value={displayExperience(applicant.experience)}
                    />
                </DialogContentText>
                <TextField 
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    label={applicant.questions && applicant.questions[0].text} 
                    value={applicant.questions && applicant.questions[0].answer}
                />
                <Availability applicant={applicant}/>
            </DialogContent>
            <DialogActions style={{display:"flex", justifyContent:"center"}}>
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