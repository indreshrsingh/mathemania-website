import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import data from '../../Data/LeaderBoard.json'
import Winners from './Winners'
import theme from '../../theme';
import { Button, Typography } from '@material-ui/core';
import { useEffect } from 'react';








const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#06192eb0',
    backdropFilter: 'blur(10px)',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  papper: {
    width: '20%',
    height: '1000px',
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#183d5de8',
    
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#183d5dc0',
      
      },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width: '80%',
    marginLeft: '10%',
    marginBottom: '100px',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '95%',
      margin: 'auto',
      marginTop: '0px',
  },

  },
  update: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '100%',
      margin: 'auto',
   
      marginLeft: '20px'
  },
  },
  updateContainer: {
    marginTop: '110px',
    display: 'flex',
    height: 'min-content',
    flexDirection: 'column',
  },
  body: {
    color: '#fff',
    borderBottom: '1px solid rgb(12 76 126)',
    zIndex: '1'
  },
  papper: {
    marginTop: '150px',
    marginTop: '50px',
  },
  tBody: {
    borderSpacing: '0px',
    borderCollapse: 'separate',
  },

  sheetButton: {
    color: '#171717',
    fontWeight: 'bold',
    float: 'right',
    marginRight: '10%',
    marginTop: '-50px',
    [theme.breakpoints.down('xs')]: {
      float: 'left',
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: '20px',
  },
  },
});




export default function CustomizedTables() {
  const classes = useStyles();
  useEffect(() => {
    FectchData()
   }, []);
   const [data1,setData1]=useState(data);


   async function  FectchData(){

    const response = " "
      
      
       var data2 = await response.json();
       setData1(data2);
  
  }
  
   setInterval(FectchData,1000);

  return (
    <div>
      <Winners />
      <TableContainer className={classes.papper}>
        <div className={classes.updateContainer}>
          <Typography className={classes.update} variant="caption">
            Final
          </Typography>
        </div>
      <Button
          className={classes.sheetButton}
          variant="contained"
          color="secondary"
          href="https://docs.google.com/spreadsheets/d/1-QIav_sE-qM1J1JIDxkB8uELGf8Nn3VNHfT3XQrQqyc/edit?usp=sharing"
          target="_blank"
        >
          Feedback Spreadsheet       </Button>
      
        <br></br>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ color: "#3ed1b8" }}>
                Rank
              </StyledTableCell>
              <StyledTableCell align="center">Teamname</StyledTableCell>
              <StyledTableCell align="center">Round 1</StyledTableCell>
              <StyledTableCell align="center">Round 2</StyledTableCell>
              <StyledTableCell align="center">Round 3</StyledTableCell>
              <StyledTableCell align="center">Points</StyledTableCell>
              <StyledTableCell align="center">Tie Breaker</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody className={classes.tBody}>
            

            {data.map((list,index) => (
               
              <StyledTableRow key={index} >
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ color: "#3ed1b8", fontWeight: "bold" }}
                  className={classes.body}
                >
                  {index+1}
                </StyledTableCell>
                <StyledTableCell className={classes.body} align="center">
                  {list.TeamName}
                
                </StyledTableCell>
               <StyledTableCell className={classes.body} align="center">
                  {list.Round1}
                 </StyledTableCell>
                <StyledTableCell className={classes.body} align="center">
                  {list.Round2}
                </StyledTableCell>
                 <StyledTableCell className={classes.body} align="center">
                  {list.Round3}
                </StyledTableCell>
                <StyledTableCell className={classes.body} align="center">
                {list.TotalScore}
                </StyledTableCell> 
                <StyledTableCell className={classes.body} align="center">
                  {list.TieBreak}
                
                </StyledTableCell>
              
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
