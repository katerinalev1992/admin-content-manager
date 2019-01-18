import Util from '../util/Util';

export default class Content {
  private id: string;
  image: string;
  tooltip: string;

  constructor(image: string, tooltip: string, id?: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = Util.guid();
    }
    this.image = image;
    this.tooltip = tooltip;
  }

  getId(): string {
    return this.id;
  }
}
