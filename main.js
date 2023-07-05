"use strict"

const member = document.querySelector("#member-y");
const nonMember = document.querySelector("#member-n");

const phone = document.querySelector("#phone")

/**휴대폰 유효성 검사 */
// phone.addEventListener('input', (event) => {
//     const inputValue = event.target.value;
//     const onlyNumbers = /^[0-9]+$/;

//     if (!onlyNumbers.test(inputValue)) {
//         event.target.value = inputValue.replace(/\D/g, '');
//     }
// });

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
