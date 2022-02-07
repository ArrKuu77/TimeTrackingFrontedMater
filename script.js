// const url = './data.json';

// fetch(url)
// .then((response) =>{
//     const responseData = response.json();
//     console.log(responseData)
// })
//   let DWM = 'weekly';
//   const DWMColumTag  = document.querySelectorAll(".DWMColum");
//   const LiveContainerTag = document.getElementsByClassName("LiveContainer")[0];

// const CreateLiveContainer = (element,tranform) => {
//   const title = element.title;
//   const current = element.timeframes[tranform].current;
//   const previous = element.timeframes[tranform].previous;

//   // console.log(title,current,previous);
//   return`
//     <div class="regularcard ${title.replace(/\s/g,)}">
//             <div class="WorkText">
//               <div class="WorkHead">
//                 <span>${title}</span>
//                 <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
//               </div>
//               <div class="WorkHrs">${current}hrs</div>
//                 <div class="WLWhrs">LastWeek -${previous}hrs</div>
//             </div>
//       </div>
//     `
//   }

//   UserData.forEach(element => {
//   const CreatDWMLiveContainer = CreateLiveContainer(element,DWM);
//   LiveContainerTag.insertAdjacentHTML("beforeend",CreatDWMLiveContainer)
// });

// const updateCreate = (element,tranform) => {
//   console.log(element,tranform)
// }

// const updateCreateLiveContainer = (tranform) => { //daily
//   regularcard.forEach(element => {
//     updateCreate(element,tranform);
//   })
// }

// const menuOnClick = (event) => {
//     //console.log(event.target.innerText)
//     DWMColumTag.forEach(element => {
//         element.classList.remove("DWMwhitecolour");
//     });
//     event.target.classList.add("DWMwhitecolour");
//     DWM = event.target.innerText.toLowerCase();
//     console.log(DWM);
//     updateCreateLiveContainer(DWM)
//     // LiveContainerTag.
//     // LiveContainerTag.insertAdjacentHTML("beforeend",updateCreateLiveContainer(DWM));
// }


// DWMColumTag.forEach(element => {
//     element.addEventListener("click",menuOnClick);

// });
// const UserData= [
//     {
//       "title": "Work",
//       "timeframes": {
//         "daily": {
//           "current": 5,
//           "previous": 7
//         },
//         "weekly": {
//           "current": 32,
//           "previous": 36
//         },
//         "monthly": {
//           "current": 103,
//           "previous": 128
//         }
//       }
//     },
//     {
//       "title": "Play",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 2
//         },
//         "weekly": {
//           "current": 10,
//           "previous": 8
//         },
//         "monthly": {
//           "current": 23,
//           "previous": 29
//         }
//       }
//     },
//     {
//       "title": "Study",
//       "timeframes": {
//         "daily": {
//           "current": 0,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 4,
//           "previous": 7
//         },
//         "monthly": {
//           "current": 13,
//           "previous": 19
//         }
//       }
//     },
//     {
//       "title": "Exercise",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 4,
//           "previous": 5
//         },
//         "monthly": {
//           "current": 11,
//           "previous": 18
//         }
//       }
//     },
//     {
//       "title": "Social",
//       "timeframes": {
//         "daily": {
//           "current": 1,
//           "previous": 3
//         },
//         "weekly": {
//           "current": 5,
//           "previous": 10
//         },
//         "monthly": {
//           "current": 21,
//           "previous": 23
//         }
//       }
//     },
//     {
//       "title": "Self Care",
//       "timeframes": {
//         "daily": {
//           "current": 0,
//           "previous": 1
//         },
//         "weekly": {
//           "current": 2,
//           "previous": 2
//         },
//         "monthly": {
//           "current": 7,
//           "previous": 11
//         }
//       }
//     }
//   ]

const url = './data.json';
let UserData = [];

fetch(url)
.then((response) =>{
    const responseData = response.json();
    return responseData;
}).then((Data) =>{
  UserData = Data;
  console.log(UserData);
  const LiveContainerTag = document.getElementsByClassName("LiveContainer")[0];
const dailyTag = document.getElementsByClassName("Daily")[0];
const weeklyTag = document.getElementsByClassName("Weekly")[0];
const MonthlyTag = document.getElementsByClassName("Monthly")[0];

createLiveContainer = "";
createLiveContainerDD = "";
createLiveContainerWW = "";
createLiveContainerMM = "";

weeklyTag.classList.add("DWMwhitecolour")
UserData.map((data) => {
  createLiveContainer += `
  <div class="regularcard ${data.title}">
            <div class=" ${data.title}Text">
               <div class=" ${data.title}Head">
                 <span>${data.title}</span>
                 <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
               </div>
               <div class = fooderLC>
               <div class="${data.title}Hrs">${data.timeframes.weekly.current}hrs</div>
                 <div class="WLWhrs">Last Week -${data.timeframes.weekly.previous}hrs</div>
                 </div>
             </div>
       </div>
  `
  LiveContainerTag.innerHTML = createLiveContainer;
});

dailyTag.addEventListener("click", () => {
  weeklyTag.classList.remove("DWMwhitecolour");
  MonthlyTag.classList.remove("DWMwhitecolour")
  if (dailyTag.classList.contains("DWMwhitecolour")) {
    return;
  }else{
  createLiveContainer = "";
  UserData.map((data) => {
    createLiveContainerDD += `
    <div class="regularcard ${data.title}">
              <div class=" ${data.title}Text">
                 <div class=" ${data.title}Head">
                   <span>${data.title}</span>
                   <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                 </div>
                 <div class = fooderLC>
                 <div class="${data.title}Hrs">${data.timeframes.daily.current}hrs</div>
                   <div class="WLWhrs">Yesterday -${data.timeframes.daily.previous}hrs</div>
                   </div>
               </div>
         </div>
    `
    LiveContainerTag.innerHTML = createLiveContainerDD;
    dailyTag.classList.add("DWMwhitecolour");
    createLiveContainerWW = "";
    createLiveContainerMM = "";
  });
  }
});

weeklyTag.addEventListener("click",() => {
  dailyTag.classList.remove("DWMwhitecolour");
  MonthlyTag.classList.remove("DWMwhitecolour");
  if (weeklyTag.classList.contains("DWMwhitecolour")) {
    return;
  }else{
  createLiveContainer = "";
  UserData.map((data) => {
    createLiveContainerWW += `
    <div class="regularcard ${data.title}">
              <div class=" ${data.title}Text">
                 <div class=" ${data.title}Head">
                   <span>${data.title}</span>
                   <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                 </div>
                 <div class = fooderLC>
                 <div class="${data.title}Hrs">${data.timeframes.weekly.current}hrs</div>
                  <div class="WLWhrs">Lest Week -${data.timeframes.weekly.previous}hrs</div>
                </div>
               </div>
         </div>
    `
    LiveContainerTag.innerHTML = createLiveContainerWW;
    weeklyTag.classList.add("DWMwhitecolour");
    createLiveContainerDD= "";
    createLiveContainerMM = "";
  });
  }
})

MonthlyTag.addEventListener("click",() => {
  dailyTag.classList.remove("DWMwhitecolour");
  weeklyTag.classList.remove("DWMwhitecolour");
  if (MonthlyTag.classList.contains("DWMwhitecolour")) {
    return;
  }else{
  createLiveContainer = "";
  UserData.map((data) => {
    createLiveContainerMM += `
    <div class="regularcard ${data.title}">
              <div class=" ${data.title}Text">
                 <div class=" ${data.title}Head">
                   <span>${data.title}</span>
                   <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                 </div>
                 <div class = fooderLC>
                 <div class="${data.title}Hrs">${data.timeframes.monthly.current}hrs</div>
                  <div class="WLWhrs">Last Month -${data.timeframes.monthly.previous}hrs</div>
                  </div>
               </div>
         </div>
    `
    LiveContainerTag.innerHTML = createLiveContainerMM;
    MonthlyTag.classList.add("DWMwhitecolour");
    createLiveContainerDD= "";
    createLiveContainerWW = "";
  });
  }
})
})

