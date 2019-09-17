import $ from 'jquery';

class ProjectLink {
    constructor(){
        this.image1 = $(".image-frame--1");
        this.image2 = $(".image-frame--2");
        this.image3 = $(".image-frame--3");
        this.events();
    }
    
    events() {
        this.image1.click(this.project1);
        this.image2.click(this.project2);
        this.image3.click(this.project3);
    }

    project1(){
        window.open("https://giaduc777.github.io/Mountain-travel-10/");
    }

    project2(){
        window.open("https://giaduc777.github.io/Product-landing-page/");
    }

    project3(){
        window.open("");
    }
}

export default ProjectLink;