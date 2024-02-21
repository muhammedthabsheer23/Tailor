import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { NewContext } from './App';
import './Home2.css';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
function Home2() {
  const navigate = useNavigate();
  const [data, setData] = useContext(NewContext);
  const [input, setInput] = useState({
    id: "",
    product: "",
    price: "",
    quantity: "",
    totalamount: ""
  });
  const handlechange = (e) => {
    let { name, value } = e.target;
  
    // Only allow integer or floating point values in price and quantity
    if (name === 'price' || name === 'quantity') {
      // Allow integers and a single decimal point
      value = value.replace(/[^\d.]/g, ''); // Remove any non-numeric characters except '.' and digits
      // Allow only one decimal point
      const decimalCount = value.split('.').length - 1;
      if (decimalCount > 1) {
        // If there are more than one decimal point, remove the extra ones
        value = value.slice(0, value.lastIndexOf('.'));
      }
    }
  
    // If the changed field is either "Price" or "Quantity", calculate the total amount
    if (name === 'price' || name === 'quantity') {
      const parsedValue = parseFloat(value);
      const otherValue = parseFloat(input[name === 'price' ? 'quantity' : 'price']); // Get the other value
      const total = isNaN(parsedValue) || isNaN(otherValue) ? '' : (parsedValue * otherValue).toFixed(1);
  
      setInput({ ...input, [name]: value, totalamount: total });
    } else {
      setInput({ ...input, [name]: value });
    }
  };
  

  
  
  const handleDoubleClick = (rowData) => {
    setInput(rowData); // Set the input state to the clicked row data
  };
  const generatePDF = () => {
    const input = document.getElementById('table-container');
  
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        
        // Calculate the aspect ratio of the captured image
        const aspectRatio = canvas.width / canvas.height;
        
        // Calculate the width and height of the image in the PDF
        const imgWidth = width * 0.9; // Adjust this multiplier as needed
        const imgHeight = imgWidth / aspectRatio;
        
        // Calculate the position to center the image horizontally
        const x = (width - imgWidth) / 2;
        
        // Add the image to the PDF with the calculated dimensions and position
        pdf.addImage(imgData, 'PNG', x, 10, imgWidth, imgHeight); // Adjust the y position (10 in this case) as needed
  
        pdf.save('table_data.pdf');
      });
  };
  
  const deleteRow = () => {
    const newData = data.filter(item => item.id !== input.id); // Remove selected row
    setData(newData); // Update data context
    setInput({ // Clear input fields after deletion
      id: "",
      product: "",
      price: "",
      quantity: "",
      totalamount: ""
    });
  };
  const saveToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table_data.xlsx");
  };
  
  const submit = (sub) => {
    sub.preventDefault();
    const newdata = data.filter(item => item.id !== input.id); // Remove previous item
    newdata.push(input); // Add updated item
    setData(newdata);
    setInput({
      id: "",
      product: "",
      price: "",
      quantity: "",
      totalamount: ""
    });
    navigate('/product');
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <Container>
          <Form onSubmit={submit}>
            <Row>
              
          
              <Col>
              <FormLabel className='formlabel id'>ID</FormLabel>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='input' type="text" placeholder='ID' onChange={handlechange} onDoubleClick={handleDoubleClick} name='id' value={input.id} />
                </Form.Group>
              </Col>
             
              <Col>
              <FormLabel className='formlabel product'>PRODUCT</FormLabel>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className='input' type="text" placeholder='Product' onChange={handlechange} onDoubleClick={handleDoubleClick} name='product' value={input.product} />
                </Form.Group>
              </Col>
              <Col>
              <FormLabel className='formlabel price'>PRICE</FormLabel>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control className='input' type="text" placeholder='00' onChange={handlechange} onDoubleClick={handleDoubleClick} name='price' value={input.price} />
              </Form.Group>
              </Col>
            
            </Row>
            <Row>
           
          
             
              <Col>
              <FormLabel className='formlabel quantity'>QUANTITY</FormLabel>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className='input' type="text" placeholder='00'  onChange={handlechange} onDoubleClick={handleDoubleClick} name='quantity' value={input.quantity} />
                </Form.Group>
              </Col>
          
              <Col>
              <FormLabel className='formlabel totalamount'>TOTAL</FormLabel>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className='input' type="text"  placeholder='Total Amount' value={input.totalamount} readOnly />
                </Form.Group>
              </Col>
              <Col>
               
              </Col>
              <Col>
               
               </Col>
            </Row>
            <br /><br />
            <Row>
           
              <Col>
            
            </Col>
            <Col>
               
               </Col>
               <Col>
               
            
               
               </Col>
               <Col>
               
               </Col> 
            <Col>
            
            </Col>
                <Col>
               
               </Col>
               <Col>
               
               </Col>
               <Col>
               
               </Col>
               <Col>
               
               </Col>
               <Col>
               
               </Col>
               <Col>
               
            </Col>
            <Col>
            
            </Col>
            <Col className='bsize'>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br /><br />
              
      
              <Button variant="primary" type="submit" onClick={deleteRow}>
                  Delete
                </Button>
            
                <br /><br />
              <Button variant="primary" onClick={saveToExcel} type="submit">
                  SAVE
                </Button>
                <br /><br />
         
            <Button variant="primary"  onClick={generatePDF}  type="submit">
                  pdf
                </Button>
               </Col>
               <br /><br />
            </Row>
          </Form>
       
        </Container>
      </div>
      <br /><br /><br />
      <div id="table-container">
        <Table striped bordered hover className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((display, index) =>
              <tr key={index} onDoubleClick={() => handleDoubleClick(display)}>
                <td>{display.id}</td>
                <td>{display.product}</td>
                <td>{display.price}</td>
                <td>{display.quantity}</td>
                <td>{display.totalamount}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </main>
  );
}

export default Home2;