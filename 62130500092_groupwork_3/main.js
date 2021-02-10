const app = {
    data() {
        return {
            photos: [{ image: 'images/1.jpg', name: 'Shahmirzad, Iran', done: false },
            { image: 'images/2.jpg', name: 'Merveilles, France', done: false },
            { image: 'images/3.jpg', name: 'Moena, Italy', done: false }
            ]
        }
    },
    methods: {
        clickHeart(index) {
            this.photos[index].done = !this.photos[index].done
        }
    },
    computed: {
        countPic() {
            return this.photos.filter(t => !t.false).length
        }
    }

}
Vue.createApp(app).mount('#app')