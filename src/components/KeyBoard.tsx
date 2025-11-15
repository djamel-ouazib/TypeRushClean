import RowKeyBoard from "./RowKeyBoard"
import { KeyBoardTouchLine1, KeyBoardTouchLine2, KeyBoardTouchLine3, KeyBoardTouchLine4, KeyBoardTouchLine5 } from "../utils/KeyBoardTouchLine"



function KeyBoard() {
  return (
    <div className="flex flex-col  items-center gap-2">
      <RowKeyBoard KeyBoardTouchLine={KeyBoardTouchLine1}  />
      <RowKeyBoard KeyBoardTouchLine={KeyBoardTouchLine2}  />
      <RowKeyBoard KeyBoardTouchLine={KeyBoardTouchLine3} />
      <RowKeyBoard KeyBoardTouchLine={KeyBoardTouchLine4} />
      <RowKeyBoard KeyBoardTouchLine={KeyBoardTouchLine5} />
    </div>
  )
}

export default KeyBoard
