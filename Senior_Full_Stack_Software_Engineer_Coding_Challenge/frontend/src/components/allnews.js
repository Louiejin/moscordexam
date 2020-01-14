import React from "react";
import { Container,Typography, CircularProgress, AppBar, Toolbar,Icon } from "@material-ui/core";
import { Web } from "@material-ui/icons";
import { axiosConfig,basicAuth } from "../utility";
import axios from "axios";
import Content from "./content";
import Source from "./source";

export default class AllNews extends React.Component{
    constructor(props){
        super(props)
        this.state={
            resArticles:{
                articles:[],
                status:''
            }
        }
    }

    getData=(id)=>{
        axios.get('/allnews/'+id,axiosConfig,basicAuth).then(res=>{
            this.setState({
                resArticles:res.data,
            })
        }).catch(err=>{
            this.setState({
                resArticles:{...this.state.resArticles,status:'fail'},
            })
        });
    }

    componentDidMount(){
        this.getData(this.props.match.params.id)
    }

    componentWillUnmount(){
        return(<Source location={this.props}/>)
    }

    render(){
        let { resArticles } = this.state;
        let optionDiv;

        if(resArticles.status === 'ok' || resArticles.status === 'fail'){
            optionDiv=(<Container maxWidth="lg">
                <Typography variant="h1" component="h2">No Articles Found</Typography>
                </Container>)
        }else{
            optionDiv=<Container maxWidth="lg"><CircularProgress size={150} thickness={2}/></Container>
        }
        return(
            <div className='App'>
            <AppBar className="headerbar">
                <Toolbar variant="dense">
                    <Icon>
                        <Web/>
                    </Icon>
                    <Typography variant="h6" component="h1" color="inherit">
                        News HeadLines
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className='main'>
                <Source location={this.props}/>
                {resArticles.articles.length === 0 ?(
                    <div className='content progress'>
                        {optionDiv}
                    </div>
                ):(
                    <Container maxWidth="lg">
                        <Typography gutterBottom variant="h1" component="h1">All HeadLines on {resArticles.articles[0].source.name}</Typography>
                        <Content articles={resArticles.articles} totalArticles={resArticles.totalResults}></Content>
                    </Container>
                )}    
            </div>
        </div>
        )
    }
} 