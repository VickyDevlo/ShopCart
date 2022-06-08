import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";

const Order = () => {
  return (
    <div>
      <Table>
        <TableBody>
        <TableRow>
          <TableCell> Id </TableCell>
          <TableCell> E-mail </TableCell>
          <TableCell> Address </TableCell>
          <TableCell> Products </TableCell>
        </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>test@gmail.com</TableCell>
            <TableCell>Testing</TableCell>
            <TableCell>Item1</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );
};

export default Order;
