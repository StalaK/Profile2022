<script setup>
import moment from 'moment'
</script>

<template>
    <div class="content">
        <div v-if="displayLoading">
            Loading blog posts...
        </div>
        <div v-for="post in pagePosts" :key="post.ID">
            <div v-html="post.title" class="post-title"></div>
            <div v-html="post.content"></div>
            <div class="post-footer">
                <span>Posted on {{formatDate(post.date)}}.</span>
                <span v-if="post.date !== post.modified"> Last updated on {{formatDate(post.modified)}}</span>
            </div>
        </div>
        <div class="blog-controls">
            <span class="previous-page" v-on:click="previousPage" v-if="currentPage > 1">▶ Newer</span>
            <span class="next-page" v-on:click="nextPage" v-if="currentPage < pageCount">◀ Older</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            pagePosts: [],
            pageCount: 0,
            postsPerPage: 1,
            currentPage: 1,
            displayLoading: true
        }
    },
    mounted: function(){
        this.displayLoading = true;

        fetch('https://public-api.wordpress.com/rest/v1.1/sites/joshhprofile.wordpress.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                this.posts = Array.from(responseJson.posts);
                this.pageCount = Math.ceil(this.posts.length / this.postsPerPage);
                this.pagePosts = this.posts.slice(0, this.postsPerPage);
            })
            .then(() => { this.displayLoading = false });
    },
    methods: {
        formatDate: function(date) {
            return moment(date).format('MMMM Do YYYY, HH:mm');
        },
        nextPage: function() {
            this.pagePosts = [];
            let startPost = this.currentPage * this.postsPerPage;
            let endPost = startPost + this.postsPerPage;
            this.pagePosts = this.posts.slice(startPost, endPost)
            this.currentPage += 1;
        },
        previousPage: function() {
            this.pagePosts = [];
            this.currentPage -= 1;
            let endPost = this.currentPage * this.postsPerPage;
            let startPost = endPost - this.postsPerPage;
            this.pagePosts = this.posts.slice(startPost, endPost)
        },
    }
}
</script>

<style scoped>
.content {
  padding: 50px;
  background-color: #7fffd4;
  border: 5px solid black;
  border-radius: 20px;
  box-shadow: 10px 10px black;
  text-align: start;
}

.post-title {
    font-size: larger;
    font-weight: bolder;
}

.post-footer {
    text-align: end;
    padding-bottom: 2rem;
    font-style: italic;
}

.blog-controls {
    width: 100%;
}

.next-page {
    width: 50%;
    text-align: right;
    cursor: pointer;
    
}
.previous-page {
    width: 50%;
    text-align: left;
    cursor: pointer;
}

</style>
