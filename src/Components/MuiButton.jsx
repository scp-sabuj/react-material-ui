// import React from 'react'
import { Stack, Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} display='block' direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} >Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableElvation>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableRipple>Send</Button>
            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon />
            </IconButton>
            <Button variant='contained' endIcon={<SendIcon />}  onClick={ ()=> alert('Hello') }>Send</Button>
        </Stack>
    </Stack>
  )
}
