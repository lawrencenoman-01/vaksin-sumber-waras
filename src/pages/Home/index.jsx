import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoIcon from "@mui/icons-material/Info";
import Classes from './style.module.scss'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import { getAllVaksin } from "./actions";
import { deleteVaksinByID } from "./actions";
import { selectHome } from "./selectors";
import { createStructuredSelector } from "reselect";

const Home = ({ vaksin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllVaksin());
  }, [dispatch]);

  const handleDeleteVaksin = (id) => {
    // Dispatch the deleteVaksinByID action with the ID of the vaksin item to delete
    dispatch(deleteVaksinByID(id))
      .then(() => {
        // After successful deletion, fetch all vaksin data again
        return dispatch(getAllVaksin());
      }).then(() => {
        // Show a SweetAlert2 success message
        Swal.fire({
          title: 'Deleted!',
          text: 'The vaksin has been deleted.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }).catch((error) => {
        // Handle any errors here
        console.error("Error deleting vaksin:", error);
      });
  };

  const vaksinData = vaksin || [];
  console.log(vaksinData, "Data Vaksin Sudah Didapat");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredVaksinData =
    categoryFilter === "all"
      ? vaksinData
      : vaksinData.filter((data) => data.status === categoryFilter);

  console.log(filteredVaksinData, "Data Vaksin Sudah Di Filter");

   // Function to handle navigation to the Article component
   const navigateToVaksin = (id) => {
    navigate(`/detail/${id}`);
  };


  return (
    <div className="content">
      <div className={Classes.isiKonten}>
      <FormControl variant="outlined">
          <InputLabel htmlFor="category-filter">Filter Category</InputLabel>
          <Select
            label="Filter Category"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            inputProps={{
              name: "category-filter",
              id: "category-filter",
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="sudah">Sudah</MenuItem>
            <MenuItem value="belum">Belum</MenuItem>
          </Select>
        </FormControl>
        <div className="tabel-konten">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Dosis 1</TableCell>
                  <TableCell>Dosis 2</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredVaksinData?.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.fullName}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phoneNumber}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>{data.dosis1}</TableCell>
                    <TableCell>{data.dosis2}</TableCell>
                    <TableCell>{data.status}</TableCell>
                    <TableCell>
                      <InfoIcon
                        onClick={() => navigateToVaksin(data.id)}
                      />
                      <DeleteOutlineIcon
                  onClick={() => handleDeleteVaksin(data.id)} // Handle delete action
                />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  vaksin: selectHome,
});

export default connect(mapStateToProps)(Home);
