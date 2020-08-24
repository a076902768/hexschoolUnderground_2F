function init(){
  let day=new Date();
  let now_hour=day.getHours();//now hour
  if(now_hour>12){
    now_hour-=12;
  }
  let now_minute=day.getMinutes();//now minute
  let now_second=day.getSeconds();//now second
  let total_seconds=now_minute+now_second/60;//總second=目前的minute+目前的second/60
  let total_hours=now_hour+now_minute/60+now_second/3600;//總hours=目前的hour+目前的minute/60+目前的second/3600
  document.getElementById("second_hand").style.transform="rotate("+(now_second*6-180)+"deg)";//6=360度:60秒的比值，因為指針預設為指向6點，所以還要再減180度
  document.getElementById("minute_hand").style.transform="rotate("+(total_seconds*6-180)+"deg)";
  document.getElementById("hour_hand").style.transform="rotate("+(total_hours*30-180)+"deg)";
}//初始化
init();
//如果沒有先將時鐘初始化，時鐘在第一秒時會先異常再正常，因為setInterval最開始會先停滯一秒再執行。
let timer=window.setInterval(function(){
  let day=new Date();
  let hour=day.getHours();//取得當前 hour
  if(hour>12){
    hour-=12;
  }
  let second=day.getSeconds();//取得當前 second
  let minute=day.getMinutes();//取得當前 minute
  console.log(hour+"時"+minute+"分"+second+"秒");
  
  
  document.getElementById("second_hand").style.transform="rotate("+(second*6-180)+"deg)";
  document.getElementById("minute_hand").style.transform="rotate("+((minute+second/60)*6-180)+"deg)";
  document.getElementById("hour_hand").style.transform="rotate("+((hour+minute/60+second/3600)*30-180)+"deg)";
},1000);//每秒固定抓取當前時間。