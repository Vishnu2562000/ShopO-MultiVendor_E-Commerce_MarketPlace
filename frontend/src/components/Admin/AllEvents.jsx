import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../../server";

//removed events from dependency array as it leads to infinite loop of renders and re-renders.
const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${server}/event/admin-all-events`, { withCredentials: true })
      .then((res) => {
        setEvents(res.data.events);
      });
  }, []);

  //applied useMemo hook to columns array as it is static and can use memoized value on re-renders instead of
  //creating a new array again.
  const columns = useMemo(
    () => [
      { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
      {
        field: "name",
        headerName: "Name",
        minWidth: 180,
        flex: 1.4,
      },
      {
        field: "price",
        headerName: "Price",
        minWidth: 100,
        flex: 0.6,
      },
      {
        field: "Stock",
        headerName: "Stock",
        type: "number",
        minWidth: 80,
        flex: 0.5,
      },
      {
        field: "sold",
        headerName: "Sold out",
        type: "number",
        minWidth: 130,
        flex: 0.6,
      },
      {
        field: "Preview",
        flex: 0.8,
        minWidth: 100,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/product/${params.id}?isEvent=true`}>
                <Button>
                  <AiOutlineEye size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ],
    []
  ); // Empty dependency array as there are no dependencies

  //useMemo for rows to only re-calculate the row when events change and not on other re-renders.
  const row = useMemo(() => {
    return events
      ? events.map((item) => ({
          id: item._id,
          name: item.name,
          price: `US$ ${item.discountPrice}`,
          Stock: item.stock,
          sold: item.sold_out,
        }))
      : [];
  }, [events]);

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid
        rows={row}
        columns={columns}
        rowsPerPageOptions={[10, 25, 50]}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default AllEvents;
