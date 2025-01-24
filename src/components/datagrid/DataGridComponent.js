import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ReactPaginate from "react-paginate";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const DataGridComponent = () => {
  // Mock data for demonstration
  const initialData = Array.from({ length: 97 }, (_, index) => ({
    id: index + 1,
    modelName: `Model ${index + 1}`,
    modelType: "Extraction",
    description: "Edit Customer Data",
    createdOn: "2024-02-29",
    lastTrainedOn: "2024-02-29",
    status: "Active",
  }));

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [newModel, setNewModel] = useState({
    modelName: "",
    modelType: "",
    llm: "Neural (recommended)",
    description: "",
  });

  // Modal toggle
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  // Create a new model
  const handleCreateModel = () => {
    const newEntry = {
      id: data.length + 1,
      modelName: newModel.modelName,
      modelType: newModel.modelType,
      llm: newModel.llm,
      description: newModel.description,
      createdOn: new Date().toISOString().split("T")[0],
      lastTrainedOn: new Date().toISOString().split("T")[0],
      status: "Active",
    };
    setData([newEntry, ...data]);
    setFilteredData([newEntry, ...data].slice(0, 10));
    setNewModel({ modelName: "", modelType: "", llm: "Neural (recommended)", description: "" });
    setIsModalOpen(false);
  };

  // Search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = data.filter(
      (row) =>
        row.modelName.toLowerCase().includes(query) ||
        row.description.toLowerCase().includes(query)
    );
    setFilteredData(filtered.slice(0, 10));
    setCurrentPage(0);
  };

  // Pagination
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    const offset = selected * 10;
    setFilteredData(data.slice(offset, offset + 10));
  };

  const startResult = currentPage * 10 + 1;
  const endResult = Math.min(startResult + 9, data.length);

  return (
    <div className="p-6 rounded-md bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="font-medium text-gray-800 mb-2 md:mb-0">Model Library</h1>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleModalToggle}
          style={{backgroundColor: "#4F46E5"}}
          className="rounded-lg bg-[#4F46E5] text-sm sm:w-auto w-full"
        >
          Create New Model
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-4 mb-4">
        <TextField
          placeholder="Search by Name, ID"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full sm:w-[300px] md:w-[400px] rounded-md bg-gray-50 text-gray-400"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
                outline: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
                outline: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
                outline: 'none',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              outline: 'none',
            },
            '& .Mui-focused': {
              outline: 'none',
              boxShadow: 'none',
            },
            '& .MuiInputBase-input': {
              fontSize: '0.875rem',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch style={{ fontSize: '1.5rem', color: '#9ca3af' }} />
              </InputAdornment>
            ),
          }}
        />

        <div className="flex flex-col md:flex-row items-center sm:space-y-4 space-x-0 md:space-x-4 mt-4 md:mt-0">
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              border: 'none',
              color: 'gray',
              fontSize: '0.875rem',
              textTransform: 'none',
              backgroundColor: '#f9fafb',
              '&:hover': {
                border: 'none',
                backgroundColor: '#f3f4f6',
              },
              '&.Mui-focused': {
                border: 'none',
                backgroundColor: '#f3f4f6',
              },
              '&.MuiButton-outlined': {
                border: 'none',
              },
            }}
            className="h-[40px] sm:w-[140px] md:w-[160px] text-gray-600 font-medium"
          >
            Filters
          </Button>
          <Button
            variant="outlined"
            startIcon={<CiCalendarDate />}
            sx={{
              border: 'none',
              color: 'gray',
              fontSize: '0.875rem',
              textTransform: 'none',
              backgroundColor: '#f9fafb',
              '&:hover': {
                border: 'none',
                backgroundColor: '#f3f4f6',
              },
              '&.Mui-focused': {
                border: 'none',
                backgroundColor: '#f3f4f6',
              },
              '&.MuiButton-outlined': {
                border: 'none',
              },
            }}
            className="h-[40px] sm:h-[50px] sm:w-[140px] md:w-[200px] text-gray-600 font-medium"
          >
            April 11 - April 24
          </Button>
        </div>
      </div>

      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-white">
          <tr>
            {["Model Name", "Model Type", "Description", "Created On", "Last Trained On", "Status", "Action"].map((header) => (
              <th
                key={header}
                className="py-3 px-4 text-left text-sm font-medium"
              >
                <div className="flex items-center space-x-2">
                  <span>{header}</span>
                  <IconButton size="small">
                    <BiSortAlt2 className="text-gray-400" />
                  </IconButton>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr
              key={row.id}
              className="border-t hover:bg-gray-50 text-sm text-gray-700"
            >
              <td className="py-3 px-4">{row.modelName}</td>
              <td className="py-3 px-4">{row.modelType}</td>
              <td className="py-3 px-4">{row.description}</td>
              <td className="py-3 px-4">{row.createdOn}</td>
              <td className="py-3 px-4">{row.lastTrainedOn}</td>
              <td className="py-2 my-3 px-4 rounded-md h-[40px] w-[100px] bg-green-100 text-green-600 text-center flex items-center justify-center">
                {row.status}
              </td>
              <td className="py-3 px-4 text-gray-500">
                <IconButton>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 flex-col sm:flex-row">
        <p className="text-gray-600 text-xs">
          Showing {startResult} to {endResult} of {data.length} results
        </p>

        <ReactPaginate
          previousLabel={
            <IconButton size="medium" sx={{ height: "30px", width: "30px", color: '#2563eb', backgroundColor: "#dbeafe" }}>
              <MdKeyboardArrowLeft />
            </IconButton>
          }
          nextLabel={
            <IconButton size="medium" sx={{ height: "30px", width: "30px", color: '#2563eb', backgroundColor: "#dbeafe" }}>
              <MdKeyboardArrowRight />
            </IconButton>
          }
          pageCount={Math.ceil(data.length / 10)}
          onPageChange={handlePageChange}
          containerClassName={"flex items-center space-x-2 text-blue-600 text-sm"}
          pageClassName={"px-3 py-1"}
          activeClassName={"bg-blue-600 rounded-full text-white"}
        />
      </div>

      <Dialog
        className="rounded-xl"
        open={isModalOpen}
        onClose={handleModalToggle}
        fullWidth
        maxWidth="sm"
      >
        <div className="flex items-center justify-between border-b px-4 py-2">
          <DialogTitle className="text-lg font-semibold">Create New Model</DialogTitle>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleModalToggle}
            aria-label="Close"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        <DialogContent>
          <div className="w-full my-4">
            <label className="text-sm font-medium text-gray-600">Model Name</label>
            <TextField
              placeholder="Enter the model name"
              value={newModel.modelName}
              onChange={(e) =>
                setNewModel({ ...newModel, modelName: e.target.value })
              }
              fullWidth
              margin="dense"
              InputLabelProps={{ shrink: false }}
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-medium text-gray-600">Model Type</label>
            <TextField
              select
              placeholder="Select the model type"
              value={newModel.modelType}
              onChange={(e) =>
                setNewModel({ ...newModel, modelType: e.target.value })
              }
              fullWidth
              margin="dense"
              InputLabelProps={{ shrink: false }}
            >
              <MenuItem value="Classification">Classification</MenuItem>
              <MenuItem value="Regression">Regression</MenuItem>
              <MenuItem value="Clustering">Clustering</MenuItem>
            </TextField>
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-medium text-gray-600">LLM</label>
            <TextField
              select
              placeholder="Select the LLM type"
              value={newModel.llm}
              onChange={(e) => setNewModel({ ...newModel, llm: e.target.value })}
              fullWidth
              margin="dense"
              InputLabelProps={{ shrink: false }}
            >
              <MenuItem value="Neural (recommended)">Neural (recommended)</MenuItem>
              <MenuItem value="Rule-Based">Rule-Based</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </TextField>
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-600">Model Description</label>
            <TextField
              placeholder="Enter a description for the model"
              value={newModel.description}
              onChange={(e) =>
                setNewModel({ ...newModel, description: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
              margin="dense"
              InputLabelProps={{ shrink: false }}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleModalToggle}
            sx={{
              flex: 1,
              borderRadius: "10px",
              backgroundColor: "#e0e7ff",
              color: "#3730a3",
              marginX: "14px"
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: 1,
              borderRadius: "10px",
              backgroundColor: "#3730a3",
              color: "#e0e7ff",
              marginX: "14px"
            }}
            onClick={handleCreateModel}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default DataGridComponent;
