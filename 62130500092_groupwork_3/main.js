const app = {
    data() {
        return {
            photos: [{ image: 'images/1.jfif', name: 'Shahmirzad, Iran', done: false },
            { image: 'images/2.jfif', name: 'Refuge des Merveilles, Tende, France', done: false },
            { image: 'images/3.jfif', name: 'Moena, Italy', done: false }
            ]
        }
    },
    methods: {
        clickLike(index) {
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