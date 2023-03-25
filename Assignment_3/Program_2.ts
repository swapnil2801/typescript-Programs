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

var obj1 = new Circle(22.3);
var obj2 = new Circle(33.4);

var Ret : number = obj1.Area();
console.log("Area of circle obj1 is : "+Ret);

var Ret : number = obj2.Area();
console.log("Area of circle obj2 is : "+Ret);