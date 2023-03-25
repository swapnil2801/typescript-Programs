var Circle = /** @class */ (function () {
    function Circle(Rad) {
        this.Radius = Rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var obj1 = new Circle(22.3);
var obj2 = new Circle(33.4);
var Ret = obj1.Area();
console.log("Area of circle obj1 is : " + Ret);
var Ret = obj2.Area();
console.log("Area of circle obj2 is : " + Ret);
