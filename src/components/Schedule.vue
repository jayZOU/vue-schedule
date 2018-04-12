<template>
    <div class="schedule">
    	<div class="time-ground">
    		<ul>
    			<li v-for="time in pageTimeGround">
    				<span>{{time}}</span>
    				<p :style="timeListSty"></p>
    			</li>
    		</ul>
    	</div>
    	<div class="task-ground">
    		<ul>
    			<li v-for="(week, index) in weekGround" class="task-list">
    				<p>{{week}}</p>
    				<ul :style="taskListSty">
    					<li class="task-list-item" v-for="detail in taskDetail[index]" :style="detail.styleObj" @click="showDetail(detail, week)">
    						<p>{{detail.dateStart}} - {{detail.dateEnd}}</p>
    						<h3>{{detail.title}}</h3>
    					</li>
    				</ul>
    			</li>
    		</ul>
    	</div>

    	<modal :show="showModal" :show-modal-detail="showModalDetail"> </modal>
    </div>
</template>

<style scoped>
	.schedule{
		width: 80%;
		max-width: 1400px;
		margin: 0 auto;
		position: relative;
	}
	.time-ground{
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}
	.time-ground ul li{
		margin-top: 50px;
		font-size: 1rem;
		height: 50px;
	}
	.time-ground ul li span{
		position: absolute;
		left: -60px;
		transform: translateY(-50%);
	}
	.time-ground ul li p{
		position:absolute;
		left: 0;

		height: 1px;
		background-color: #EAEAEA;
	}
	.task-ground{
		width: 100%;
	}
	.task-list{
		float: left;
		width: 14%;
		box-sizing:border-box;
		border:1px solid #EAEAEA;
	}
	.task-list p{
		text-align: center;
		font-size: 1rem;
		padding: 1rem;
	}
	.task-list-item{
		position: absolute;
		background-color: #577F92;
		width: 14%;
		height: 50px;
		cursor: pointer;
	}
	.task-list-item p{
		text-align: left;
		padding: 0;
		margin: 1rem 0 0 1rem;
		font-size: 0.8rem;
		color: #EDF2F6;
	}
	.task-list-item h3{
		color: #E0E7E9;
		margin: 1rem 0 0 1rem;
	}
</style>

<script>
import Modal from './Modal.vue';
export default {
	name: 'Schedule',
	props: {
		timeGround: {
			type: Array,
			default: []
		},
		weekGround: {
			type: Array,
			default: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday'
			]
		},
		taskDetail: {
			type: Array,
			default: []
		},
		color: {
			type: Array,
			default(){
				return [
					"#2B2E4A",
					"#521262",
					"#903749",
					"#53354A",
					"#40514E",
					"#537780",
				]
			}
		}
	},
	components: {
		Modal: Modal
	},
	// watch: {
	// 	timeGround: function(value){
	// 		this.timeGround = value
	// 	}
	// },
	watch: {
		timeGround(value) {

				// console.log('value=', value);
				this.pageTimeGround = this.initTimeGroud(value);
				// return value;
		}
	},
	data() {
		return {
			pageTimeGround: [],
			showModal: false,
			showModalDetail: {
				dateStart: '09:30',
				dateEnd: '10:30',
				title: 'Metting',
				week: 'Monday',
				styleObj: {
					backgroundColor: "#903749"
				},
				detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
			},
			taskListSty: {
				height: '900px'
			},
			timeListSty: {
				width: '100%'
			}
		}
	},
	created() {
		// console.log(this.ta)
		this.pageTimeGround = this.initTimeGroud(this.timeGround);

		let maxTime = this.pageTimeGround[this.pageTimeGround.length - 1];
		let minTime = this.pageTimeGround[0];
		let maxMin = maxTime.split(':')[0] * 60 + maxTime.split(':')[1] * 1;
		let minMin = minTime.split(':')[0] * 60 + minTime.split(':')[1] * 1;
		// console.log(maxMin);
		// console.log(minMin);
		// console.log(maxTime);
		for (let i = 0; i < this.taskDetail.length; i++) {
		    for (let j = 0; j < this.taskDetail[i].length; j++) {
		    	// console.log(this.taskDetail[i][j]);
		        let startMin = this.taskDetail[i][j].dateStart.split(':')[0] * 60 + this.taskDetail[i][j].dateStart.split(':')[1] * 1;
		        let endMin = this.taskDetail[i][j].dateEnd.split(':')[0] * 60 + this.taskDetail[i][j].dateEnd.split(':')[1] * 1;
		        if(startMin < minMin || endMin > maxMin) {
		        	this.taskDetail[i].splice(j, 1);
		        	j--;
		        	continue
		        };
		        // console.log(endMin);
		        let difMin = endMin - startMin;
		        // console.log(startMin);
		        // console.log(endMin);
		        this.taskDetail[i][j].styleObj = {
		            height: difMin * 100 / 60 + 'px',
		            top: ((startMin - (this.pageTimeGround[0].split(":")[0] * 60 + this.pageTimeGround[0].split(":")[1] * 1)) * 100 / 60) + 50 + 'px',
		            backgroundColor: this.color[~~(Math.random() * this.color.length)]
		        }
		        // console.log(this.color[~~(Math.random() * 4)]);
		        // console.log(this.taskDetail);
		        // console.log(this.timeGround);
		    }
		}
		console.log(this.taskDetail);
	},
	mounted() {
		this.taskListSty.height = (this.pageTimeGround.length - 1) * 100 + 'px';
		this.timeListSty.width = this.weekGround.length * 14 + '%';

		// console.log(this.taskDetail);
		// console.log(this.weekGround);
	},
	methods: {
		showDetail(obj, week){
			obj.week = week;
			this.showModalDetail = obj;
			this.showModal = !this.showModal;
		},
		initTimeGroud(value){
			if(value && value.length == 2){
					let startTime = value[0].split(":")[0] * 1;
					let endTime = value[1].split(":")[0] * 1;
					value = [];
					for(let i = startTime; i <= endTime; i++){
						// console.log(1);
						// value.push()
						let hour = i < 10 ? "0" + i : "" + i;
						value.push(hour + ":00");
					}
				}else{
					value = [
						"09:00",
						"10:00",
						"11:00",
						"12:00",
						"13:00",
						"14:00",
						"15:00",
						"16:00",
						"17:00",
						"18:00",
					]
				}
				return value;
		}
	}
}
</script>
