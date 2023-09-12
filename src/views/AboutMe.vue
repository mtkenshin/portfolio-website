<template lang="">
<section class="intro">
    <div class="description">
        <p class="name">Nathan Galea</p>
        <p class="job">Frontend Developer</p>
        <p class="memo">I'm a software engineer specialised in frontend and backend development for complex scalable web apps. 
            I write about software development on my blog. Want to know how I may help your project? 
            Check out my project portfolio and online resume.</p>
            <div class="btn-area">
                <button class="portfolio">View Portfolio</button>
                <button class="resume">View Resume</button>
            </div>
    </div>
    <div class="image-area">
        <img src="/profile.jpeg" alt="Picture of Me">
    </div>

</section>

<section class="what-i-do">
    <p class="header">What I do</p>
    <p class="desc">I have more tshan 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
</section>
</template>
<script setup>

</script>
<style lang="scss">
    .intro {
        display: flex;
        width: 100%;
        background-color: $color3;
        .name{
            font-size: 2.5rem;
        }
        .job{
            font-weight: 400;
            font-size: 1.2rem;
        }
        .memo{
            padding-block: 1rem;
            padding-right: 1rem;
            text-align: justify;
        }
        .description, .image-area {            
            padding: 2rem;
            position: relative;
            width: 50%;
        }
        .image-area img{
            display: block;
            float: right;
            width: 100%;
            max-width: 300px;
            aspect-ratio: 1;
            object-fit: contain;
        }
    }
    .what-i-do {
        width: 100%;
    }
    .btn-area{
        display: flex;
        gap: 20px;
    }

    .portfolio {
        background-color: $color2;
        color: $color4;
        &:hover {
            box-shadow: 0px 0px 13px 2px $color2;
        }
    }
    
    .resume {
        color: $color2;
        background-color: $color4;
        &:hover {
            box-shadow: 0px 0px 13px 2px $color4;
        }
    }
    .portfolio, .resume {
        border: none;
        margin-top: 20px;;
        padding: .5rem;
        border-radius: .5rem;
        display: flex;
        gap:5px;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        &:hover{
            border: none;
            filter: brightness(120%);
        }
    }
</style>