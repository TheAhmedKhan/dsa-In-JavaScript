"use strict";
const prompt=require("prompt-sync")();

//This is going to be our head node 
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
    insert(index,val){
        if(index===0) return this.unshift(val)
        if(index===this.length) return this.push(val)
        if(index<0||index>this.length) return false
        let newNode=new Node(val)
        let temp=this.head
        for(let i=0;i<index-1;i++){
            temp=temp.next
        }
        newNode.next=temp.next
        temp.next=newNode
        console.log(`New node added at ${index} with value ${newNode.val}`)
        this.length++
    }
    remove(index){
        if(index===0) return this.shift()
        if(index===this.length) return this.pop()
        if(index<0||index>this.length) return false
        
        let previousVal=this.head
        for(let i=0;i<index-1;i++){
            previousVal=previousVal.next
        }
        let nextVal=this.head
        for(let i=0;i<index;i++){
            nextVal=nextVal.next
        }
        let temp=nextVal
        temp=null
        previousVal.next=nextVal.next
        this.length--

    }
    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp
        let next=temp.next
        let prev = null
        
        for(let i=0; i<this.length;i++){
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
        }
    }
    
    
    
}

//Displaying-------------------------------------------------------------------------------------------
let hvalue=prompt("Enter the Head value : ")
let first=new SinglyLinkedList(hvalue)
let question=prompt("what operation do you want to perform 1.push 2.pop 3.ushift 4.shift 5.display 6.get 7.set 8.insert 9.remove 10.reverse : ")
if(Number(question)===1){
    let val=prompt("Enter the value to be pushed : ")
    first.push(val)
    console.log("Pushed successfully")
    question=prompt("what operation do you want to perform 1.push 2.pop 3.ushift 4.shift 5.display 6.get 7.set 8.insert 9.remove 10.reverse : ")
   
}
//------------------------------------------------------------------------------------------------------------
