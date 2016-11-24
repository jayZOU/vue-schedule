<template>
	<div class="modal-mask" v-show="show" transition="modal" v-on:click="close">
	    <div class="modal-wrapper">
	      <div class="modal-container" :style="{'backgroundColor': showModalDetail.styleObj.backgroundColor}">

	        <div class="modal-header">
	          <a class="close" @click="show = false">X</a>
	        </div>
	        
	        <div class="modal-body">
	        	<h2>{{showModalDetail.title}}</h2>
	        	<small>{{showModalDetail.dateStart}} - {{showModalDetail.dateEnd}}</small>
	        	<p>{{showModalDetail.detail}}</p>
	        </div>

	        <!-- <div class="modal-footer">
	          <slot name="footer">
	            default footer
	            <button class="modal-default-button"
	              @click="show = false">
	              OK
	            </button>
	          </slot>
	        </div> -->
	      </div>
	    </div>
	</div>
</template>

<style scoped>
	.modal-mask {
	  position: fixed;
	  z-index: 9998;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, .5);
	  display: table;
	  transition: opacity .3s ease;
	}

	.modal-wrapper {
	  display: table-cell;
	  vertical-align: middle;
	}

	.modal-container {
	  width: 50%;
	  margin: 0px auto;
	  padding: 20px 30px;
	  background-color: #fff;
	  border-radius: 2px;
	  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	  transition: all .3s ease;
	  font-family: Helvetica, Arial, sans-serif;
	  color: #FFF;
	}

	.close{
		float: right;
		margin: -0.5rem -1rem 0 0;
		text-decoration: none;
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
	}

	.modal-body {
		text-align: center;
	  margin: 20px 0;
	}
	.modal-body h2{
		font-size: 1.5rem;
		font-weight: bold;
	}
	.modal-body p {
		font-size: 0.8rem;
		text-align: left;

	}

	.modal-body small{
		display: block;
		font-size: 0.8rem;
		margin: 20px 0;
		/*font-weight: bold;*/
	}

	.modal-default-button {
	  float: right;
	}

	.modal-enter, .modal-leave {
	  opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave .modal-container {
	  -webkit-transform: scale(1.1);
	  transform: scale(1.1);
	}
</style>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			showModalDetail: {
				type: Object,
				default(){
				}
			},
		},

		methods: {
			close(e) {
				if(e.target.className == "modal-wrapper") this.show = false;
				// console.log(e);
				// console.log(e.target.className)
			}
		}



	}
</script>