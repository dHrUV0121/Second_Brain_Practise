import { useState } from 'react'
import '../App.css'
import {Button} from "../components/Button"
import { Card } from '../components/Card'
import { CreatePostModel } from '../components/CreatePostModel'
import { PlusIcon } from '../components/icons/plusIcons'
import { ShareIcon } from '../components/icons/shareIcon'
import { SideBar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {
  const [modelOpen, setModelOpen]= useState(false);
  const contents= useContent();

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
          {contents.map(({title, link, type}) => <Card  
            link={link}
            title={title}
            type={type}></Card>)}
        </div>
      </div>
    </div>
  )
}
