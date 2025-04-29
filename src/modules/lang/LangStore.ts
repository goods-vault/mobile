import { LangType } from "./LangType.ts";
import { makeAutoObservable } from "mobx";
import LangService from "./LangService.ts";

export class LangStore {
  lang = LangType.RU;
  langs = [
    { label: "Русский язык", lang: LangType.RU },
    { label: "English language", lang: LangType.EN },
  ];

  private langService: LangService;

  constructor() {
    makeAutoObservable(this);

    this.langService = new LangService();
  }

  initLang = async () => {
    await this.changeLang(await this.langService.getLang());
  };

  get currentLangObj() {
    return this.langs.find((item) => item.lang === this.lang) || this.langs[0];
  }

  changeLang = (lang: LangType) => {
    this.setLang(lang);

    return this.langService
      .changeLang(lang)
      .then(() => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  };

  private setLang = (lang: LangType) => {
    this.lang = lang;
  };
}
