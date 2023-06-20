import AustriaImage from "shared/images/austria.png";
import RussiaImage from "shared/images/russia.png";
import UAEImage from "shared/images/uae.png";
import ItalyImage from "shared/images/italy.png";
import TurImage from "shared/images/turkish.png";
import EngImage from "shared/images/england.png";
import SwitzImage from "shared/images/switzerland.png";
import SaudiImage from "shared/images/arabia.png";

export enum TourKeys {
  RUSSIA = "Россия",
  UAE = "ОАЭ",
  ITALY = "Италия",
  AUSTRIA = "Австрия",
  SAUDI = "Саудовская Аравия",
  TUR = "Турция",
  ENGLAND = "Англия",
  SWITZ = "Швейцария",
}

export const TourValues: Record<string, string> = {
  [TourKeys.AUSTRIA]: AustriaImage,
  [TourKeys.ENGLAND]: EngImage,
  [TourKeys.ITALY]: ItalyImage,
  [TourKeys.RUSSIA]: RussiaImage,
  [TourKeys.SAUDI]: SaudiImage,
  [TourKeys.SWITZ]: SwitzImage,
  [TourKeys.TUR]: TurImage,
  [TourKeys.UAE]: UAEImage,
};
