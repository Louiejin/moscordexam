import React,{forwardRef} from "react";
import { Drawer,List,ListItem,ListItemText } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import { axiosConfig,basicAuth } from "../utility";
import axios from "axios";

const ItemListLink=(props)=>{
    let {to, text, itemLinkClickHandler, isSeleted, index} = props
    const linkRedirect = forwardRef((itemProps, ref) => {
        return(<Link to={to} ref={ref} {...itemProps} articletitle={text} />)
    });

    return(
        <ListItem
            button 
            component={linkRedirect}
            selected={isSeleted}
            onClick={event=>itemLinkClickHandler(event, index)}
            >
            <ListItemText primary={text}></ListItemText>
        </ListItem>
    )
}

export default class Source extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSources:[],
            currentIndex:0
        }
    }

    componentDidMount(){
        axios.get('/source',axiosConfig,basicAuth).then(res=>{
            this.setState({dataSources:res.data.sources});
        }).catch(err=>{
            console.error(err);
        });
    }

    itemLinkClickHandler=(event, idx)=>{
        this.setState({currentIndex:idx})
    }

    render(){
        let { dataSources } = this.state;
        if(dataSources.length===0){
            return(
                <Drawer
                open
                variant="permanent"
                className="sideNav"
                >
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </Drawer>
            )
        }

        if(['/','/top','/all'].indexOf(this.props.location.match.path)!==-1){
            return(<Redirect to={`/top/${dataSources[0].id}`}/>)
        }

        return(
            <Drawer
                open
                variant="permanent"
                className="sideNav"
            >
                <List>
                    {dataSources.map((item, idx)=>{
                        
                        let redirectLinkParam = `/top/${item.id}`
                        return(
                            <ItemListLink 
                                to={redirectLinkParam} 
                                index={idx} 
                                text={item.name} 
                                key={item.id}
                                isSeleted={item.id === this.props.location.match.params.id}
                                itemLinkClickHandler={this.itemLinkClickHandler}>
                            </ItemListLink>)
                    })}
                </List>
            </Drawer>
        )
    }
}