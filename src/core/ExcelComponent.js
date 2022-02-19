import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  /**
   * Return component template
   * @return {string}
   */
  toHtml() {
    return '';
  }

  toXml() {
    return 'xnl';
  }
}
