
let totalTask = document.getElementById('total-tasks');
let taskCount = document.getElementById('task-count');
let allBtns = document.querySelectorAll('.task-btn');
let taskTitle = document.querySelectorAll('.taskTitle');

for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", function(){
        alert("Board Updated Successfully!!");

        // disbled Button
        allBtns[i].setAttribute("disabled", "true");
        allBtns[i].classList.add("desabled");
        
        // task Compeled value update
        let taskCount = document.getElementById('task-count');
        let taskCounts = parseInt(taskCount.innerText);
        taskCounts--;
        taskCount.innerText = taskCounts;

        let totalTask = document.getElementById('total-tasks');
        let totaltasks = parseInt(totalTask.innerText);
        totaltasks++;
        totalTask.innerText = totaltasks;

        // congrats Alert
        if(taskCounts === 0){
            alert('Congrates!!! You have completed all the current tasks.');
        }

        // history with title
        let crntTitle = taskTitle[i].innerText;
        let taskDate = new Date();
        let currentTime = taskDate.toLocaleTimeString();
        console.log(currentTime);
        let updatePara = `You Have Complete The Task <strong>${crntTitle}</strong> at ${currentTime}`;

        let p = document.createElement("p");
        p.innerHTML = updatePara;
        p.classList.add('history-para');

        let historyContainer = document.getElementById('history');
        console.log(historyContainer);
        historyContainer.appendChild(p);
    })
}

// clear History
document.getElementById('historyBtn').addEventListener('click', function(){
    let allHistory = document.getElementById('history');
    allHistory.innerText = '';
})

// Current Date 
let currentDate = document.getElementById('currentDate');
let weekDay = document.getElementById('dayName');
const crntDate = new Date();
const year = crntDate.getFullYear();
// const month = String(crntDate.getMonth() + 1).padStart(2, '0');
const month = crntDate.toLocaleDateString('en-US', { month: 'short'});
const day = String(crntDate.getDate()).padStart(2, '0');
const dayName = crntDate.toLocaleDateString('en-US', {weekday: 'short'});
currentDate.innerText = `${month} ${day} ${year}`;
weekDay.innerText = `${dayName} ,`

// Background color Change
document.getElementById('themdChanger').addEventListener('click', function(){
    const colors = ['#89A8B2', '#F1F0E8', '#D6EFD8', '#D9EAFD'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// Discover Somthing New 

const blogPage = document.getElementById('task-discover');

blogPage.addEventListener('click', function(){
    window.location.href = "blog.html";
})
