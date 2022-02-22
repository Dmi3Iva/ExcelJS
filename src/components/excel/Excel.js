import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map((Component)=>{
      const $el = $.create('div', Component.className);
      const c = new Component($el);
      $el.html(c.toHtml());
      $root.append($el);
      return c;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((m)=>m.init());
  }
}
