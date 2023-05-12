<script setup>
import RSVP from '../components/RSVP.vue'
import WeddingMap from '../components/WeddingMap.vue'
</script>

<template>
    <div class="main-page">
        <div class="hero"></div>
        <div class="spacer"></div>
        <div class="title"><h1>The wedding of Kimberly & Josh</h1></div>
        
        <form v-if="invite === ''" v-on:submit.prevent="submitPassword">
            <label>Password: </label>
            <input type="text" v-model="password" />
            <button class="submit-button" type="submit">Submit</button>
            <div class="password-error" v-if="passwordError">Sorry, that password is invalid!</div>
        </form>

        <div v-if="invite === 'day'">
            <div class="venue-details">
                <div class="map">
                    <WeddingMap />
                </div>
                <div class="info">
                    <div class="header"><h2>Venue</h2></div>
                    <b>Address:</b> The Priests House, Barden Tower, Skipton, BD23 6AS<br />
                    <b>Date:</b> 21/10/2023<br />
                    <b>Time:</b> 13:00<br />
                    <b>Website:</b> <a href="https://thepriestshouse.com/" target="_blank">https://thepriestshouse.com/</a><br />
                    
                    <div class="header"><h2>Timings</h2></div>
                    <p>
                        Exact timings TBC
                    </p>
                    
                    <div class="header"><h2>Photographs</h2></div>
                    <p>
                        Our photographer will be taking photos throughout the wedding and reception.<br />
                        Please relax and enjoy the moment, and we’ll share the lovely images with everyone<br />
                        after the celebration. We kindly ask that pictures of us are not shared on social<br />
                        media until we've had a chance to share our own.
                    </p>

                    <div class="header"><h2>Guests</h2></div>
                    <p>
                        Unfortunately, due to space limitations, we simply can't accomodate all<br />
                        of our lovely guests to bring a guest of their own.<br />
                        Therefore, we regretfully our guests to please not bring a plus one, <br />
                        unless they are specifically named on the invitation.
                    </p>
                    
                    <div class="header"><h2>Accommodation Suggestions</h2></div>
                    <ul>
                        <li>Rendezvous Hotel - <a href="www.rendezvous-skipton.co.uk/" target="_blank">www.rendezvous-skipton.co.uk/</a></li>
                        <li>The Coach House (Skipton) - <a href="https://thecoachhouseskipton.com/" target="_blank">thecoachhouseskipton.com/</a></li>
                        <li>The Woolly Sheep (Skipton) - <a href="https://www.woollysheepinn.co.uk/" target="_blank">www.woollysheepinn.co.uk/</a></li>
                        <li>The Crescent Inn - <a href="www.thecrescentinn.co.uk/" target="_blank">www.thecrescentinn.co.uk/</a></li>
                        <li>Howgill Lodge - <a href="www.howgill-lodge.co.uk/" target="_blank">www.howgill-lodge.co.uk/</a></li>
                        <li>The Linton Laithe - <a href="www.lintonlaithe.co.uk/" target="_blank">www.lintonlaithe.co.uk/</a></li>
                        <li>The Devonshire Arms - <a href="www.thedevonshirearms.co.uk/" target="_blank">www.thedevonshirearms.co.uk/</a></li>
                        <li>The Devonshire Fell - <a href="www.devonshirefell.co.uk/" target="_blank">www.devonshirefell.co.uk/</a></li>
                        <li>Bolton Abbey Cottages - <a href="www.boltonabbey.com/stay-with-us/holiday-cottages/" target="_blank">www.boltonabbey.com/stay-with-us/holiday-cottages/</a></li>
                        <li>The Bailey (Skipton) - <a href="https://thebaileyskipton.co.uk/" target="_blank">thebaileyskipton.co.uk/</a></li>
                        <li>Grassington House - <a href="https://www.grassingtonhouse.co.uk/" target="_blank">www.grassingtonhouse.co.uk/</a></li>
                        <li>The Devonshire (Grassington): <a href="https://www.thedevonshiregrassington.co.uk/" target="_blank">www.thedevonshiregrassington.co.uk/</a></li>
                        <li>Salt Pot Cottage - <a href="https://www.instagram.com/saltpot_cottage/?hl=en" target="_blank">www.instagram.com/saltpot_cottage/?hl=en</a></li>
                    </ul>
                </div>
            </div>
            <RSVP />
        </div>

        <div v-if="invite === 'evening'">
            <div class="venue-details">
                <div class="map">
                    <WeddingMap />
                </div>
                <div class="info">
                    <div class="header"><h2>Venue</h2></div>
                    <b>Address:</b> The Priests House, Barden Tower, Skipton, BD23 6AS<br />
                    <b>Date:</b> 21/10/2023<br />
                    <b>Time:</b> 19:00<br />
                    <b>Website:</b> <a href="https://thepriestshouse.com/" target="_blank">https://thepriestshouse.com/</a><br />
                    
                    <div class="header"><h2>Timings</h2></div>
                    <p>
                        Exact timings TBC
                    </p>
                    
                    <div class="header"><h2>Photographs</h2></div>
                    <p>
                        Our photographer will be taking photos throughout the wedding and reception.<br />
                        Please relax and enjoy the moment, and we’ll share the lovely images with everyone<br />
                        after the celebration. We kindly ask that pictures of us are not shared on social<br />
                        media until we've had a chance to share our own.
                    </p>

                    <div class="header"><h2>Guests</h2></div>
                    <p>
                        Unfortunately, due to space limitations, we simply can't accomodate all<br />
                        of our lovely guests to bring a guest of their own.<br />
                        Therefore, we regretfully our guests to please not bring a plus one, <br />
                        unless they are specifically named on the invitation.
                    </p>
                    
                    <div class="header"><h2>Accommodation Suggestions</h2></div>
                    <ul>
                        <li>Rendezvous Hotel - <a href="www.rendezvous-skipton.co.uk/" target="_blank">www.rendezvous-skipton.co.uk/</a></li>
                        <li>The Coach House (Skipton) - <a href="https://thecoachhouseskipton.com/" target="_blank">thecoachhouseskipton.com/</a></li>
                        <li>The Woolly Sheep (Skipton) - <a href="https://www.woollysheepinn.co.uk/" target="_blank">www.woollysheepinn.co.uk/</a></li>
                        <li>The Crescent Inn - <a href="www.thecrescentinn.co.uk/" target="_blank">www.thecrescentinn.co.uk/</a></li>
                        <li>Howgill Lodge - <a href="www.howgill-lodge.co.uk/" target="_blank">www.howgill-lodge.co.uk/</a></li>
                        <li>The Linton Laithe - <a href="www.lintonlaithe.co.uk/" target="_blank">www.lintonlaithe.co.uk/</a></li>
                        <li>The Devonshire Arms - <a href="www.thedevonshirearms.co.uk/" target="_blank">www.thedevonshirearms.co.uk/</a></li>
                        <li>The Devonshire Fell - <a href="www.devonshirefell.co.uk/" target="_blank">www.devonshirefell.co.uk/</a></li>
                        <li>Bolton Abbey Cottages - <a href="www.boltonabbey.com/stay-with-us/holiday-cottages/" target="_blank">www.boltonabbey.com/stay-with-us/holiday-cottages/</a></li>
                        <li>The Bailey (Skipton) - <a href="https://thebaileyskipton.co.uk/" target="_blank">thebaileyskipton.co.uk/</a></li>
                        <li>Grassington House - <a href="https://www.grassingtonhouse.co.uk/" target="_blank">www.grassingtonhouse.co.uk/</a></li>
                        <li>The Devonshire (Grassington): <a href="https://www.thedevonshiregrassington.co.uk/" target="_blank">www.thedevonshiregrassington.co.uk/</a></li>
                        <li>Salt Pot Cottage - <a href="https://www.instagram.com/saltpot_cottage/?hl=en" target="_blank">www.instagram.com/saltpot_cottage/?hl=en</a></li>
                    </ul>
                </div>
            </div>
            <RSVP />
        </div>
    </div>
</template>


<script>

export default {    
    created() {
        this.$emit('defaultView', false);
        for (let i = 0; i < document.styleSheets[0].rules.length; i++) {
            document.styleSheets[0].removeRule(i);
        }
        document.title = "The wedding of Kim & Josh";
        
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "black";
        body.style.color = "silver";
        body.style.fontFamily = "'Rubik', sans-serif";
    },
    data() {
        return {
            password: '',
            invite: '',
            passwordError: false
        }
    },
    methods: {
        submitPassword: function() {
            if (this.password.toUpperCase() === 'JK2023') {
                this.invite = 'day';
                let body = document.getElementsByTagName("body")[0];
                body.style.background = "linear-gradient(0deg, rgb(0, 0, 9) 0%, rgb(135, 28, 9) 100%)";
            } else if (this.password.toUpperCase() === 'HUGHES2023') {
                this.invite = 'evening';
                let body = document.getElementsByTagName("body")[0];
                body.style.background = "linear-gradient(0deg, rgb(0, 0, 9) 0%, rgb(135, 28, 9) 100%)";
            } else {
                this.passwordError = true;
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:wght@500&display=swap');
.main-page {
    padding: 0px;
    color: silver;
}

a {
    color: #a85f0c;
}

.hero {
    width: 100%;
    padding: 0px;
    position: absolute;
    height:770px;
    background-image: url('../assets/IMAG0152.jpg');
    background-position-x: 40%;
    background-position-y: 20%;
    top: 0;
    left: 0;
}

.info {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    text-align: start;
    padding-left: 10px;
}

.map {
    padding-top:15px;
    display: inline-block;
}

.spacer {
    width: 100%;
    height: 770px;
}

button {
    all:revert;
}

.title {
    font-size:larger;
    font-weight: bold;
    font-family: 'Pacifico', cursive;
}

.header {
    font-family: 'Pacifico', cursive;
    margin-bottom: 0px !important;
}

.venue-details {
    height: fit-content;
}

.submit-button {
    margin: 10px;
}

.password-error {
    color: rgb(135, 28, 9);
}

@media screen and (max-width: 775px) {
    .hero {
        width: 100%;
        padding: 0px;
        position: absolute;
        height: 500px;
        background-image: url('../assets/IMAG0152.jpg');
        background-size: 1280px 770px;
        background-position-x: 45%;
        background-position-y: 20%;
        top: 0;
        left: 0;
    }

    .spacer {
        width: 100%;
        height: 500px;
    }

    .main-page {
        padding: 0px;
        color: silver;
    }
}

</style>