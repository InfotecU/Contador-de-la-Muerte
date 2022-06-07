class Display {
    constructor(el){
        this.el = el;
        console.log(el);
    }
    print(num) {
        if (num == 0) this.zero();
        if (num == 1) this.one();
        if (num == 2) this.two();
        if (num == 3) this.three();
        if (num == 4) this.four();
        if (num == 5) this.five();
        if (num == 6) this.six();
        if (num == 7) this.seven();
        if (num == 8) this.eight();
        if (num == 9) this.nine();
    }
    zero() {
        [
            ...this.el.querySelectorAll(".A, .B, .C, .D, .E, .F")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    one() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".B, .C")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    two() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .B, .D, .E, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    three() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .B, .C, .D, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    four() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".B, .C, .F, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    five() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .C, .D, .F, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    six() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .C, .D, .E, .F, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    seven() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .B, .C")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    eight() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .B, .C, .D, .E, .F, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    nine() {
        this.lightsOut();
        [
            ...this.el.querySelectorAll(".A, .B, .C, .D, .F, .G")
        ].forEach((segmento)=>{
            segmento.style.display = "block";
        });
    }
    lightsOut() {
        // $(".A, .B, .C, .D, .E, .G, .D, .F").hide();
        [
            ...this.el.querySelectorAll(".segment")
        ].forEach((segmento)=>{
            segmento.style.display = "none";
        });
    }
}
const printTwoDigits = (display1, display2, value)=>{
    if (value >= 10) {
        display1.print(Math.trunc(value / 10) == 6 ? 5 : Math.trunc(value / 10));
        display2.print(Math.trunc(value % 10));
    } else {
        display1.zero();
        display2.print(value);
    }
};
const sec2 = new Display(document.querySelector(".sec2"));
const sec1 = new Display(document.querySelector(".sec1"));
const min2 = new Display(document.querySelector(".min2"));
const min1 = new Display(document.querySelector(".min1"));
const hour2 = new Display(document.querySelector(".hour2"));
const hour1 = new Display(document.querySelector(".hour1"));
const day2 = new Display(document.querySelector(".day2"));
const day1 = new Display(document.querySelector(".day1"));
// iniciamos todo el display en zero
const limitDate = new Date(2022, 5, 27, 17, 0, 0, 0);
setInterval(()=>{
    const currentDate = new Date();
    const diffSecs = (limitDate.getTime() - currentDate.getTime()) / 1000;
    console.log(diffSecs);
    const days = Math.trunc(diffSecs / 86400);
    const hours = Math.trunc((diffSecs / 86400 - days) * 24);
    const mins = Math.trunc(((diffSecs / 86400 - days) * 24 - hours) * 60);
    const secs = Math.trunc((((diffSecs / 86400 - days) * 24 - hours) * 60 - mins) * 60);
    // reiniciamos el display
    sec2.lightsOut();
    sec1.lightsOut();
    min2.lightsOut();
    min1.lightsOut();
    hour2.lightsOut();
    hour1.lightsOut();
    day2.lightsOut();
    day1.lightsOut();
    printTwoDigits(day1, day2, days);
    printTwoDigits(hour1, hour2, hours);
    printTwoDigits(min1, min2, mins);
    printTwoDigits(sec1, sec2, secs);
}, 1000);

//# sourceMappingURL=index.44983732.js.map
