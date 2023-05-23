//modules
const express = require("express")
const mongoose = require("mongoose")
const file = require("file")
const fs = require("fs")
const path = require("path")

const httpserver = require("./files/httpserver")
const mongodb = require("./files/mongodb")
const filemanager = require("./files/filemanager")
const generateItemShop = require("./files/generateItemShop")


module.exports = class Setup{
    constructor(resources){
        console.log(resources.config)
        this.application = new httpserver.init(express, resources.config)
        this.init(resources,this.application.application)
    }
    async init(resources, application){
      //await new generateItemShop.init(resources.config)
        await new mongodb.init(mongoose, resources.config)
        await new filemanager.init(file, fs, path, this.application.application)
        async function logEvery2Seconds(i) {
        setTimeout(() => {
            process.env.TZ = 'Europe/London'
            const date = new Date()
           // console.log(date.getHours())
            if(date.getHours() == 17){
                if(date.getMinutes() == 0){
                 //console.log(date)
                    if(date.getSeconds() == 0){
                        console.log("Item Shop Update YAY")
                         new generateItemShop.init(resources.config)
                      }else{

                      }
                  }
               
              } 
          logEvery2Seconds(++i)
        }, 1000);
        }
        logEvery2Seconds(0);
    }
}
