// Sélection des éléments
const operand1 = document.querySelector('#calc1 .operand');
const operand2 = document.querySelector('#calc2 .operand');
const resultElt = document.querySelector('#result');
const equalsBtn = document.querySelector('#equals');
const operatorBtns = document.querySelectorAll('.op-btn');

let currentField = operand1;
let selectedOperator = '+';

// Gestion du thème
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Sélection de l'opérateur
operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        selectedOperator = btn.dataset.op;
        operatorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Fonction de calcul
function calculate() {
    const op1 = parseFloat(operand1.value) || 0;
    const op2 = parseFloat(operand2.value) || 0;
    let result;

    switch (selectedOperator) {
        case '+': result = op1 + op2; break;
        case '-': result = op1 - op2; break;
        case '*': result = op1 * op2; break;
        case '/': result = op2 !== 0 ? op1 / op2 : 'Erreur : division par 0'; break;
        default: result = op1 + op2;
    }

    resultElt.classList.remove('show');
    resultElt.textContent = result;
    setTimeout(() => resultElt.classList.add('show'), 10);
}

// Clic sur "="
equalsBtn.addEventListener('click', calculate);

// Claviers numériques
['#calc1', '#calc2'].forEach(calcId => {
    const container = document.querySelector(calcId);
    const input = container.querySelector('.operand');

    container.addEventListener('click', () => {
        currentField = input;
    });

    container.querySelectorAll('.key').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.key;
            if (!key) return;

            if (key === 'C') {
                input.value = '0';
                if (resultElt) resultElt.textContent = '0';
                return;
            }

            if (key === 'Del') {
                input.value = input.value.length > 1 ? input.value.slice(0, -1) : '0';
                return;
            }

            if (key === '.' && input.value.includes('.')) return; // Évite plusieurs points

            if (input.value === '0') {
                input.value = key;
            } else {
                input.value += key;
            }
        });
    });
});

// Sauvegarde locale
document.getElementById('save-btn').addEventListener('click', () => {
    const state = {
        op1: operand1.value,
        op2: operand2.value,
        operator: selectedOperator
    };
    localStorage.setItem('calculator-state', JSON.stringify(state));
    alert('État sauvegardé avec succès !');
});

// Restauration locale
document.getElementById('restore-btn').addEventListener('click', () => {
    const saved = localStorage.getItem('calculator-state');
    if (saved) {
        const state = JSON.parse(saved);
        operand1.value = state.op1 || '0';
        operand2.value = state.op2 || '0';
        selectedOperator = state.operator || '+';

        // Rétablir le bouton actif
        operatorBtns.forEach(btn => {
            if (btn.dataset.op === selectedOperator) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        calculate();
        alert('État restauré avec succès !');
    } else {
        alert('Aucune sauvegarde trouvée.');
    }
});
