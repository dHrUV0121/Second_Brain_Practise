// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import {Button} from "./components/Button"
import { Card } from './components/Card'
import { CreatePostModel } from './components/CreatePostModel'
import { PlusIcon } from './components/icons/plusIcons'
import { ShareIcon } from './components/icons/shareIcon'

function App() {
  return (
    <div className='p-4'>
      <CreatePostModel open={true}></CreatePostModel>
      <div className='flex justify-end gap-3 p-4'>
        <Button startIcon={<PlusIcon size='md'/>} variant='primary' text='Add Content' size='md'></Button>
        <Button startIcon={<ShareIcon size='md'></ShareIcon>} variant='secondary' text='Share Brain' size='md'></Button>
      </div>
      <div className='flex gap-3'>
        <Card title='Post 1' link='https://x.com/congphuc_/status/2096856748212748531?s=20' type='twitter'></Card>
        <Card title='Post 2' link='https://www.youtube.com/watch?v=75hRtWaVByE' type='youtube'></Card>
      </div>
    </div>
  )
}

export default App
