import React, { useState } from 'react'
import './User.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import userRows from './DomyData';
import {  Link } from "react-router-dom";


const User = () => {
//delete member
const [data , useData] = useState(userRows)


  const HandelDeleteItem = (id) =>{
  useData( data.filter((item)=>item.id !== id ))
}
// start columns tabel

  const columns = [
 
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150  },
    { field: 'age',headerName: 'Age',type: 'number', width: 90, },
    { field: 'status', headerName: 'Status', width: 150  },
    { field: 'transaction', headerName: 'transaction', width: 150  },
    { field: 'email', headerName: 'email', width: 150  },
    { field: 'Remove', headerName: 'Remove', width: 130 ,renderCell: (params) =>{
        return (
            <div>
                <button className='add-user' onClick={ () => HandelDeleteItem(params.row.id)} ><DeleteOutlineIcon /></button>
            </div>
        )
    } },
    { field: 'edit', headerName: 'edit', width: 130 ,renderCell: (params) =>{
      return (
          <div>
            <Link to={"/User/"+params.row.id}  >
              <button  ><EditIcon className='edit-user'/></button>
           
              </Link>
          </div>
      )
  } },
  
    { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, },
  ];
// end columns tabel



  return (
    <div className='user' style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={data} //domy data
        columns={columns}
        pageSize={15} // how many columns
        rowsPerPageOptions={[7]}
        checkboxSelection
        
      /> 
      <div></div>
   
      
       

      </div>
  )
}

export default User