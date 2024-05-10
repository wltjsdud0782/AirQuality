const dounutText = document.querySelector(".dounut-data")
const cartHeader = document.querySelector(".headerText")
const dounutIcon = document.querySelector(".dounut-icon")
const dounutDiv1 = document.querySelector(".dounutboard-div")
const dounutDiv2 = document.querySelector(".dounutboard2-div")
const dounutImg = document.querySelector(".dounut-img")

let pmCheck = [];
let fpmCheck = [];
let ciciCheck = [];

const pmData = document.querySelector(".pm-data")
const fpmData = document.querySelector(".fpm-data")
const ciciData = document.querySelector(".cici-data")

const pm = (airData) => {
  fpmData.style.color = "#fff";
  ciciData.style.color = "#fff";


  cartHeader.innerHTML = '';
  cartHeader.textContent = '미세먼지';
  dounutText.innerHTML = '';
  dounutText.textContent = airData.pmCode;
  dounutImg.innerHTML = '';
  dounutImg.src = "/icon/miseIcon.gif";
  // pmCheck = airData.fpmGrade;
  pmCheck.push(airData.pmGrade)

  if(pmCheck == '좋음'){
      pmData.style.color = "#7fd2da";
  }
  else if(pmCheck == '보통'){
      pmData.style.color = "#24b83c";
  }
  else if(pmCheck == '나쁨') {
      pmData.style.color = "#cfdb29";
  }else if(pmCheck == '매우 나쁨'){
      pmData.style.color = "#c51b1b";
  }

  if(airData.pmGrade == '좋음'){
    dounutDiv1.style.borderColor = '#7fd2da';
    dounutDiv2.style.borderColor = "#7fd2da";
    dounutText.style.color = "#7fd2da";
  }
  else if(airData.pmGrade == '보통'){
    dounutDiv1.style.borderColor = '#24b83c';
    dounutDiv2.style.borderColor = "#24b83c";
    dounutText.style.color = "#24b83c";
  }
  else if(airData.pmGrade == '나쁨'){
    dounutDiv1.style.borderColor = '#cfdb29';
    dounutDiv2.style.borderColor = "#cfdb29";
    dounutText.style.color = "#cfdb29";
  }
  else{
    dounutDiv1.style.borderColor = '#c51b1b';
    dounutDiv2.style.borderColor = "#c51b1b";
    dounutText.style.color = "#c51b1b";
  }
  pmCheck = [];
  ciciCheck = [];
}
const fpm = (airData) => {
  pmData.style.color = "#fff";
  ciciData.style.color = "#fff";
  
  console.log(airData)
  console.log(dounutText.textContent)
  cartHeader.innerHTML = '';
  cartHeader.textContent = '초미세먼지';
  dounutText.innerHTML = '';
  dounutText.textContent = airData.fpmCode
  dounutImg.innerHTML = '';
  dounutImg.src = "/icon/fcmIcon.gif";
  fpmCheck.push(airData.fpmGrade);

  if(fpmCheck == '좋음'){
    fpmData.style.color = "#7fd2da";
  }
  else if(fpmCheck == '보통'){
    fpmData.style.color = "#24b83c";
  }
  else if(fpmCheck == '나쁨') {
    fpmData.style.color = "#cfdb29";
  }
  else if(fpmCheck == '매우 나쁨'){
    fpmData.style.color = "#c51b1b";
  }

  if(airData.fpmGrade == '좋음'){
    dounutDiv1.style.borderColor = '#7fd2da';
    dounutDiv2.style.borderColor = "#7fd2da";
    dounutText.style.color = "#7fd2da";
  }
  else if(airData.fpmGrade == '보통'){
    dounutDiv1.style.borderColor = '#24b83c';
    dounutDiv2.style.borderColor = "#24b83c";
    dounutText.style.color = "#24b83c";
  }
  else if(airData.fpmGrade == '나쁨'){
    dounutDiv1.style.borderColor = '#cfdb29';
    dounutDiv2.style.borderColor = "#cfdb29";
    dounutText.style.color = "#cfdb29";
  }
  else{
    dounutDiv1.style.borderColor = '#c51b1b';
    dounutDiv2.style.borderColor = "#c51b1b";
    dounutText.style.color = "#c51b1b";
  }
  fpmCheck = [];
  ciciCheck = [];
}

const cici = (airData) =>{
  fpmData.style.color = "#fff";
  pmData.style.color = "#fff";
  console.log(airData.ciciVO.ciciCode)

  cartHeader.innerHTML = '';
  cartHeader.textContent = '통합실내지수';
  dounutText.innerHTML = '';
  dounutText.textContent = airData.ciciVO.ciciCode;
  dounutImg.innerHTML = '';
  dounutImg.src = "/icon/ciciIcon.gif";
  ciciCheck.push(airData.ciciVO.ciciGrade);
  console.log(ciciCheck)
  if(ciciCheck == '좋음'){
    ciciData.style.color = "#7fd2da";
  }
  else if(ciciCheck == '보통'){
    ciciData.style.color = "#24b83c";
  }
  else if(ciciCheck == '나쁨') {
    ciciData.style.color = "#cfdb29";
  }
  else if(ciciCheck == '매우 나쁨'){
    ciciData.style.color = "#c51b1b";
  }
  console.log(airData.ciciVO.ciciGrade)
  if(airData.ciciVO.ciciGrade == '좋음'){
    dounutDiv1.style.borderColor = '#7fd2da';
    dounutDiv2.style.borderColor = "#7fd2da";
    dounutText.style.color = "#7fd2da";
  }
  else if(airData.ciciVO.ciciGrade == '보통'){
    dounutDiv1.style.borderColor = '#24b83c';
    dounutDiv2.style.borderColor = "#24b83c";
    dounutText.style.color = "#24b83c";
  }
  else if(airData.ciciVO.ciciGrade == '나쁨'){
    dounutDiv1.style.borderColor = '#f0fd32';
    dounutDiv2.style.borderColor = "#f0fd32";
    dounutText.style.color = "#f0fd32";
  }
  else{
    dounutDiv1.style.borderColor = '#c51b1b';
    dounutDiv2.style.borderColor = "#c51b1b";
    dounutText.style.color = "#c51b1b";
  }
  ciciCheck = [];
  console.log(ciciCheck)
}
