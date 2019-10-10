import $ from 'jquery';

class ProjectLink {
    constructor(){
        this.image1 = $("#mountain-travel");
        this.image2 = $("#product-landing-page");
        this.image3 = $("#tribute-page");
        this.image4 = $("#technical-documentation");
        this.work = $(".header__navigation__block__l2");
        this.events();
    }
    
    events() {
        this.image1.click(this.project1);
        this.image2.click(this.project2);
        this.image3.click(this.project3);
        this.image4.click(this.project4);
    }

    project1(){
        window.open("https://giaduc777.github.io/Mountain-travel-10/");
    }

    project2(){
        window.open("https://giaduc777.github.io/Product-landing-page/");
    }

    project3(){
        window.open("https://giaduc777.github.io/Tribute-page/");
    }

    project4(){
        window.open("https://giaduc777.github.io/Technical-doc/");
    }
}

export default ProjectLink;