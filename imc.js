document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imc-form');
    const resultDiv = document.getElementById('result');
    const imcValue = document.getElementById('imc-value');
    const imcCategory = document.getElementById('imc-category');
    const resultImage = document.getElementById('result-image');

    const images = {
        feminino: {
            abaixo: 'magra.jpg',
            normal: 'mulher_normal.jpg',
            acima: 'obesidade.jpg'
        },
        masculino: {
            abaixo: 'seco.jpg',
            normal: 'padrao.jpg',
            acima: 'obeso.jpg'
        }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateIMC();
    });

    form.addEventListener('reset', function() {
        resultDiv.classList.add('d-none');
    });

    function calculateIMC() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
        const gender = document.getElementById('gender').value;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !gender) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const imc = weight / (height * height);
        let category = '';
        let imageCategory = '';

        if (imc < 18.5) {
            category = 'Abaixo do peso';
            imageCategory = 'abaixo';
        } else if (imc < 25) {
            category = 'Peso normal';
            imageCategory = 'normal';
        } else {
            category = 'Acima do peso';
            imageCategory = 'acima';
        }

        imcValue.textContent = imc.toFixed(2);
        imcCategory.textContent = category;
        resultImage.src = images[gender][imageCategory];
        resultImage.alt = `Imagem de ${category} para ${gender === 'masculino' ? 'homem' : 'mulher'}`;
        resultDiv.classList.remove('d-none');
    }
});

