import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {TVerticalNav} from "@/components/VerticalNav";
import {ClickAwayListener} from "@mui/base";
import Link from "next/link";
import {DehazeRounded} from "@mui/icons-material";

type TReceive = {
    navigation: TVerticalNav[]
}

export default function NavBarList({navigation}: TReceive) {
    const [show, setShow] = useState(false)

    return <>
        <button className={"text-xl flex items-center gap-x-3"} onClick={() => setShow(true)}>
            <DehazeRounded/>
            Navegación
        </button>
        <div className={"absolute"}>
            {show &&
                <ClickAwayListener onClickAway={() => setShow(false)}>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        {
                            navigation.map((item, index) => {
                                return <ItemExpandible title={item.title} elements={item.elements}
                                                       current={item.current} key={item.title}/>
                            })
                        }
                    </List>
                </ClickAwayListener>
            }
        </div>
    </>
}

function ItemExpandible(item: TVerticalNav) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    };

    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary={item.title}/>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>

        {item.elements.map(j => {
            return <Link href={j.href} key={j.href}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={j.name}/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </Link>
        })}
    </>
}