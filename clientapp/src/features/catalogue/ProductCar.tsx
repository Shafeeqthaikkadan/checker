import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;

}

export default function ProductCar({ product }: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor:"secondary.main"}} >
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx:{fontWeight:"bold",color:"primary.main"}
                }}
            />
            <CardMedia
                sx={{ height: 140 ,backgroundSize:"contain" ,bgcolor:"primary.light"}}
                image={product.picUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color={"primary"} >
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand}/{product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Card</Button>
                <Button size="small" component={Link} to={`/catalogue/${product.id}`}>View</Button>
            </CardActions>
        </Card>

    )


}