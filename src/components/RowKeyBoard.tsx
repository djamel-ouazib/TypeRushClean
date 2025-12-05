import Touch from "./Touch";

export interface KeyBoardTouchLineType {
  [key: number]: [string, string, number, number] | any[];
}


interface RowKeyBoardProps {
  KeyBoardTouchLine: KeyBoardTouchLineType;
}

function RowKeyBoard({ KeyBoardTouchLine }: RowKeyBoardProps) {
  return (
    <div className="flex gap-1">
      {Object.entries(KeyBoardTouchLine)
        .sort((a, b) => Number(a[0]) - Number(b[0])) // ← pour garder l'ordre
        .map(([key, [char, color, width, height]]) => (
          <Touch
            key={key}
            char={char}
            color={color}
            width={width}
            height={height}
          />
        ))}
    </div>
  );
}

export default RowKeyBoard;
