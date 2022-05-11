import React, { useState } from "react";
import type { ReactElement } from "react";

// ICON start
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/MailOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BookIcon from '@mui/icons-material/BookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// ICON end

import {
  Typography,
  Drawer,
  Toolbar,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  Box,
  Avatar,
  ListItemAvatar,
  Container,
} from "@mui/material";

import { useTranslation } from "next-i18next"
import { useRouter } from 'next/router'


type FindMe = [string, ReactElement, string][];
type MySite = [string, ReactElement, string][];
type Links = [string, ReactElement | string, string][];

const HomeLayOut = ({ children }: { children: ReactElement }) => {
  const { t } = useTranslation('drawer');
  const [open, setOpen] = useState(false);
  const route = useRouter();

  const HandleJump = (url: string) => window.open(url);
  const HandleNavigate = (url: string): void => {
    setOpen(false);
    route.push(url);
  }

  const find_me: FindMe = [
    ['Github', <GitHubIcon key={0} />, 'https://github.com/soxft']
  ];

  const my_site: MySite = [
    ['blog', <BookIcon key={0} />, 'https://blog.xsot.cn'],
    ['openid', <CodeIcon key={1} />, 'https://9420.ltd'],
    ['timeletters', <MailIcon key={2} />, 'https://www.timeletters.cn'],
  ];

  const links: Links = [
    ['泽', "Z", 'https://blog.stzo.cn'],
    ['源源日记', "Y", 'https://blog.bsot.cn'],
    ["Evolution Host", "E", "https://evolution-host.com"]
  ];

  return <>
    <AppBar
      position="fixed"
      color="inherit"
      className="mainAppBar"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setOpen(true)}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="overline"
          noWrap
          component="div"
          sx={{ fontSize: 20 }}
        >
          XCSOFT
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    {/* 侧边抽屉 */}
    <Drawer
      anchor='left'
      open={open}
      ModalProps={{
        keepMounted: true,
      }}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          width: 250,
          bgcolor: "background.default",
        }}
        role="presentation"
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(false)}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {/* INDEX */}
        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "background.default",
              }}
            >
              {t('subtitle_index')}
            </ListSubheader>
          }
        >
          <ListItem
            button
            onClick={() => HandleNavigate('/')}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: "text.secondary" }}
              primary={t('home')}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => HandleNavigate('/project')}
          >
            <ListItemIcon>
              <AccountTreeOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: "text.secondary" }}
              primary={t('project')}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => HandleNavigate('/about')}
          >
            <ListItemIcon>
              <ClassOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: "text.secondary" }}
              primary={t('about')}
            />
          </ListItem>
        </List>
        <Divider />
        {/* 我的网站 */}
        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "background.default",
              }}
            >
              {t('subtitle_mysite')}
            </ListSubheader>
          }
        >
          {
            my_site.map((item, index) => {
              return (
                <ListItem
                  onClick={() => HandleJump(item[2])}
                  button
                  key={index}
                >
                  <ListItemIcon>
                    {item[1]}
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "text.secondary" }}
                    primary={t(item[0])}
                  />
                </ListItem>
              );
            })
          }
        </List>
        <Divider />
        {/* 找到我 */}
        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "background.default",
              }}
            >
              {t('subtitle_findme')}
            </ListSubheader>
          }
        >
          {
            find_me.map((item, index) => {
              return (
                <ListItem
                  onClick={() => HandleJump(item[2])}
                  button
                  key={index}
                >
                  <ListItemIcon>
                    {item[1]}
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "text.secondary" }}
                    primary={t(item[0])}
                  />
                </ListItem>
              );
            })
          }
        </List>
        <Divider />
        {/* 推荐链接 */}
        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "background.default",
              }}
            >
              {t('subtitle_suggest')}
            </ListSubheader>
          }
        >
          {
            links.map((item, index) => {
              return (
                <ListItem
                  onClick={() => HandleJump(item[2])}
                  button
                  key={index}
                >
                  <ListItemAvatar>
                    <Avatar sx={{
                      bgcolor: "background.default",
                      color: "text.secondary",
                      width: 28,
                      height: 28
                    }}>{item[1]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    style={{ color: "text.secondary" }}
                    primary={item[0]}
                  />
                </ListItem>
              );
            })
          }
        </List>
      </Box>
    </Drawer>
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          mx: 'auto',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {children}
      </Container>
    </Box>
    <Typography
      variant="caption"
      sx={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        opacity: 0.3,
      }}
      color="text.secondary"
    >
      &ensp;Copyright {new Date().getFullYear()} xcsoft All Rights Reserved.
    </Typography>
  </>;
}

export default HomeLayOut;