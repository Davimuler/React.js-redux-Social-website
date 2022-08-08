import {
  UpdateMessageTextCreator,
  SendNewMessageCreator,
} from "../../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {
    mes: state.MessagePage.mes,
    u: state.MessagePage.u,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: () => {
      dispatch(UpdateMessageTextCreator());
    },

    sendNewMessage: (text) => {
      dispatch(SendNewMessageCreator(text));
    },
  };
};
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    AuthRedirect
)(Dialogs)

