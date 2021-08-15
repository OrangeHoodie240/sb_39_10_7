import React from 'react';
import uuid from "uuid";
import axios from 'axios';


function useFlip(startFlipped=false){
    const [isFlipped, setFlip] = React.useState(startFlipped);
    
    function toggleFlip(){
        if(isFlipped){
            setFlip(false);
        }
        else{
            setFlip(true);
        }
    }

    return [isFlipped,toggleFlip]; 
}


function useAxios(url){
    const [dataArr, setDataArr] = React.useState([]); 

    async function addData(appendUrl=null){
        let _url = (typeof appendUrl === 'string') ? url + appendUrl : url; 
        const data = await axios.get(_url);
        setDataArr([...dataArr, {...data.data, id: uuid()}]);
    }

    return [dataArr, addData];
}


export default {useFlip, useAxios}; 
export {useFlip, useAxios};