import '../../App.css';//importando o css
import '../../animation/animation.css'//importando a animação

import React from 'react';

export default function Card_info() {
  
    return (

        <>
          <div className="card text-white corPrimaria mb-3 animation">
          <div className="card-header">Informações sobre o sistema</div>
          <div className="card-body">

           <h6 className="card-title"> Cor Azul = link para seguir
                            <br /> Cor Vermelha = inativo   
                            <br /> Cor Verde = online | Ativo 
                            <br /> Cor Amarela = apresenta instabilidade  
                            <br /> Cor Preta = Não significa nada | texto  
           </h6>
           
          </div>
          </div>
        </>
    )
}