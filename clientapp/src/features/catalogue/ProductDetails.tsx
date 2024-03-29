import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Product } from "../../app/models/product";

export default function ProductDetails(){
    const {id}=useParams<{id:string}>();
    const [product,setProducts]=useState<Product | null>(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/Products/${id}`)
        .then(response=>setProducts(response.data))
        .catch(error =>console.log(error))
        .finally(()=>setLoading(false))
    },[id])

    if(loading)return(<h3>loading.....</h3>)
    if(!product)return(<h3>product not found.....</h3>)

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.picUrl} alt={product.name} style={{width:"100%"}}></img>
            </Grid>
            <Grid item xs={6}>
                <h3>{product.name}</h3>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="h4"  color="secondary" >${(product.price/100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}