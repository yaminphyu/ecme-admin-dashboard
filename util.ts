import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";

export const faEyeIcon = (isShow: boolean): IconDefinition => {
  return isShow ? faEye : faEyeSlash;
};