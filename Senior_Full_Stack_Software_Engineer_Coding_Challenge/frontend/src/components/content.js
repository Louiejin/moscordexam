import React, {useState} from "react";
import {Typography,Grid, Card, 
        CardMedia, CardContent, CardActions, Link, TablePagination } from "@material-ui/core";
import { excerptCleaner, dateFormat } from "../utility";

export default function Content(props){
    const [page, setPage] = useState(0);
    const [item, setItem] = useState(6)

    const onChangePageHandler = (event, newPage) => {
        setPage(newPage);
    };

    const onChangePageItemHandler = (event, newPage) => {
        setItem(newPage);
    };


    return(
        <div>
            <TablePagination 
                component='div'
                count={props.articles.length}
                rowsPerPageOptions={[]}
                rowsPerPage={item}
                page={page}
                onChangePage={onChangePageHandler}
                onChangeRowsPerPage={onChangePageItemHandler}
            />
            <Grid container spacing={3} >
                {props.articles.slice(page*item, page*item+item).map((aritcle, idx)=>{
                    return(
                        <Grid item key={idx} xs={12} md={4} lg={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={aritcle.urlToImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h6" align="left">
                                    {aritcle.title}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2" color="textSecondary" align="left">
                                        {dateFormat(aritcle.publishedAt)}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        { excerptCleaner(aritcle.content)}
                                    </Typography>
                                </CardContent>
                                <CardActions className="newsCardAction">
                                    <Link href={aritcle.url}>
                                        Read More
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <TablePagination 
                component='div'
                count={props.totalArticles}
                rowsPerPageOptions={[]}
                rowsPerPage={item}
                page={page}
                onChangePage={onChangePageHandler}
            />
        </div>
    )
}