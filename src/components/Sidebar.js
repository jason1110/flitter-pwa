import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter Icon */}
            <TwitterIcon className='sbTwitterIcon'/>

            {/* SidebarOptions */}
            <SidebarOption active text={'Home'} Icon={HomeIcon}/>
            <SidebarOption text={'Explore'} Icon={SearchIcon}/>
            <SidebarOption text={'Notifications'} Icon={NotificationsNoneIcon} />
            <SidebarOption text={'Messages'} Icon={MailOutlineIcon}/>
            <SidebarOption text={'Bookmarks'} Icon={BookmarkBorderIcon}/>
            <SidebarOption text={'Lists'} Icon={ListAltIcon}/>
            <SidebarOption text={'Profile'} Icon={PersonOutlineIcon}/>
            <SidebarOption text={'More'} Icon={MoreHorizIcon}/>
            
            

            {/* Tweet Button */}
            <Button variant='outlined' className='tweetButton' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
