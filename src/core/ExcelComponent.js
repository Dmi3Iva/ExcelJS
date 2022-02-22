import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  static className = 'excel_formula';

  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  /**
   * Return component template
   * @return {string}
   */
  toHtml() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
