import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imagem} alt={nome} />
      <CardContent>
        <Typography variant="h5" component="div">{nome}</Typography>
        <Typography variant="body2" color="text.secondary">{descricao}</Typography>
        <Typography variant="h6">R$ {preco}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Comprar</Button>
      </CardActions>
    </Card>
  );
}