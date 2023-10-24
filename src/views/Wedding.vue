<script setup>
import RSVP from '../components/RSVP.vue'
import WeddingMap from '../components/WeddingMap.vue'
</script>

<template>
    <div class="main-page">
        <div class="spacer"></div>
        <article class="content-area">
            <div class="content">
                <p>To our wonderful friends and family,</p>
                <p>Thank you very much for celebrating our special day with us. Your love and support helped make our perfect day possible.</p>
                <p>
                    If you have any photos you wish to share with us, we have a Google Drive which you can upload them to, <a href="https://drive.google.com/drive/folders/1ojbP7TzAYZjW_41bCtUS8JyJrCk8-lEO?usp=sharing">which you can access here</a>.<br />
                    You should also be able to see photographs which other people have taken and shared with us.
                </p>
                <p>
                    Our photographer and videographer are hard at work preparing our memories from our wonderful day.<br />
                    In the meantime, we kindly request you don't share any photos on social media until we've had a chance to do so.
                </p>
                <p>
                    Finally, we'd like to say a big thank you to everyone for your cards, gifts and contributions towards our honeymoon.<br />
                    You being at the wedding was the most important thing to us, however if you'd still like to make a contribution to our honeymoon to New Zealand, you can do so at <a href="www.trailfinders.com/wishlist">www.trailfinders.com/wishlist</a> and entering the following:
                </p>
                <p>
                    <b>Surname:</b> Hughes<br />
                    <b>Reference:</b> 5BM75P
                </p>
                <p>Once again, a massive thank you for being there, it means the world to us!</p>
                <p>
                    Lots of love,<br />
                    Mr & Mrs Hughes
                </p>
            </div>
        </article>
    </div>
</template>


<script>

export default {    
    created() {
        this.$emit('defaultView', false);
        for (let i = 0; i < document.styleSheets[0].rules.length; i++) {
            document.styleSheets[0].removeRule(i);
        }
        document.title = "❤️ Thank You, From Kim & Josh ❤️";
        
        let body = document.getElementsByTagName("body")[0];
        body.style.backgroundImage = "url('/src/assets/Kim_Josh_Sneak_Peek-20.jpg')"
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "top center";
        body.style.backgroundAttachment = "fixed";
        body.style.fontFamily = "'Rubik', sans-serif";
        body.style.margin = 0;
    }
}
</script>

<style scoped>

.main-page {
    padding: 0px;
    color: black;
    text-align: center;
}

.content-area {
    position: absolute;
    left: 0;
    width: 100%;
    height: fit-content;
    background: white;
    margin: 0;
    padding: 0;
    opacity: 90%;
}

.spacer{
    height: 100vh;
    width: 100%;
}

.content {
    display: inline-block;
    width: 60%;
    border: 10px double #006600;
    height: fit-content;
    border-radius: 50px;
    margin: 15px;
    padding: 15px;
    font-size: 2rem;
}

@media screen and (max-width: 775px) {
    .content {
        width:80%;
        overflow-wrap: break-word;
        font-size: 1.5rem;
    }
}

</style>