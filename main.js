"use strict"

const agree = document.querySelector("#agree")

const member = document.querySelector("#member-y");
const nonMember = document.querySelector("#member-n");

const participation = document.querySelector("#participation")

const category = document.querySelector("#category")

const name = document.querySelector("#name")

const number = document.querySelector("#number")

const affiliation = document.querySelector("#affiliation")

const phone = document.querySelector("#phone")

const depositDate = document.querySelector("#deposit-date")
const depositName = document.querySelector("#deposit-name")

const email = document.querySelector("#email")

const postcode = document.querySelector("#sample6_postcode")
const address = document.querySelector("#sample6_address")
const detailAddress = document.querySelector("#sample6_detailAddress")
const extraAddress = document.querySelector("#sample6_extraAddress")

const form = document.querySelector("#form")

/**휴대폰 유효성 검사 */
phone.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const onlyNumbers = /^[0-9]+$/;

    if (!onlyNumbers.test(inputValue)) {
        event.target.value = inputValue.replace(/\D/g, '');
    }
});



member.addEventListener("click", () => {
    if (member.checked) {
        nonMember.checked = false;
    } else {
        member.checked = true;
    }
})

nonMember.addEventListener("click", () => {
    if (nonMember.checked) {
        member.checked = false;
    } else {
        nonMember.checked = true;
    }
})

form.addEventListener("submit",(event)=>{onSubmit(event)})

function onSubmit(event){
    event.preventDefault();

    if(!agree.checked){
        alert("이용약관에 동의해주세요.")
        agree.focus()
        return;
    }
    if(!member.checked && !nonMember.checked){
        alert("회원여부에 체크해주세요.")
        member.focus()
        return;
    }
    if(!participation.options[participation.selectedIndex].value){
        alert("참석 유형을 선택해주세요.")
        participation.focus()
        return;
    }
    if(!category.options[category.selectedIndex].value){
        alert("참석자 구분을 선택해주세요.")
        category.focus()
        return;
    }
    if(!name.value){
        alert("성명을 입력해주세요.")
        name.focus()
        return;
    }
    if(!affiliation.value){
        alert("소속을 입력해주세요.")
        affiliation.focus()
        return;
    }
    if(!phone.value){
        alert("연락처를 입력해주세요.")
        phone.focus()
        return;
    }
    if(!email.value){
        alert("이메일 주소를 입력해주세요.")
        email.focus();
        return;
    }
    const inputValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(inputValue)) {
            alert("이메일 형식에 맞게 입력해주세요.")
            email.focus();
           return;
        }
    if(!detailAddress.value){
        alert("상세 주소를 입력해주세요.")
        postcode.focus();
       return;
    }
    
    console.log("member", member.checked);
    console.log("participation", participation.options[participation.selectedIndex].value)
    console.log("category", category.options[category.selectedIndex].value)
    console.log("name", name.vlaue)
    console.log("number", number.value)
    console.log("affiliation", affiliation.vlaue)
    console.log("phone", phone.value)
    console.log("email", email.value)
    console.log("입금예정일", depositDate.value)
    console.log("입금자명", depositName.value)
    console.log("주소", postcode.value, address.value, detailAddress.value, extraAddress.value) 
}

email.addEventListener("input", () => {
    onClickEmail()
})


function onClickEmail() {
    const inputValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputValue)) {
        emailmsg.innerText = "이메일 형식을 확인해주세요."
        return;
    }
    if (emailRegex.test(inputValue)) {
        emailmsg.innerText = "";
        return;
    }
}