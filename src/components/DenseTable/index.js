import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  background: {
    background: '#000'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Babu Will', 'R$ 1,00', 6.0, 24, 4.0),
  createData('Abel das entrega', 'R$ 10.000.259,00', 9.0, 37, '985.000.259,00'),
  createData('Ingridão', 'R$ 1,00', 16.0, 24, 6.0),
  createData('Ludio', 'R$ 1,00', 3.7, 67, 4.3),
  createData('Lilica', 'R$ 1,00', 16.0, 49, 3.9),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Acionistas</TableCell>
            <TableCell align="right">Investido</TableCell>
            <TableCell align="right">Débitos</TableCell>
            <TableCell align="right">Juros</TableCell>
            <TableCell align="right">Saldo Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
