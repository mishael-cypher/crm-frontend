import React from 'react'
import { Table } from 'react-bootstrap'

export const TicketTable = () => {
  return (
    <Table  striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ssl Issues</td>
                <td>client response pending</td>
                <td>2022-4-12</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl Issues</td>
                <td>client response pending</td>
                <td>2022-4-12</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ssl Issues</td>
                <td>client response pending</td>
                <td>2022-4-12</td>
            </tr>
        </tbody>
    </Table>
  )
}
   