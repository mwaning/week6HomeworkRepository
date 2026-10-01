const hp = document.getElementById("hpInput");
const buttonPress = document.getElementById("hpBtn");
const attackText = document.getElementById("attackText");

const hpBorder = document.getElementById("hpBorder");
const hpVisual = document.getElementById("hpVisual");
const hpText = document.getElementById("currentHP");

const btnContainer = document.querySelector(".attackBtn");
const addBtn = document.createElement("button");

buttonPress.addEventListener("click", () => {
  addAttack();
});

function addAttack() {
  let maxHP = Number(hp.value);
  let tempHP = Number(hp.value);

  addBtn.style.opacity = "100%";
  attackText.innerHTML = "";

  hpBorder.style.backgroundColor = "#000";
  hpVisual.style.backgroundColor = "#008000";
  hpVisual.style.width = "100%";
  hpText.innerHTML = `${tempHP}/${maxHP}`;

  addBtn.innerText = "Attack";
  btnContainer.appendChild(addBtn);

  addBtn.addEventListener("click", damageCalc);

  function damageCalc() {
    attackText.innerHTML = "";
    let hitChance = Math.floor(Math.random() * 10 + 1);
    if (hitChance === 1) {
      attackText.innerHTML = "Sorry, you missed!";
    } else if (hitChance === 10) {
      attackText.innerHTML = "A critical hit!";
      let regHitPercent = (Math.floor(Math.random() * 20) + 1) * 2;
      regHit = (Number(regHitPercent) / 100) * maxHP;
      tempHP = Math.ceil(tempHP - regHit);

      let hpVisualPercent = tempHP / maxHP;
      hpVisual.style.width = `${Number(hpVisualPercent) * 100}%`;

      hpText.innerHTML = `${tempHP}/${maxHP}`;
      if (tempHP <= 0) {
        tempHP = 0;
        attackText.innerHTML = "You defeated the opponent!";
        hpText.innerHTML = `${tempHP}/${maxHP}`;
        addBtn.removeEventListener("click", damageCalc);
        addBtn.style.opacity = "50%";
        let hpVisualPercent = tempHP / maxHP;
        hpVisual.style.width = `${Number(hpVisualPercent) * 100}%`;
      }
    } else {
      let regHitPercent = Math.floor(Math.random() * 20) + 1;
      regHit = (Number(regHitPercent) / 100) * maxHP;
      tempHP = Math.ceil(tempHP - regHit);

      let hpVisualPercent = tempHP / maxHP;
      hpVisual.style.width = `${Number(hpVisualPercent) * 100}%`;

      hpText.innerHTML = `${tempHP}/${maxHP}`;
      if (tempHP <= 0) {
        tempHP = 0;
        attackText.innerHTML = "You defeated the opponent!";
        hpText.innerHTML = `${tempHP}/${maxHP}`;
        addBtn.removeEventListener("click", damageCalc);
        addBtn.style.opacity = "50%";
        let hpVisualPercent = tempHP / maxHP;
        hpVisual.style.width = `${Number(hpVisualPercent) * 100}%`;
      }
    }

    if (tempHP < 0.5 * maxHP && tempHP >= 0.25 * maxHP) {
      hpVisual.style.backgroundColor = "#FFFF00";
    } else if (tempHP < 0.25 * maxHP) {
      hpVisual.style.backgroundColor = "#FF0000";
    } else {
      hpVisual.style.backgroundColor = "#008000";
    }
  }
}
