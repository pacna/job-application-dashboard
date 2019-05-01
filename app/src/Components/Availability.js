import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const Availability = props => {
    const { applicant, classes } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
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
        </Paper>
    )
}
export default withStyles(styles)(Availability)