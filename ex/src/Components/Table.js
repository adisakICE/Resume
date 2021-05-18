import React, { useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const TableData = () => {
    const reducer_data = useSelector(({ reducer_data }) => reducer_data)
    const [checked, setChecked] = useState([]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const compareData = () => {
       
        if (checked.length >= 2) {
            return (
            <div style={{marginLeft : "5%",
            marginRight : "5%"}}>
            <TableContainer component={Paper} >
            <Table className={checked.name} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Compare</StyledTableCell>
                  <StyledTableCell >Brand</StyledTableCell>
                  <StyledTableCell >Price</StyledTableCell>
                  <StyledTableCell >Vacuum robot</StyledTableCell>
                  <StyledTableCell >Camera</StyledTableCell>
                  <StyledTableCell >Voice</StyledTableCell>
                  <StyledTableCell >Language</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {checked.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.brand}</StyledTableCell>
                    <StyledTableCell align="left">{row.price} {row.currency}</StyledTableCell>
                    <StyledTableCell align="left">{row.vacuum}</StyledTableCell>
                    <StyledTableCell align="left">{row.camera}</StyledTableCell>
                    <StyledTableCell align="left">{row.voice}</StyledTableCell>
                    <StyledTableCell align="left">{row.supportLanguage}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
            )
        }
    }


    if (reducer_data.data) {
        
        return (
            <div>
            <List style={{marginLeft : "10%",
        marginRight : "10%"}} >
                {reducer_data.data.map((value) => {
                    const labelId = `checkbox-${value}`;
                    return (
                        <ListItem key={value.name} button>
                            <ListItemAvatar>
                                <Avatar
                                    src={value.url}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={value.name} />
                            <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
               
            </List>
            {compareData()}
            </div>
        );
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default TableData