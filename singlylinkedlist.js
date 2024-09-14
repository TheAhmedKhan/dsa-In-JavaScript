"use strict";
const prompt=require("prompt-sync")();

class Node {
    constructor(val) {
        this.val=val
        this.next=null
        
        
    }
}

class SinglyLinkedList {
    constructor(val) {
        const newNode=new Node(val);
        this.head=newNode;
        this.tail=this.head;
        this.length=1
    }
    push(val){
        const newNode=new Node(val)
        
        let displayHead=this.head
        if (!this.head) {
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        
        this.length++
    }
    pop(){
        
        if (!this.head) {
            return undefined
        }
        let temp=this.head
        let pre=this.head

        while (temp.next) {
            pre=temp
            temp=temp.next
        }
        this.tail=pre
        this.tail.next=null
        this.length--
         if (this.length==0) {
            this.head=null;
            this.tail=null;
        }
        console.log(temp)
       
       
    }
    unshift(value){
        const newNode=new Node(value)
        newNode.next=this.head
        this.head=newNode
        this.length++
        return this
        
    }
    shift(){
        if (!this.head) {
            undefined
        }
        let temp=this.head
        this.head=this.head.next
        this.length--
        if (this.length==0) {
            this.head=null
            this.next=null
        }
        temp.next=null
        return temp

    }
    display(){
        let fvalue=this.head
            let nvalue
            
            if(this.length==0){
                console.log("empty list")
            }else{
                for(let i=0;i<this.length;i++){
                    nvalue=fvalue.val
                    fvalue=fvalue.next
        
                    console.log(nvalue);
        
                }

            }
        
        
    }
    get(index){
        let fvalue=this.head
        let nvalue
        if(index>this.length){
            console.log("The value is exceeding the list")
        }else{
            for(let i=0;i<index;i++){
                nvalue=fvalue.val
                fvalue=fvalue.next
            }
            console.log(`value on index ${index} is ${nvalue}`)
        }
    }
    set(index,val){
        let temp=this.head
        for(let i=1;i<index;i++){
            temp=temp.next
        }
        temp.val=val
        console.log(temp)
    }
    
    
    
}
//Displaying-------------------------------------------------------------------------------------------
let hvalue=prompt("Enter the Head value : ")
let first=new SinglyLinkedList(Number(hvalue))

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = ['Display', 'Push', 'Pop','Shift','Unshift'];
let index = 0;

const showMenu = () => {
  console.clear();
  options.forEach((option, i) => {
    if (i === index) {
        
      console.log(`> ${option}`);
    } else {
      console.log(`  ${option}`);
    }
  });
  if(index==0){
    first.display()
    }else if(index==1){
        let ques=prompt("Do you want to push yes/no only in smallcase : ")
        if(ques=='yes'){
            let number = prompt("enter the value : ")
            first.push(Number(number))
            console.log('node added')
        }else if(ques=='no'){
            return;
        }
        
    }else if(index==2){
        let ques=prompt("Do you want to pop yes/no only in smallcase : ")
        if(ques=='yes'){
            first.pop()
            console.log('node removed')
        }else if(ques=='no'){
            return;
        }
    }else if(index==3){
        let ques=prompt("Do you want to shift yes/no only in smallcase : ")
        if(ques=='yes'){
            first.shift()
            console.log('node removed from head')
        }else if(ques=='no'){
            return;
        }
    }else if(index==4){
        let ques=prompt("Do you want to unshift yes/no only in smallcase : ")
        if(ques=='yes'){
            let number = prompt("enter the value : ")
            first.unshift(Number(number))
            console.log('New head added')
        }else if(ques=='no'){
            return;
        }
    }
};

const handleKeyPress = (str, key) => {
  if (key.name === 'up' && index > 0) {
    index--;
  } else if (key.name === 'down' && index < options.length - 1) {
    index++;
  } else if (key.name === 'return') {
    console.log(`You selected: ${options[index]}`);
    rl.close();
  }
  showMenu();
};
if(index==0){
    first.display()
}

rl.input.on('keypress', handleKeyPress);
showMenu();
//------------------------------------------------------------------------------------------------------------
