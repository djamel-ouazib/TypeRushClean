import Touch from "./Touch"

interface RowKeyBoardProps {
  KeyBoardTouchLine: {
    [key: number]: [string, string, number, number]
  }
   
}

function RowKeyBoard({ KeyBoardTouchLine }: RowKeyBoardProps) {
  return (
    <div className="flex gap-1">
      {Object.entries(KeyBoardTouchLine).map(([key, [char, color, w, h]]) => (
        <Touch key={key} char={char} color={color} width={w} height={h} />
      ))}
    </div>
  )
}

export default RowKeyBoard
