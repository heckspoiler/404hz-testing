import { useState } from 'react';
import styles from './ConfidenceScore.module.css';
import { PlayerTrack } from '@/types/track';
import confidenceScoreColor from '@/lib/helpers/confidenceScore';

type ConfidenceProps = {
  track: PlayerTrack;
};

export function ConfidenceScoreColor({ track }: ConfidenceProps) {
  const [isConfidenceHovered, setIsConfidenceHovered] = useState(false);
  const score = track.recorded_at?.confidence_score ?? track.confidence_score;
  const { color, message } = confidenceScoreColor(score);

  return (
    <div className={styles.confidenceContainer}>
      <button
        className={styles.confidenceScore}
        onMouseEnter={() => setIsConfidenceHovered(true)}
        onMouseLeave={() => setIsConfidenceHovered(false)}
        type="button"
      >
        <div
          className={styles.confidenceColor}
          style={{ backgroundColor: color }}
        />
        <ConfidenceText message={message} isHovered={isConfidenceHovered} />
      </button>
    </div>
  );
}

type ConfidenceTextProps = {
  message: string;
  isHovered: boolean;
};

function ConfidenceText({ message }: ConfidenceTextProps) {
  return (
    <div className={styles.confidenceText}>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
