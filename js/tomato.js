new Vue({
    el: '#app',
    data: {
        timer: null,
        isRunning: false,
        timeLeft: 25 * 60, // 25分钟
        newTask: '',
        tasks: []
    },
    computed: {
        formattedMinutes() {
            return String(Math.floor(this.timeLeft / 60)).padStart(2, '0');
        },
        formattedSeconds() {
            return String(this.timeLeft % 60).padStart(2, '0');
        }
    },
    methods: {
        startTimer() {
            if (!this.isRunning) {
                this.isRunning = true;
                this.timer = setInterval(() => {
                    if (this.timeLeft > 0) {
                        this.timeLeft--;
                    } else {
                        clearInterval(this.timer);
                        alert('时间到！休息一下吧！');
                        this.resetTimer();
                    }
                }, 1000);
            }
        },
        pauseTimer() {
            clearInterval(this.timer);
            this.isRunning = false;
        },
        resetTimer() {
            clearInterval(this.timer);
            this.isRunning = false;
            this.timeLeft = 25 * 60;
        },
        addTask() {
            const task = this.newTask.trim();
            if (task) {
                this.tasks.push({ text: task, completed: false });
                this.newTask = '';
            }
        },
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});
