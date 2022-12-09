let x; 
let bool=true;

let cableArr=[];

class client{
    constructor(id){
        this.cable=null;
        this.id = id;
        this.client=document.querySelector(`#${id}`);
        this.form = this.client.querySelector('form');
        this.message = this.form.querySelector('.message');
        this.adress = this.form.querySelector('.adress');
        this.send= this.form.querySelector('.send');
        this.send.addEventListener('click',()=>this.deliver(this.message,this.adress))
    }
    connectToCable(key){
       this.cable=key;
    }
    deliver(message,adress){
        let getter=document.getElementById(adress.value);
        if(getter && message.value.length>0 && bool){
            bool=false;
            this.cable.clientToCable();


            // this.client.querySelector(".cable").style.background="yellow";
   
        }
        else alert('no good')
    }
    cableTime(message,adress){
        this.client.querySelector(".cable").style.background="black";
        x.recive(message,adress);
        // x = new Switch(message.value,adress.value);
        document.querySelector('#switch').style.background="red";
    }
    arrived(message){
        this.client.querySelector("p").innerHTML=message;
    }
}
let c1= new client("client1");
let c2= new client("client2");
let c3= new client("client3");

let arr = [c1 , c2 , c3];


class Switch{
    constructor( message,adress){
        this.obj={msg:message,ip:adress};
        // setTimeout(this.sent.bind(this),2000);
        // this.wantedDiv=document.querySelector(`#${adress}`);
       
    }
    recive(message,adress){
        this.obj.msg=message;
        this.obj.ip=adress;
        this.wantedDiv=document.querySelector(`#${adress}`);
        console.log(adress , "hi");
        setTimeout(this.sent.bind(this),2000);
        
    }
    sent(){
        // let adressTo=this.obj.ip;
        let messageInfo=this.obj.msg;
        document.querySelector('#switch').style.background="green";
        console.log(this.wantedDiv);
        this.wantedDiv.querySelector(".cable").style.background="yellow";


        setTimeout(()=>{this.cableTime(messageInfo)},3000)
        bool=true;
    }
    cableTime(){
        this.wantedDiv.querySelector(".cable").style.background="black";
        // this.wantedDiv.querySelector("p").innerHTML=message;
        for(let key of arr){
            if(key.id==this.obj.ip){
       key.arrived(this.obj.msg)}
        }
    }
}
x = new Switch(null,null);

class Cable{
    constructor(id){
        this.id=id;
        this.client=null;
        for(let key of arr){
            if(key.id==id){
                this.client=key;
            }
        }
        console.log(this.client);
        this.client.connectToCable(this);
        this.obj={msg:null,ip:null};
        this.div = document.querySelector(`#${id}`);
        this.cable=this.div.querySelector('.cable');
    }
    clientToCable(){
        this.cable.style.background="yellow";
        this.obj.msg=this.client.message.value;
        console.log(this.client.adress.value, "dferf")
        this.obj.ip=this.client.adress.value;
        setTimeout(()=>{this.cableToSwitch()},2000)
    }
    cableToSwitch(){
        x.obj.msg=this.obj.msg;
        x.obj.adress=this.obj.adress;
        this.cable.style.background="black";
        console.log(this.obj.adress, "yoy")
        x.recive(this.obj.msg,this.obj.ip);
        document.querySelector('#switch').style.background="red";
    }
}
let cable1= new Cable("client1");
let cable2=new Cable("client2");
let cable3=new Cable("client3");
cableArr=[cable1,cable2,cable3]

