import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import type { TemplateResult, CSSResultArray } from 'lit';
import { dropdownMenuNavLinkStyles } from './pharos-dropdown-menu-nav-link.css';
import { customElement } from '../../utils/decorators';
import { PharosLink } from '../link/pharos-link';
import '../icon/pharos-icon';

import type { LinkTarget } from '../base/anchor-element';

export type { LinkTarget };

/**
 * Pharos dropdown menu nav link component.
 *
 * @tag pharos-dropdown-menu-nav-link
 *
 * @slot - Contains the content of the link (the default slot).
 *
 */
@customElement('pharos-dropdown-menu-nav-link')
export class PharosDropdownMenuNavLink extends PharosLink {
  /**
   * Indicates the link is active
   * @attr is-active
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-active' })
  public isActive = false;

  constructor() {
    super();
    this.flex = true;
  }

  public static override get styles(): CSSResultArray {
    return [super.styles, dropdownMenuNavLinkStyles];
  }

  protected override get appendContent(): TemplateResult | typeof nothing {
    if (this.hasAttribute('data-dropdown-menu-id')) {
      return html`<pharos-icon name="chevron-down" class="link__icon"></pharos-icon>`;
    }
    return nothing;
  }

  protected override render(): TemplateResult {
    return html`${super.render()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pharos-dropdown-menu-nav-link': PharosDropdownMenuNavLink;
  }
}
