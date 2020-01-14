import React from "react";
import { Container,Typography, Link, CircularProgress, AppBar, Toolbar, Icon, Modal} from "@material-ui/core";
import { Web } from "@material-ui/icons";
import axios from "axios";
import Content from "./content";
import Source from "./source";
import { axiosConfig,basicAuth } from "../utility";



export default class TopNews extends React.Component{
    constructor(props){
        super(props)
        this.state={
            resArticles:{
                articles:[],
                status:''
            },
            id:'',
            updating:false
        }
    }

    getData=(id)=>{
        axios.get('/topnews/'+id,axiosConfig,basicAuth).then(res=>{
            this.setState({
                resArticles:res.data,
                updating:false
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

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props !== prevProps){
            if(this.state.resArticles.articles.length !==0){
                this.setState({updating:true});
            }
            this.getData(this.props.match.params.id)
        }
    }

    render(){
        let { resArticles, updating } = this.state;
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
                    {}
                    {resArticles.articles.length === 0 ?(
                            <div className='content progress'>
                               {optionDiv}
                            </div>
                        ):(
                            <Container maxWidth="lg">
                                <Typography gutterBottom variant="h1" component="h1">Top HeadLines on {resArticles.articles[0].source.name}</Typography>
                                <Typography variant="subtitle2" gutterBottom align='right'>
                                    <Link href={`/all/${this.props.match.params.id}`}>All {resArticles.articles[0].source.name} News</Link>
                                </Typography>
                                <Content articles={resArticles.articles} totalArticles={resArticles.totalResults}></Content>
                            </Container>
                        )
                    }
                    
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={updating}
                    className="updateModal"
                >
                    <div className='content progress'>
                        <CircularProgress size={150} thickness={2}/>
                    </div>
                </Modal>
            </div>
        )
    }
} 