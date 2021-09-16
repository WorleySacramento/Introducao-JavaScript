// Velocidade maxima de 70
// a cada 5Km acima do limite vc ganha 1 ponto
//math.floor()
//caso pontos seja maior que 12 ->< 'Carteira Suspensa'
verificarVelocidade(120);


function verificarVelocidade(velocidade) {
    const velocidademaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidademaxima)
        console.log('Ok');
    else{
       const pontos = Math.floor (((velocidade - velocidademaxima) / kmPorPonto));
       if(pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log('Pontos',pontos);
    }
}