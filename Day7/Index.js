
class Student {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return "Hello, I am " + this.name + "."
    }
}

class Project extends Student {
    constructor(name, proj)  {
        super(name)
        this.project =  proj
    }
     present() {
        return this.sayHi() + " My project is" + this.project + "."
    }
}

let project1  = new project1("dgs",  "BikeRepair")
console.log(project1.present())
// ...  Hello - I am dennis and my project is DGS Bikes "