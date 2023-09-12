<template lang="">
    <div class="sidepanel"> 
        <h1 class="title">Nathan Galea</h1>
        <div class="image-container">
            <img src="/profile.jpeg" alt="Profile Picture">
        </div>
        <p class="desc">Hi, my name is Nathan Galea and I'm a software engineer. 
            Welcome to my personal website!
        </p>
        <ul class="social-links">
            <li class="social-link-item"><font-awesome-icon :icon="['fab', 'twitter']" />    </li>
            <li class="social-link-item"><font-awesome-icon :icon="['fab', 'linkedin']" />    </li>
            <li class="social-link-item"><font-awesome-icon :icon="['fab', 'facebook']" />    </li>
            <li class="social-link-item"><font-awesome-icon :icon="['fab', 'stack-overflow']" />    </li>
            <li class="social-link-item"><font-awesome-icon :icon="['fab', 'codepen']" />    </li>
        </ul>

        <ul class="menu-links">
            <li>
                <RouterLink class="menu-link" to="/">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                    <p>About Me</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink class="menu-link" to="/about">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'laptop']" />
                    </div>
                    <p>Portfolio</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink class="menu-link" to="/">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'briefcase']" />
                    </div>
                    <p>Services & Pricing</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink class="menu-link" to="/">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'file']" />
                    </div>
                    <p>Resume</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink class="menu-link" to="/">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'blog']" />
                    </div>
                    <p>Blog</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink class="menu-link" to="/">
                    <div class="menu-icon">
                        <font-awesome-icon :icon="['fas', 'address-book']" />
                    </div>
                    <p>Contact</p>
                </RouterLink>
            </li>
        </ul>

        <button class="hire-me"><font-awesome-icon :icon="['fas', 'link']" />Hire Me</button>
    </div>
</template>
<script setup>
</script>
<style lang="scss">

* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
}
li{
    list-style-type: none;
}

.sidepanel {
    position: absolute;
    height: 100vh;
    background-color: $color1;
    width: $sidepanel-width;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .title {
        padding-block: 15px;
        color: $color4;
        text-align: center;
    }
    img {
        width: 170px;
    }
    .image-container {
        border-radius: 50%;
        overflow: hidden;
    }
    .desc {
        color: $color4;
        padding-inline: 20px;
        text-align: center;
    }
    .social-links {
        width: 90%;
        display: flex;
        justify-content: space-around;
        color: $color1;
        .social-link-item {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            background-color: $color4;
            &:hover{
                box-shadow: 0px 0px 13px 2px $color3;
                filter: brightness(120%);
            }
        }
    }
    .menu-links {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        a {
            color: $color4;
            text-decoration: none;
        }
        .menu-link {
            display: flex;
            gap: 10px;
            .menu-icon {
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            &:hover {
                filter: brightness(140%);
                svg{
                    box-shadow: 0px 0px 13px 4px rgb(255 255 255 / 30%);
                }
                p {
                    text-shadow: 0px -4px 6px rgba(255, 255, 255, 1);                    
                }
            }
        }
    }

    .hire-me{
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
            box-shadow: 0px 0px 13px 2px $color3;
            filter: brightness(120%);
        }
    }
}


</style>