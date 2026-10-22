'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import type { Piece } from '@/lib/releve/types';

interface PieceProps {
  piece: Piece;
  libelleLecture: string;
  prioritaire?: boolean;
}

const LARGEURS = '(min-width: 60em) 45vw, 92vw';

export function PieceJustificative({ piece, libelleLecture, prioritaire = false }: PieceProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [lecture, setLecture] = useState(false);
  const classe = piece.format === 'mobile' ? 'ecran-controle mobile' : 'ecran-controle';

  function lancer() {
    setLecture(true);
    video.current?.play();
  }

  return (
    <figure className={classe}>
      <figcaption className="barre">
        <span>{piece.legende}</span>
        {piece.duree && <span className="duree">{piece.duree}</span>}
      </figcaption>
      <div className="vue">
        {piece.type === 'video' ? (
          <>
            <video
              ref={video}
              poster={piece.poster}
              controls={lecture}
              muted
              playsInline
              preload="none"
              aria-label={piece.legende}
            >
              <source src={piece.src.replace(/\.mp4$/, '.webm')} type="video/webm" />
              <source src={piece.src} type="video/mp4" />
            </video>
            {!lecture && (
              <button type="button" className="lecture" onClick={lancer} aria-label={`${libelleLecture} : ${piece.legende}`}>
                <span />
              </button>
            )}
          </>
        ) : (
          <Image src={piece.src} alt={piece.legende} fill sizes={LARGEURS} priority={prioritaire} />
        )}
      </div>
    </figure>
  );
}
