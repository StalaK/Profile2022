<template>
    <div class="rsvp-form">
        <h2>RSVP</h2>
        <form v-on:submit.prevent="rsvp" v-if="showForm">
            <div class="form-group">
                <label>Name(s):</label><br />
                <input type="text" class="input-area" v-model="names" />
                <div class="error" v-if="namesError">Please enter the name(s) of the people you're RSVPing for!</div>
            </div>

            <div class="form-group">
                <input type="radio" id="coming" name="coming" value="true" v-model="coming">
                <label for="coming">I'm / We're coming!</label><br />
                <input type="radio" id="not-coming" name="coming" value="false" v-model="coming">
                <label for="not-coming">I / We can't make it</label>
                <div class="error" v-if="comingError">Please select whether you're coming or not!</div>
            </div>
            
            <div class="form-group">
                <label>The song I will dance to is:</label><br />
                <input type="text" class="input-area" v-model="songRequest" />
            </div>

            <div class="form-group">
                <label>Dietary requirements:</label><br />
                <input type="text" class="input-area" placeholder="Enter 'NA' if none" v-model="dietaryRequirements" />
                <div class="error" v-if="dietaryRequirementsError">Please enter dietary requirements. Enter NA if you have none</div>
            </div>

            <div class="form-group">
                <label>Would you like us to book a taxi back to Skipton or the surrounding area?</label><br />
                <textarea placeholder="Tell us where you're staying" class="input-area" rows="4" v-model="taxiDetails"></textarea>
            </div>

            <div class="form-group">
                <label>Anything else you need to tell us?</label><br />
                <textarea v-model="additionalInfo" class="input-area" rows="4"></textarea>
            </div>

            <div class="form-group">
                <button type="submit" class="input-area submit-button">Submit</button>
            </div>
        </form>
        <div v-else>
            RSVP sent!<br />
            We look forward to seeing you at our wedding!
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: '',
            namesError: false,
            coming: "true",
            comingError: false,
            songRequest: '',
            dietaryRequirements: '',
            dietaryRequirementsError: false,
            taxiDetails: '',
            additionalInfo: '',
            showForm: true
        }
    },
    methods: {
        rsvp: function() {
            this.validate();

            if (this.namesError || this.comingError || this.dietaryRequirementsError)
                return;

            let model = {
                names: this.names,
                coming: this.coming === 'true',
                DietaryRequirements: this.dietaryRequirements,
                TaxiLocation: this.taxiDetails,
                AdditionalInfo: this.additionalInfo,
                SongRequest: this.songRequest
            };

            fetch("https://wedding20230509200137.azurewebsites.net/api/RSVP?code=VAxUz67tHV2CUD4DKnwS12JMsBsMbsUW-BRdIkD6aq3fAzFuqS5ZGA==", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",                
                },
                body: JSON.stringify(model)
            });

            this.showForm = false;
        },
        validate: function() {
            this.namesError = false;
            this.comingError = false;
            this.dietaryRequirementsError = false;

            if (this.names.trim() == '') {
                this.namesError = true;
            }

            if (this.coming !== 'true' && this.coming !== 'false') {
                this.comingError = true;
            }

            if (this.dietaryRequirements.trim() == '') {
                this.dietaryRequirementsError = true;
            }
        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:wght@500&display=swap');

h2 {
    font-family: 'Pacifico', cursive;
}

.rsvp-form {
    display: block;
}

button {
    all: revert;
}

.form-group {
    padding-top: 15px;
}

.input-area {
    width: 200px;
}

.error {
    color: rgb(135, 28, 9);
}

.submit-button {
    margin-bottom: 30px;
}
</style>
