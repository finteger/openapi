<script  src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>

document.addEventListener('DOMContentLoaded', function(){

    const studentsData = JSON.parse('<%- JSON.stringify(students) %>');


    //Calculate the sum of attendance counts
    const sumAttendanceCount = '<%= maxAttendanceCount %>';

    //Calculate the percentages of attendance
    const percentages = studentsData.map(student => (student.attendanceCount / sumAttendanceCount) * 100 );

  
    
    //Create labels and data arrays
    const labels = studentsData.map(s => (s.attendanceDate ? `${s.name} - ${new Date(s.attendanceDate).toLocaleDateString()}`: ""));


    const data = percentages;



    // Create the Chart.js bar chart

    new Chart(

      document.getElementById('attendanceChart'),

      {

        type: 'pie', // Change to 'bar' chart type

        data: {

          labels: labels,

          datasets: [

            {

              label: 'Attendance Percentage',

              data: data,

              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: true,

          scales: {

            y: {

              beginAtZero: true,

              title: {

                display: true,

                text: 'Percentage (%)'

              }

            },

            x: {

              title: {

                display: true,

                text: 'Student & Date'

              },

              ticks: {

          font: {

            size: 8 // Adjust the font size for the tick labels

          }

        }

            }

          }

        }

      }

    );

});




</script>
