class Queue {
  
    
    constructor()
    {
        this.items = [];
    }
  
    
    enqueue(element)
    {
    
        this.items.push(element);
    }
    
    dequeue()
    {
    
        if (this.items.length == 0)
         return "Underflow";
        return this.items.shift();
    }

    size()
    {
        return this.items.length;
    }
  
    front()
    {
    
        return this.items[0];
    }
    
    rear()
    {
        return this.items[this.items.length - 1];
    }
    isEmpty()
    {
    
        return this.items.length == 0;
    }
  
    display()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

let queue = new Queue();

console.log("Is the queue empty?");
console.log(queue.isEmpty()); 
  
console.log("\ndequeuing empty queue :");
console.log(queue.dequeue()); 

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

  
console.log("\nThe queue elements are :");
console.log(queue.display());

console.log("\nSize of queue is:");
console.log(queue.size());
  
console.log("\nThe front element is :");
console.log(queue.front());

console.log("\nThe rear element is :");
console.log(queue.rear());
  
console.log("\non dequeue operation :");
console.log(queue.dequeue());
  
console.log("\nThe queue elements are :");
console.log(queue.display());

console.log("\nIs the queue empty?");
console.log(queue.isEmpty()); 