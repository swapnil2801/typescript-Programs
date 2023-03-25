
class Circle
{
    Radius : number;
    PI : number;

    constructor(Rad : number)
    {
        this.Radius = Rad;
        this.PI = 3.14;   
    }

    Area() : number
    {
        return this.PI * this.Radius * this.Radius;
    }
}

class CircleX extends Circle
{
    constructor(Data : number) 
    {
        super(Data);
    }
    Circumference() : number
    {
        return 2 * this.PI * this.Radius;
    }
}

var obj1 = new CircleX(11);
var obj2 = new CircleX(10);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of circle of obj1 is : "+Ret);

Ret = obj1.Circumference();
console.log("Circumference of circle of obj1 is : "+Ret);

Ret = obj2.Area();
console.log("Area of circle of obj2 is : "+Ret);

Ret = obj2.Circumference();
console.log("Circumference of circle of obj2 is : "+Ret);
