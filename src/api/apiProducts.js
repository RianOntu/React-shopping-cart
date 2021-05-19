import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../baseUrl';

export const getProducts=()=>{

return axios.get(baseUrl)

}