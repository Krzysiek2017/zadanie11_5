function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + " with operating " + this.system + ". Available in color " + this.color + " and with a graet price (" + this.price + "$).");
}
var SamsungGalaxyS6 = new Phone("Samsung", 1999, "black", "system Android");
var iPhone6S = new Phone("Apple", 2499, "yellow", "system iOS 10");
var OnePlusOne = new Phone("OnePlus", 1399, "pink", "system Windows Mobile");
SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo()