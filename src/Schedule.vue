<template>
    <div class="schedule">
    	<div class="time-ground">
    		<ul>
    			<li v-for="time in timeGround">
    				<span>{{time}}</span>
    				<p v-bind:style="timeListSty"></p>
    			</li>
    		</ul>
    	</div>
    	<div class="task-ground">
    		<ul>
    			<li v-for="week in weekGround" class="task-list">
    				<p>{{week}}</p>
    					<!-- {{$index}} -->
    				<ul v-bind:style="taskListSty">
    					<li class="task-list-item" v-for="detail in taskDetail[$index]" v-bind:style="detail.styleObj" @click="showDetail(detail)">
    						<p>{{detail.dateStart}} - {{detail.dateEnd}}</p>
    						<h3>{{detail.title}}</h3>
    					</li>
    				</ul>
    			</li>
    		</ul>
    	</div>

    	<modal :show.sync="showModal" :show-modal-detail.sync="showModalDetail">
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
		/*content:"";*/
		position:absolute;
		left: 0;
		
		height: 1px;
		background-color: #EAEAEA;
	}
	/*.line{
		border-bottom: 1px solid #EAEAEA;
	}*/
	.task-ground{
		width: 100%;
	}
	.task-list{
		float: left;
		width: 20%;
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
		width: 20%;
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
	props: {
		timeGround: {
			coerce(value){
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
			type: Object,
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
	data() {
		return {
			showModal: false,
			showModalDetail: {},
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
		for (let i = 0; i < this.taskDetail.length; i++) {
		    for (let j = 0; j < this.taskDetail[i].length; j++) {
		        let startMin = this.taskDetail[i][j].dateStart.split(':')[0] * 60 + this.taskDetail[i][j].dateStart.split(':')[1] * 1;
		        let endMin = this.taskDetail[i][j].dateEnd.split(':')[0] * 60 + this.taskDetail[i][j].dateEnd.split(':')[1] * 1;


		        let difMin = endMin - startMin;
		        // console.log(startMin);
		        // console.log(endMin);

		        this.taskDetail[i][j].styleObj = {
		            height: difMin * 100 / 60 + 'px',
		            top: ((startMin - (this.timeGround[0].split(":")[0] * 60 + this.timeGround[0].split(":")[1] * 1)) * 100 / 60) + 50 + 'px',
		            backgroundColor: this.color[~~(Math.random() * 6)]
		        }

		        // console.log(this.color[~~(Math.random() * 4)]);
		        // console.log(this.taskDetail);
		        // console.log(this.timeGround);
		    }
		}
	},
	compiled() {
		this.taskListSty.height = (this.timeGround.length - 1) * 100 + 'px';

		this.timeListSty.width = this.weekGround.length * 20 + '%';
		

		// console.log(this.taskDetail);
		// console.log(this.weekGround);
	},
	methods: {
		showDetail(obj){
			this.showModalDetail = obj;
			this.showModal = true;
			console.log(this.showModalDetail);
		}
	}
}
</script>