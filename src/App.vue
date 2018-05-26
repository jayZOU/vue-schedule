<template>
  <!--Saturday-->
  <div id="app">
    <Schedule
      :time-ground="['09:00', '21:00']"
      :week-ground="['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
      :color="[
        '#2B2E4A',
        '#521262',
        '#903749',
        '#53354A',
        '#40514E',
        '#537780',
      ]"
      :task-detail="[
        [
          {
            dateStart: '09:30',
            dateEnd: '10:30',
            title: 'Metting',
            detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: 'Metting',
            detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
          },

        ],
        [
          {
            dateStart: '10:30',
            dateEnd: '12:00',
            title: 'Metting',
          },
          {
            dateStart: '12:30',
            dateEnd: '14:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '12:30',
            dateEnd: '13:30',
            title: 'Metting',
          },
          {
            dateStart: '15:30',
            dateEnd: '16:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '09:50',
            dateEnd: '10:50',
            title: 'Metting',
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '12:30',
            dateEnd: '13:30',
            title: 'Metting',
          },
          {
            dateStart: '14:30',
            dateEnd: '15:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '14:30',
            dateEnd: '15:30',
            title: 'Metting',
          },
          {
            dateStart: '17:30',
            dateEnd: '19:50',
            title: 'Metting',
          }

        ]
      ]">

    </Schedule>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
