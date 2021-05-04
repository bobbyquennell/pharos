import { html, LitElement, property } from 'lit-element';
import type { TemplateResult, CSSResultArray } from 'lit-element';
import { tabPanelStyles } from './pharos-tab-panel.css';
import { designTokens } from '../../styles/variables.css';
import { customElement } from '../../utils/decorators';
import focusable from '../../utils/focusable';

/**
 * Pharos tab panel component.
 *
 * @element pharos-tab-panel
 *
 * @slot - Contains the content of the panel.
 *
 */
@customElement('pharos-tab-panel')
export class PharosTabPanel extends LitElement {
  /**
   * Indicates if the panel is selected.
   * @attr selected
   */
  @property({ type: Boolean, reflect: true })
  public selected = false;

  public static get styles(): CSSResultArray {
    return [designTokens, tabPanelStyles];
  }

  protected firstUpdated(): void {
    this.setAttribute('role', 'tabpanel');
    this.addEventListener('keydown', this._handleKeydown);
    const focusableElements = this.querySelector(focusable);
    if (!focusableElements) {
      this.setAttribute('tabindex', '0');
    }
  }

  private _handleKeydown(event: KeyboardEvent): void {
    event.stopPropagation();
  }

  protected render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pharos-tab-panel': PharosTabPanel;
  }
}
