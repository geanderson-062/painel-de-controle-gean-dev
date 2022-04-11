import '../../App.css';//importando o css
import '../../animation/animation.css'//importando a animação

import React from 'react';

export default function Card_git() {
  
    return (

        <>
          <div className="card text-white corPrimaria mb-3 animation">
          <div className="card-header">Estatisticas do seu git-Hub</div>
          <div className="card-body">
          <div alight="center">
           <a href="https://github.com/geanderson-062">
            <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=geanderson-062&layout=compact&langs_count=7&theme=dracula"/>
           </a>
          </div>
          </div>
          </div>
     
        </>
    )
}