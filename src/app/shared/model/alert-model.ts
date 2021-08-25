import { Offer } from "./offer-model";

export interface Alert {
  offer?: Offer;
  title?: string;
  description?: string;
  btnSucess?: string;
  btnCancel?: string;
  colorBtnSucess?: string;
  colorBtnCancel?: string;
  hasBtnClose?: boolean;
  hasForm?: boolean;
}
