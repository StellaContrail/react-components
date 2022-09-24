import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

const DeleteButtonDialog = ({rowId, params}) => {
  const [open, setOpen] = useState(false); // 確認ダイアログの表示/非表示

  const handleOpen = () => {
    console.log(params.row.code);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteRow = (rowId, e) => {
    // (ここで削除処理)
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        削除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'確認'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ID「{rowId}」を本当に削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="primary"
            autoFocus
          >
            やめる
          </Button>
          <Button onClick={(e) => deleteRow(rowId, e)} color="primary">
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const CustomDataGrid = (props) => {
  // カラム
  const columns = [
    // 削除ボタン
    {
      field: 'deleteBtn',
      headerName: '削除',
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <DeleteButtonDialog rowId={params.id} params={params} />
      ),
    },
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'title', headerName: '本のタイトル', width: 250},
  ];

  // データ
  const rows = [
    {id: 1, title: '君の膵臓をたべたい', code: 5},
    {id: 2, title: '容疑者Ｘの献身', code: 4},
    {id: 3, title: 'コンビニ人間', code: 3},
    {id: 4, title: '蹴りたい背中', code: 2},
    {id: 5, title: '世界の中心で、愛を叫ぶ', code: 1},
  ];

  return (
    <div style={{height: 400, width: 600}}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default CustomDataGrid;
