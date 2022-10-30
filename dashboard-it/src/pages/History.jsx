import React, { useState, useEffect } from 'react'
import dateShortcode from 'date-shortcode'
import TableNew from '../components/m-ui/NewTable'
import Badge from '@mui/material/Badge';
import axios from 'axios';
import Table from '../components/table/Table'

import {
    Col,
} from 'reactstrap';

import { Input } from 'antd';
import Nav from './Nav';

import { 
    Box
} from '@mui/material';


const { Search } = Input;



const formatDateTime = (datetime, time) => {
    let str;
    if(time) {
        str = '{DD/MM/YY HH:mm}'    

    } else {
        str = '{DD/MM/YY}'    
    }

    return dateShortcode.parse(str, datetime)
}  


const customerTableHead = {
    header: [
        "tikket date",
        "service",  
        "option",        
        "requestor",
        "section",
        "tikket no"
    ]
}

const Customers = () => {
    
    const [datatikketW, setdatatikketW] = useState([]);
    const [StattusLoadDatajob, setStattusLoadDatajob] = useState(false);

    const DataTikket = async (e) => {
        try {
            await axios.post('http://localhost:5000/getDataTikketAllofUser', {
                id_profile:  localStorage.getItem('id_profile_emp_login')

             }).then((res) => {  
                setdatatikketW(res.data);
                setStattusLoadDatajob(true);

            })

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) !== "IT") {
            DataTikket();

        }
    },[localStorage.getItem('id_profile_emp_login')]);

    const [search, setSearch] = useState("");  

    const onSearch = value => {
        setSearch(value)
    } 

    const renderHead = (item, index) => <th key={index}>{item}</th>

    const renderBodyW = (item, index) => (
        <tr key={index} className="cursor_pointer">
            <td className="col_txt">{formatDateTime(item.tikket_date,false)}</td>
            <td className="col_txt font-family-Kanit">{item.service_types[0].title}</td>
            <td className="col_txt font-family-Kanit">{item.service_options[0].title}</td>
            <td className="col_txt">{item.user_profiles[0].profile_name}</td>
            <td className="col_txt">{item.user_profiles[0].data_emps[0].sections[0].section}</td>
            <td className="col_txt">
                {
                     <>
                        {item.tikket_no}
                        <Badge  badgeContent={"REQ"}
                            sx={
                                item.status === "approve" ?
                                    {
                                        "& .MuiBadge-badge": {
                                            color: "white",
                                            backgroundColor: "#00e253",
                                            fontSize: "5px",
                                        }
                                    }
        
                                :
                                    item.status === "reject" ?
                                        {
                                            "& .MuiBadge-badge": {
                                                color: "white",
                                                backgroundColor: "#fb0b12",
                                                fontSize: "5px",
                                            }
                                        }
                                    : 
                                        item.status === "waite" ?
                                            {
                                                "& .MuiBadge-badge": {
                                                    color: "white",
                                                    backgroundColor: "#ffd44b",
                                                    fontSize: "5px",
                                                }
                                            }
                                        : null
                            }>
                            <Box sx={{marginLeft: 0, padding: 0.9}}></Box>

                        </Badge>
                    </>

                }
               
            </td>   
        </tr>
    )
    
    return (
        <div className="layout-component m_r">
            <h2 className="page-header">
                {
                    localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) === "IT" ?
                        "Job History".toUpperCase() 
                    :
                       " Request History".toUpperCase()

                }
               
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card-g dataEmp-min-h">
                    <Col lg={ 8 } className="del-p-g">
                        <div className="box-nav">
                            <Nav pills className="search-n">
                                {
                                    localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) === "IT" ?
                                        <Search className="search-table" placeholder="Search here.." allowClear onSearch={onSearch} style={{ width: 200 }} />
                                        
                                    :
                                       null
                                }  
                            </Nav>
                            {
                                localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) === "IT" ?
                                    <Nav pills id="box1-n"></Nav>                                        
                                :
                                    null
                            } 
                            
                        </div>
                        
                        {
                             localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) === "IT" ?
                                <TableNew
                                    Search={search}
                                />
                             :
                                localStorage.getItem('id_emp_login') !== null && localStorage.getItem('id_emp_login').substring(0,2) !== "IT" ?
                                    <Table
                                        limit='7'
                                        headData={customerTableHead.header}
                                        renderHead={(item, index) => renderHead(item, index)}
                                        bodyData={datatikketW}
                                        renderBody={(item, index) => renderBodyW(item, index)}
                                        StattusLoadDatajob={StattusLoadDatajob}
                                        // search={true}
                                    />
                                :
                                    null
                        }
                       
                    </Col>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Customers
