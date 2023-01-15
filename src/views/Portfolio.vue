<script setup>

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
  
</script>

<template>
    <div class="content">
        <div class="card">
            <h1>Profile</h1>
            <div>
                <p>
                    The Developer Profile project is the very website you are currently viewing. It's a simple statically displayed webpage developed for me
                    to showcase the various personal projects I've worked on as well as any experimentations with new Technologies.
                </p>
                <p>
                    No projects related to my employments, past or present, will be displayed on this website
                </p>

                <h2>Technologies Used:</h2>
                <ul>
                    <li>VueJS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                </ul>    
                <div class="github-link">
                    <a href="https://github.com/StalaK/Profile2022" target="blank">
                        <span class="github-link"><h3 class="github-text">View Profile (2022 version) on Github</h3></span>
                        <span class="github-link"><img src="../assets/github.png" alt="View Profile (2022 version) on Github" /></span>
                    </a>
                </div>
                <div class="github-link">
                    <a href="https://github.com/StalaK/Profile" target="blank">
                        <span class="github-link"><h3 class="github-text">View Profile (2020 version) on Github</h3></span>
                        <span class="github-link"><img src="../assets/github.png" alt="View Profile (2020 version) on Github" /></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="card">
            <h1>Tenko</h1>
            <div>
                <p>
                    Tenko (meaning "Roll Call" in Japanese) is an attendence management system designed for martial arts gyms. It is a mobile
                    app designed using Xamarin Forms for Android and iOS which allows owners of martial arts gyms to manage student attendence,
                    as well as belt promotions and distributing news updates with regards to what's happening in the gym.
                </p>
                <p>
                    Tenko is currently under active development and is closed source.
                </p>
                <h2>Technologies Used:</h2>
                <ul>
                    <li>C# .NET</li>
                    <li>Entity Framework</li>
                    <li>PostgreSQL</li>
                    <li>React Native</li>
                </ul>
            </div>
        </div>
        <div class="card">
            <h1>Am I Being Raptured?</h1>
            <div>
                <p>
                    Whilst watching a documentary where someone was claiming the world would end soon, only for the world to carry on as normal got me wondering
                    how many of these supposed apocalyptic events have I survived? After some research I found that the man on TV was Harold Camping and he's been
                    wrong a few times with these predictions which increased my apocalyptic event survival rate. I decided to turn my research into a website
                    for others to quickly see how resilient they are to raptures.
                </p>
                <p>
                    The data used for these raptures is from the Wikipedia page <a href="https://en.wikipedia.org/wiki/List_of_dates_predicted_for_apocalyptic_events?oldformat=true" target="blank">
                    List of dates predicted for apocalytic events</a> and may become outdated. Though, hopefully it won't.
                </p>
                <p>
                    From a technological standpoint, this project could be said to be over engineered for what it accomplishes, however I wrote is this way
                    partially for practice and partially to display in this portfolio. It uses a web frontend written in VueJS and Javascript which uses a 
                    Web API to access a SQL Server database which stores the list of raptures. This is plumbed together using a multi layered (service 
                    layer and repository layer) "clean" architechture.
                </p>
                <p>
                    Am I Being Raptured? is currently not being hosted online and is only accessible via source code.
                </p>
                <h2>Technologies Used:</h2>
                <ul>
                    <li>VueJS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>C#</li>
                    <li>Entity Framework</li>
                    <li>SQL Server</li>
                </ul>
                <div class="github-link">
                    <a href="https://github.com/StalaK/AmIBeingRaptured" target="blank">
                        <span class="github-link"><h3 class="github-text">View Am I Being Raptured? Web UI on Github</h3></span>
                        <span class="github-link"><img src="../assets/github.png" alt="View Am I Being Raptured? Web UI on Github" /></span>
                    </a>
                </div>
                <div class="github-link">
                    <a href="https://github.com/StalaK/RaptureApi" target="blank">
                        <span class="github-link"><h3 class="github-text">View Am I Being Raptured? API backend on Github</h3></span>
                        <span class="github-link"><img src="../assets/github.png" alt="View Am I Being Raptured? API backend on Github" /></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="card">
            <h1>Datr</h1>
            <div>
                <p>
                    Datr is a library to auto-populate class properties in unit tests.<br />
                    The initial purpose of this is to speed up the writing of unit tests by removing the need
                    to populate fields which are unrelated to the test, but may cause the test to fail due to 
                    validation. <br />
                    Datr also has a secondary purpose of randomizing the data values, ensuring that the tests are
                    run with a wide range of values instead of the usual static and hard coded values. <br />
                    
                    Datr is now available as a Nuget package. Visit the Github page below for more information of 
                    how to install and use it in your projects.
                </p>
                <p>
                    Datr is no longer in active development as its feature set is included in common testing frameworks in .NET.
                </p>
                <h2>Technologies Used:</h2>
                <ul>
                    <li>C#</li>
                </ul>
                <div class="github-link">
                    <a href="https://github.com/StalaK/Datr" target="blank">
                        <span class="github-link"><h3 class="github-text">View Datr on Github</h3></span>
                        <span class="github-link"><img src="../assets/github.png" alt="View Datr on Github" /></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="card">
            <h1>Roulettesy</h1>
            <div>
                <p>
                    Roulettesy! is a new way to explore Etsy, written in VueJS. View an available 
                    item for sale at random. Find a gift idea, something new for yourself or just 
                    browse the wild and wacky things available.
                </p>
                <p>
                    <a href="https://roulettesy.netlify.app/" target="blank"><h3>Visit Roulettesy!</h3></a>
                </p>
                <h2>Technologies Used:</h2>
                <ul>
                    <li>Vue</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted: function () {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const state = Flip.getState(cards);

                const isCardActive = card.classList.contains("active");
                cards.forEach((otherCard, otherIndex) => {
                    otherCard.classList.remove("active");
                    otherCard.classList.remove("is-inactive");

                    if (!isCardActive && index !== otherIndex)
                        otherCard.classList.add("is-inactive");
                });

                if (!isCardActive)
                    card.classList.add("active");

                Flip.from(state, {
                    duration: 1,
                    ease: "expo.out",
                    absolute: true
                });
            });
        });

        // Stop propagation on links in cards to stop the card from "closing" if a link is clicked from inside
        var cardLinks = document.querySelectorAll(".card a");
        cardLinks.forEach((link, index) => {
            link.addEventListener("click", (e) => { e.stopPropagation(); });
        });

    }
}

</script>

<style scoped>
.content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3rem;

}

.card {
    height: 10rem;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    grid-column: span 2;
    box-shadow: 0.7rem 0.7rem 0rem black;
    border: 4px solid black;
    gap: 2rem;
}

.card div {
    display: none;
}

.card.active div {
    display: block;
}

.card.active {
    grid-column: 1 / span 6;
    grid-row: 1;
    order: 0;
    height: auto;
    text-align: start;
}

.card.is-inactive { 
    grid-column: span 2;
}

li {
    list-style-type: disclosure-closed;
}

.github-link {
    display: inline-block;
    position: relative;
    text-align: end;
    color: black;
}

.github-link:visited {
    color: black;
}

.github-link h3 {
    transform: translate(0,-100%);
    padding-right: 0.75rem;
}

</style>