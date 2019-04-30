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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
            fullWidth={true}
            maxWidth = {'md'}
            >
            <DialogTitle>
                {applicant.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField 
                        fullWidth 
                        InputProps={{
                            readOnly: true,
                        }} 
                        label="Position" 
                        value={applicant.position}
                    />
                </DialogContentText>
                <DialogContentText>
                    <TextField 
                        fullWidth 
                        InputProps={{
                            readOnly: true,
                        }}
                        label="Applied" 
                        value={applicant.applied}/>
                </DialogContentText>
                <DialogContentText>
                    <TextField 
                        fullWidth 
                        label="Experience"
                        InputProps={{
                            readOnly: true,
                        }} 
                        value={displayExperience(applicant.experience)}
                    />
                </DialogContentText>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>M</TableCell>
                            <TableCell>T</TableCell>
                            <TableCell>W</TableCell>
                            <TableCell>Th</TableCell>
                            <TableCell>F</TableCell>
                            <TableCell>S</TableCell>
                            <TableCell>Su</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{applicant.availability && applicant.availability.M}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.T}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.W}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.Th}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.F}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.S}</TableCell>
                            <TableCell>{applicant.availability && applicant.availability.Su}</TableCell>                            
                        </TableRow>
                    </TableBody>
                </Table>
                <TextField 
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    label={applicant.questions && applicant.questions[0].text} 
                    value={applicant.questions && applicant.questions[0].answer}
                />
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