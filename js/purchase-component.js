(function (app) {
  'use strict'

  app.purchaseComponent = () => {
    return `<div id="purchase-component">
            <section class="pc-main">
              <h1>Workstation licensing</h1>

              <label for="qty">Number of workstations</label>

              <div class="qty">
                <button id="minus" type="button">−</button>
                <input id="qty" type="text" value="1" min="1" max="50" disabled>
                <button id="plus" type="button">+</button>
              </div>

              <div class="price">
                <small>Total license price</small>
                <div class="amount" id="price">
                  $650
                </div>
                <div class="average" id="average">
                  $650 average / workstation
                </div>
              </div>

              <button class="buy" id="buy">
                Purchase license
              </button>
            </section>


            <section class="list">
              <h2>Volume pricing</h2>
              <div id="tiers"></div>
            </section>
          </div>`
  }

  app.purchaseComponentLogic = () => {
    const fp = APP.config.fullPrice
    const rates = [
      [1, 1, fp],
      [2, 5, fp - 100],
      [6, 10, fp - 200],
      [11, 20, fp - 300],
      [21, 50, fp - 400]
    ];

    const $ = s => document.querySelector(s);
    const money = n => `$${n.toLocaleString()}`;

    const tier = n => rates.find(([min, max]) => n >= min && n <= max);

    const total = n => Array.from({ length: n }, (_, i) => tier(i + 1)[2]).reduce((a, b) => a + b, 0);

    $('#tiers').innerHTML = rates.map((r, i) => `
        <div class="tier" data-i="${i}">
          <span>
            ${r[0]}${r[0] != r[1] ? `–${r[1]}` : ''}
            workstation${r[1] > 1 ? 's' : ''}
          </span>
          <span>${money(r[2])} / workstation</span>
        </div>
      `).join('');

    const update = () => {
      const n = Math.max(1, Math.min(50, +$('#qty').value || 1));
      $('#qty').value = n;

      const t = tier(n);
      const sum = total(n);

      $('#price').textContent = money(sum);

      $('#average').textContent = `${money(Math.round(sum / n))} average / workstation`;

      document.querySelectorAll('.tier').forEach((el, i) => el.classList.toggle('active', rates[i] === t));
    };

    $('#minus').onclick = () => {
      $('#qty').value--;
      update();
    };

    $('#plus').onclick = () => {
      $('#qty').value++;
      update();
    };

    $('#qty').oninput = update;

    $('#buy').onclick = () => {
      const n = +$('#qty').value;

      console.log(`Purchase: ${n} workstation license`);

      // Add your checkout URL/function here.
    };

    update();
  }
})(APP);