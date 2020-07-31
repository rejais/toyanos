import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MainC from './web3/Main'
import web3 from './web3/web3'
import Mainbody from './CreateProfile'

class Mianbody extends Component{
  //should get the new Fee
captureNewFee=(event)=> {
  event.stopPropagation()
event.preventDefault()
this.state.fee = event.target.value
}
captureNewHash=(event=>{
  event.stopPropagation()
  event.preventDefault()
  this.state.ipfsHash = event.target.value
})
setNewFee=async()=>{
//const NewFee= //input from the frontend

//this will call the contract to set a new fee
MainC.methods.setFee(NewFee,"${this.state.address}").send().then(function(res){
  console.log(fee);
})
this.setState({fee});
}

setNewHash=async()=>{
//const NewHash=//should be fetched through the ipfs document
try{
MainC.methods.updateHash("${this.state.address}",NewHash).send().then(function(){
  //should print out the error message from the contract
  catch(error){
    console.log(error);
  }}
})
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

export default function Create () {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
        <LockOutlinedIcon style={{ fontSize: 50 }} /> ``
        {/* </Avatar> */}
        <Typography component='h1' variant='h5'>
          Edit your owned Identity Profile
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
            <Grid>
              <Fab color='primary' aria-label='add'>
                <AddIcon />
              </Fab>
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
            color='warning'
            className={classes.submit}
          >
            Save Identity
          </Button>
        </form>
      </div>
    </Container>
  )
}
