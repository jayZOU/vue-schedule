# vue-schedule

@(自造轮子)

##vue-schedule
> Vue.js file schedule component

##install

    npm install vue-schedule --save

##Example
[http://jayzou.github.io/demo/vue-schedule/index.html](http://jayzou.github.io/demo/vue-schedule/index.html)
```Html
	<div id="app">
		<Schedule 
			:time-ground="['09:00', '18:00']" 
			:week-ground="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" 
			:task-detail="[
				[
					{
						dateStart: '09:30',
						dateEnd: '10:30',
						title: '开会',
					},
					{
						dateStart: '11:30',
						dateEnd: '13:50',
						title: '开会',
					}
					
				]
			]">
				
		</Schedule>
	</div>
```

##CommonJS
```javascript
	var Vue = require('vue');
	var Schedule = require('vue-schedule');
	new Vue({
	    el: '#app',
	    components: {
	        Schedule: Schedule,
	    }
	})
```

##ES6
```javascript
	import Vue from 'vue';
	import Schedule from 'vue-schedule';
	new Vue({
	    el: '#app',
	    components: {
	        Schedule: Schedule,
	    }
	})
```

##props
**time-ground:**时间范围
示例	
```javascript
	:time-ground="['09:00', '18:00']" 
```

**week-ground:**星期
示例	
```javascript
	:week-ground="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']" 
```

**task-detail:**具体事项，具体事项需要与星期对应
示例	
```javascript
	:task-detail = "[  
		[
			{
			    dateStart: '09:30',
			    dateEnd: '10:30',
			    title: '开会',
			}, 
			{
			    dateStart: '11:30',
			    dateEnd: '13:50',
			    title: '开会',
			}
	
		], 
		[
			{
			    dateStart: '10:30',
			    dateEnd: '12:00',
			    title: '开会',
			}, 
			{
			    dateStart: '12:30',
			    dateEnd: '14:50',
			    title: '开会',
			}
			
		], 
		[
			{
			    dateStart: '12:30',
			    dateEnd: '13:30',
			    title: '开会',
			}, 
			{
			    dateStart: '15:30',
			    dateEnd: '16:50',
			    title: '开会',
			}
		
		], 
		[
			{
			    dateStart: '09:50',
			    dateEnd: '10:50',
			    title: '开会',
			}, 
			{
			    dateStart: '11:30',
			    dateEnd: '13:50',
			    title: '开会',
			}
		
		], 
		[
			{
			    dateStart: '12:30',
			    dateEnd: '13:30',
			    title: '开会',
			}, {
			    dateStart: '14:30',
			    dateEnd: '15:50',
			    title: '开会',
			}
		]
	]"
```