import {React, useMemo} from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'


export const BasicTable = () => {

  const columns = useMemo(()=> COLUMNS, [])
  const data = useMemo(() => data1, [])


  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow} = tableInstance;

  return (
    <table{...getTableProps()}>
      <thead>{
        headerGroups.map((headerGroup)=>(
            <tr{...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map((column)=>(
                <th{...column.getHeaderGroupProps}>{column.render('Header')}</th>
              ))
            }
        </tr>
        ))
      }
      </thead>
        <tbody{...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return(
              <tr{...row.getRowProps()}>
              {
                row.cells.map((cell)=> {
                  return <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                })
              }


              </tr>
            )
          })
        }

        </tbody>
    </table>
  )
}

const data1 = [
        {
            "id": "28449",
            "codigo_interno": "32784",
            "descripcion": " Maleta PARANA Comun Mediano",
            "precio_costo": "15.00",
            "descuento": "0",
            "precio_venta": "22.00",
            "created": "2019-10-20 15:16:18"
        },
        {
            "id": "28808",
            "codigo_interno": "33117",
            "descripcion": " Pantalon/D Jeans OLIVON 517",
            "precio_costo": "7.93",
            "descuento": "0",
            "precio_venta": "18.00",
            "created": "2019-10-20 15:16:18"
        },
        {
            "id": "6085",
            "codigo_interno": "00038900",
            "descripcion": "(35408)Campera/Infantil Denyse 6618",
            "precio_costo": "0.00",
            "descuento": "0",
            "precio_venta": "29.00",
            "created": "2019-10-20 15:16:18"
        },
        {
            "id": "22286",
            "codigo_interno": "2722",
            "descripcion": "Abrigos de Invierno.-10.00 E",
            "precio_costo": "10.00",
            "descuento": "0",
            "precio_venta": "20.00",
            "created": "2019-10-20 15:16:18"
        }
    ]
