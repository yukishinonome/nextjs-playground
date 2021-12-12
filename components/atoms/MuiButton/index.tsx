import { VFC } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const MuiButton: VFC = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  )
}

export default MuiButton
