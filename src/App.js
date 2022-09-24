import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Top from './components/Top';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Message from './components/Message';
import NotFound from './components/NotFound';
import Nesting from './components/Nesting';
import VirtualDOM from './components/test/VirtualDOM';
import Reference from './components/test/Reference';
import SnackbarTop from './components/snackbar/Top';
import DataGridTop from './components/datagrid/DataGridTop';
import Swallower from './components/datalifting/Swallower';
import Registration from './pages/Registration';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

/**
 * Helloを付与する関数です。
 * @param {string} message メッセージ
 * @return {string} 加工された文字列
 */
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello React Router
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route index element={<Top />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="greeting" element={<Message message="Hello, World!" />} />
        <Route path="farewell" element={<Message message="Goodbye!" />} />
        <Route path="nesting" element={<Nesting />}>
          <Route
            path="greeting"
            element={<Message message="Hello, World!" />}
          />
          <Route path="farewell" element={<Message message="Goodbye!" />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="test/virtualDOM" element={<VirtualDOM />} />
        <Route path="test/reference" element={<Reference />} />
        <Route path="test/snackbar" element={<SnackbarTop />} />
        <Route path="test/datagrid" element={<DataGridTop />} />
        <Route path="test/datalifting" element={<Swallower />} />
        <Route path="register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
