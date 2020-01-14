import React from "react";
import { Link,Container,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    root:{
        textAlign:'center'
    }
})

export default function Page404(){
    const classes = styles();
    return (
        <div className='main'>
                <Container maxWidth="lg" >
                    <Typography gutterBottom variant="h1" className={classes.root} component="h1">404</Typography>
                    <Typography variant="subtitle2" gutterBottom className={classes.root}>
                        Page Not Found 
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom className={classes.root}>
                        <Link href='/'>Home</Link>
                    </Typography>
                </Container>              
        </div>
    )
}