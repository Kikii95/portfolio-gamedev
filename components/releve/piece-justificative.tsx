'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import type { Piece } from '@/lib/releve/types';

interface PieceProps {
  piece: Piece;
  libelleLecture: string;
  penche?: number;
  prioritaire?: boolean;
}

const LARGEURS = '(min-width: 60em) 45vw, 92vw';

export function PieceJustificative({ piece, libelleLecture, penche = -1, prioritaire = false }: PieceProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [lecture, setLecture] = useState(false);
  const classe = piece.format === 'mobile' ? 'piece agrafe mobile' : 'piece agrafe';

  function lancer() {
    setLecture(true);
    video.current?.play();
  }

  return (
    <figure className={classe} style={{ ['--penche' as string]: `${penche}deg` }}>
      <div className="ecran">
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
      <figcaption>
        <span>{piece.legende}</span>
        {piece.duree && <span>{piece.duree}</span>}
      </figcaption>
    </figure>
  );
}
