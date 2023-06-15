import classlist from "./classlist.js";

// Group = [1 -> 4] group 1 to group 4
// tr = [1 -> 5]
// td = [1 -> 2]
// function vt(group, tr, td) {
//   document.querySelectorAll('.group')[group - 1].querySelectorAll('tr')[tr - 1].querySelectorAll('td')[td - 1].style.background = 'red';
// }

//print list
const n = 4
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 5; j++) {
    for (let z = 0; z < 2; z++) {
      document.querySelectorAll('.group')[i].querySelectorAll('tr')[j].querySelectorAll('td')[z].innerHTML = classlist[(i * 10) + j + (z + j)];
    }
  }
}

var count = 0;
var gr = 0, tr = 0, td = 0;
var antiGr = [2, 2, 3, 3, 3];
var antiTr = [0, 1, 0, 0, 1];
var antiTd = [0, 0, 0, 1, 1];
const randbtn = document.querySelector('.random button');

randbtn.onclick = () => {
  document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'rgb(53, 53, 53)';
  document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'white';
  randbtn.disabled = true;

  count++;
  var delay = 0;

  const runtime = setInterval(() => {
    if (delay == 50) {
      randbtn.disabled = false;
      clearInterval(runtime);
      return true;
    }

    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'rgb(53, 53, 53)';
    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'white';

    do {
      gr = Math.floor(Math.random() * 4);
      tr = Math.floor(Math.random() * 5);
      td = Math.floor(Math.random() * 2);
    } while (tr == 0 && gr == 0 && td == 0);

    if (delay == 49) {
      do {
        let cond = true;
        for (let i = 0; i < antiGr.length; i++) {
          if (gr == antiGr[i] && tr == antiTr[i] && td == antiTd[i]) {
            cond = false;
            break;
          }
        }
        if (!cond) {
          gr = Math.floor(Math.random() * 4);
          tr = Math.floor(Math.random() * 5);
          td = Math.floor(Math.random() * 2);
          continue;
        } else {
          break;
        }

      } while (true);

      name(3, 3, 1, 3);
      name(2, 0, 1, 4);
      name(3, 3, 1, 5);
      name(2, 0, 1, 4);
    }

    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.background = 'white';
    document.querySelectorAll('.group')[gr].querySelectorAll('tr')[tr].querySelectorAll('td')[td].style.color = 'black';
    // document.querySelector('.random .text p').innerHTML = classlist[(gr * 10) + tr + (td + tr)];
    document.querySelector('h1').innerHTML = classlist[(gr * 10) + tr + (td + tr)];

    delay++;
  }, 50);
}

function name(a, b, c, d) {
  if (count == d) {
    gr = a;
    tr = b;
    td = c;
  }
}


// Information student

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 5; j++) {
//     for (let z = 0; z < 2; z++) {
//       document.querySelectorAll('.group')[i].querySelectorAll('tr')[j].querySelectorAll('td')[z].onmouseover = () => { InformationStudendsIn(i, j, z) };
//       document.querySelectorAll('.group')[i].querySelectorAll('tr')[j].querySelectorAll('td')[z].onmouseout = () => { InformationStudendsOut(i, j, z) };
//     }
//   }
// }

// function InformationStudendsIn(a, b, c) {
//   console.clear();
//   console.log(classlist[(a * 10) + b + (c + b)] != '' ? classlist[(a * 10) + b + (c + b)] : 'Ghế trống');
//   console.log(`Tổ: ${a + 1}`);
//   console.log(`Bàn: ${b + 1}`);
//   console.log(`Ghế: ${c == 0 ? 'Trái' : 'Phải'}`);
// }

// function InformationStudendsOut(a, b, c) {
//   console.clear();
// }