import React, {Component} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MainC from './web3/Main'
import web3 from './web3/web3'



class MainBody extends Component {

  state = {
    ipfsHash:null,
    buffer:'',
    ethAddress:'',
    fee: '',
    blockNumber:'',
    transactionHash:'',
    gasUsed:'',
    txReceipt:'',
    sendingAccount:'',
    name: '',
    key: '',
    email: '',
    phone: '',
    address: '',
    isLoggedIn:false
  };
//captured from frontend
  captureName =(event) => {
event.stopPropagation()
event.preventDefault()
this.state.name = event.target.value;
  };
//captured from frontend
  captureEmail=(event) => {
    event.stopPropagation()
    event.preventDefault()
    this.state.email= event.target.value;
  };
    //captured from web3
  captureAddress= (event) => {
    event.stopPropagation()
    event.preventDefault()
    this.state.ethAddress= event.target.value;
  };
  //set User Contract details i.e Address,fee and ipfs Hash
setUserContractDetails = async() => {
  const ethAddress = web3.eth.accounts[0]; //current user address
  MainC.methods.becomeADataLord("${this.state.address}","${this.state.fee}","${this.state.ipfsHash}").send().then(function(res){
    console.log(res)//this should print out the current fee of the new dataLord 
  })
  this.setState({ethAddress});
}
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

//this gets the current no of DataLords
//i am using console.log to print the results here because i do not know how to display these in the webpage
var currentNo= MainC.methods.getNoOfDatalords().call().then(function(res){
  console.log(res);
})

//var currentNetwork= web3.currentProvider;
//console.log(currentNetwork);  

export default function Create () {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
        <LockOutlinedIcon style={{ fontSize:50}} /> ``
        {/* </Avatar> */}
        <Typography component='h1' variant='h5'>
          Create your owned Identity Profile
        </Typography>``
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <TextField
                autoComplete='fname'
                name='fullName'
                variant='outlined'
                required
                fullWidth
                id='fullName'
                label='Full Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='aliasName'
                label='Alias'
                name='aliasName'
                autoComplete='lname'
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='phone'
                label='Phone Number'
                type='phone'
                id='phone'
                autoComplete='current-password'
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='am aware this profile are saved on decentralized platform'
              />
            </Grid> */}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Create Identity
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an Identity ? Prove it 
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
