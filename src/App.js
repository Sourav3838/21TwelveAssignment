import React from 'react'
import {
  ThemeProvider
} from "@material-ui/core/styles";
import { Routes, Route } from "react-router-dom";

import { theme } from './theme';
import Users from './pages/users/users';
import Albums from './pages/albums/albums';
import AlbumDetail from './pages/albumDetail/albumDetail';
import NotFound from './pages/notFound/notFound';
import Error from './pages/error/error';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id/albums" element={<Albums />} />
        <Route path="/album/:albumId/:albumTitle" element={<AlbumDetail />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App