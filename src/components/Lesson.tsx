import React from 'react';
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson: React.FC<LessonProps> = ({ availableAt, slug, title, type }) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })


  return (
    <a href="#">
      <span className="event-lesson-title">
        {availableDateFormatted}
      </span>

      <div className="event-lesson-card">
        <header className="event-lesson-card-header">
          {
            isLessonAvailable ?
              (
                <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                  <CheckCircle size={20} />
                  Conteúdo liberado
                </span>
              )
              :
              (
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                  <Lock size={20} />
                  Em breve
                </span>
              )
          }
          <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
            {
              type === 'live' ?
                "AO VIVO"
                : "AULA PRÁTICA"
            }


          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </a>
  );
}

export default Lesson;