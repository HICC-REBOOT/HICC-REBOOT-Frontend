import OptionType from '@components/common/dropdown/OptionType';
import { Board } from '@components/type/CommonType';

interface CurrentBoardContext {
  currentBoard: OptionType;
  boardList: Board[];
}

export default CurrentBoardContext;
