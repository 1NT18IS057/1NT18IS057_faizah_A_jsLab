function car(color,wheels,year,etype)
{
    this.color=color;
    this.wheels=wheels;
    this.year=year;
    this.etype=engine;
}

function engine(cylinder,size,model)
{
    this.cylinder=cylinder;
    this.size=size;
    this.model=model;
}
let eng=new engine(4,2.2,'skoda');
let mycar=new car('red',4,2020,eng);


console.log(mycar)
console.log(eng);