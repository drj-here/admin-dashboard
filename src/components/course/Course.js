import "./Course.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows=[
    {   id:'1',
        img:'https://imgs.search.brave.com/sZ62MURw77Af5rFxlKnRECgqtfyxlzyx9HMkC3YHjCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1oYXBweS1z/bWlsaW5nLXdvbWFu/LWNhc3VhbC1jbG90/aGVzLWhvbGRpbmct/bGFwdG9wLXNlbmRp/bmctZW1haWwtaGVy/LWJlc3QtZnJpZW5k/XzIzMTIwOC05NTY4/LmpwZz9zaXplPTYy/NiZleHQ9anBn',
        name:"Complete Python Bootcamp",
        dept:'Development',
        category:'Design',
        sale:'150',
        rating:'4.5',
        earning:'610.5',
        visitor:'24,512'
    },
    {   id:'2',
        img:'https://imgs.search.brave.com/sZ62MURw77Af5rFxlKnRECgqtfyxlzyx9HMkC3YHjCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1oYXBweS1z/bWlsaW5nLXdvbWFu/LWNhc3VhbC1jbG90/aGVzLWhvbGRpbmct/bGFwdG9wLXNlbmRp/bmctZW1haWwtaGVy/LWJlc3QtZnJpZW5k/XzIzMTIwOC05NTY4/LmpwZz9zaXplPTYy/NiZleHQ9anBn',
        name:"Advanced Excel Formulas & Functions",
        dept:'Backend',
        category:'Development',
        sale:'20',
        rating:'5',
        earning:'61',
        visitor:'512'
    },
    {   id:'3',
        img:'https://imgs.search.brave.com/sZ62MURw77Af5rFxlKnRECgqtfyxlzyx9HMkC3YHjCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1oYXBweS1z/bWlsaW5nLXdvbWFu/LWNhc3VhbC1jbG90/aGVzLWhvbGRpbmct/bGFwdG9wLXNlbmRp/bmctZW1haWwtaGVy/LWJlc3QtZnJpZW5k/XzIzMTIwOC05NTY4/LmpwZz9zaXplPTYy/NiZleHQ9anBn',
        name:"Video Editor in Filmora",
        dept:'Video-Creation',
        category:'Photography',
        sale:'56',
        rating:'4.5',
        earning:'610.5',
        visitor:'24,512'
    },
    {   id:'4',
        img:'https://imgs.search.brave.com/sZ62MURw77Af5rFxlKnRECgqtfyxlzyx9HMkC3YHjCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1oYXBweS1z/bWlsaW5nLXdvbWFu/LWNhc3VhbC1jbG90/aGVzLWhvbGRpbmct/bGFwdG9wLXNlbmRp/bmctZW1haWwtaGVy/LWJlc3QtZnJpZW5k/XzIzMTIwOC05NTY4/LmpwZz9zaXplPTYy/NiZleHQ9anBn',
        name:"Online Meeting Facilitation",
        dept:'Marketing',
        category:'Marketing',
        sale:'150',
        rating:'4.5',
        earning:'610.5',
        visitor:'24,512'
    },
    {   id:'5',
        img:'https://imgs.search.brave.com/sZ62MURw77Af5rFxlKnRECgqtfyxlzyx9HMkC3YHjCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1oYXBweS1z/bWlsaW5nLXdvbWFu/LWNhc3VhbC1jbG90/aGVzLWhvbGRpbmct/bGFwdG9wLXNlbmRp/bmctZW1haWwtaGVy/LWJlc3QtZnJpZW5k/XzIzMTIwOC05NTY4/LmpwZz9zaXplPTYy/NiZleHQ9anBn',
        name:"Complete Rust Bootcamp",
        dept:'Language',
        category:'Development',
        sale:'50',
        rating:'4.5',
        earning:'231',
        visitor:'2,512'
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <div style={{background:"rgba(0, 128, 0, 0.151)"}}>
      <h1 style={{color:"#4169E1",padding:"10px"}}>Course Status</h1>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Sale</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
            <TableCell className="tableCell">Earning</TableCell>
            <TableCell className="tableCell">Visitor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.sale}</TableCell>
              <TableCell className="tableCell">{row.rating}</TableCell>
              <TableCell className="tableCell">{row.earning}</TableCell>
              <TableCell className="tableCell">{row.visitor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;