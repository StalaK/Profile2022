<script setup>

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
  
</script>

<template>
    <div>
        <nav>
            <div id="title" v-on:click="showHideMobileMenu">
                Josh Hughes
                <span class="mobile-menu">[ menu ]</span>
            </div>
            
            <ul class="nav-links" v-bind:style="{ display: getDisplayStatus }">
                <div class="nav-item">
                    <li><router-link to="/" v-on:click="showHideMobileMenu">Blog</router-link></li>
                    <div class="active-nav"></div>
                </div>
                    <div class="nav-item">
                    <li><router-link to="/about" v-on:click="showHideMobileMenu">About</router-link></li>
                </div>
                    <div class="nav-item">
                    <li><router-link to="/portfolio" v-on:click="showHideMobileMenu">Portfolio</router-link></li>
                </div>
                    <div class="nav-item">
                    <li><router-link to="/contact" v-on:click="showHideMobileMenu">Contact</router-link></li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    data() {
        return {
            mobileMenuDisplay: 'flex'
        }
    },
    computed: {
        getDisplayStatus: function() {
            return this.mobileMenuDisplay;
        }
    },
    mounted: function () {
        const links = document.querySelectorAll(".nav-item a");
        const activeNav = document.querySelector(".active-nav");

        gsap.to(links[0], { color: "black" });

        links.forEach((link) => {
            link.addEventListener("click", () => {
                gsap.to(links, {color: "white"});

                if (document.activeElement === link) {
                    gsap.to(link, { color: "black" });
                }

                const state = Flip.getState(activeNav);
                link.appendChild(activeNav);
                Flip.from(state, {
                    duration: 1.25,
                    absolute: true,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });

        this.mobileMenuDisplay = document.querySelector(".nav-links").display;
    },
    methods: {
        showHideMobileMenu: function() {
            if (screen.width <= 775)
            this.mobileMenuDisplay = (this.mobileMenuDisplay ?? "none") === "none" ? "flex" : "none";
        },
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Contrail+One&display=swap');

#title {
    font-family: 'Contrail One', cursive;
    font-size: large;
    color: aquamarine;
    transform: translate(-20%, 45%);
}

nav {
    padding: 3rem;
    padding-top: unset;
    display: flex;
    justify-content: center;
    height: fit-content;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 5rem;
    font-size: 2rem;
}

.nav-item {
    position: relative;
}

.active-nav {
    height: 3px;
    background: black;
    border-radius: 1rem;
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
}

.mobile-menu {
    display: none;
}

@media screen and (max-width: 775px) {
    nav {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
        display: none;
    }

    #title {
        cursor: pointer;
    }

    .mobile-menu {
        display: inline-block;
        cursor: pointer;
        font-size: x-small;
        color: black;
        font-family: unset;
    }
}

</style>