import { useState } from 'react'
import '../App.css'
import {Button} from "../components/Button"
import { Card } from '../components/Card'
import { CreatePostModel } from '../components/CreatePostModel'
import { PlusIcon } from '../components/icons/plusIcons'
import { ShareIcon } from '../components/icons/shareIcon'
import { SideBar } from '../components/Sidebar'

export function Dashboard() {
  const [modelOpen, setModelOpen]= useState(false);

  return (
    <div>
      <SideBar></SideBar>
      <div className='p-4 ml-50 bg-gray-50'>
        <CreatePostModel open={modelOpen} onClose={()=> {
          setModelOpen(false);
        }}></CreatePostModel>
        <div className='flex justify-end gap-3 p-4'>
          <Button onClick={()=> {
            setModelOpen(true);
          }} startIcon={<PlusIcon size='md'/>} variant='primary' text='Add Content' size='md'></Button>
          <Button startIcon={<ShareIcon size='md'></ShareIcon>} variant='secondary' text='Share Brain' size='md'></Button>
        </div>
        <div className='flex gap-3'>
          <Card title='Post 1' link='https://x.com/congphuc_/status/2096856748212748531?s=20' type='twitter'></Card>
          <Card title='Post 2' link='https://www.youtube.com/watch?v=75hRtWaVByE' type='youtube'></Card>
        </div>
      </div>
    </div>
  )
}
