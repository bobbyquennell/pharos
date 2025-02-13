import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import './pharos-breadcrumb';
import './pharos-breadcrumb-item';
import type { PharosBreadcrumbItem } from './pharos-breadcrumb-item';

describe('pharos-breadcrumb-item', () => {
  let component: PharosBreadcrumbItem;
  const longText = 'Mouse Over to See the Full Text of Long Content Which Are Truncated';
  const shortText = 'A short text';

  beforeEach(async () => {
    component = await fixture(
      html`<pharos-breadcrumb-item href="#first">${longText}</pharos-breadcrumb-item>`
    );
  });

  it('is accessible', async () => {
    const parentNode = document.createElement('pharos-breadcrumb');

    component = await fixture(
      html`<pharos-breadcrumb-item href="#first">${longText}</pharos-breadcrumb-item>`,
      {
        parentNode,
      }
    );
    await expect(component).to.be.accessible();
  });

  it('truncates long text', async () => {
    await expect(component.shadowRoot?.querySelector('pharos-link')?.innerText).to.equal(
      `${longText.substr(0, 40)}...`
    );
  });

  it('contains tooltip with truncated text', async () => {
    const tooltip = component.renderRoot.querySelector('pharos-tooltip');
    await expect(tooltip).to.exist;
  });

  it('is a link if "href" attribute is passed', async () => {
    const anchor = component.renderRoot.querySelector('pharos-link');
    await expect(anchor).to.exist;
  });

  it('is a plan text span if no "href" attribute is passed', async () => {
    component = await fixture(html`<pharos-breadcrumb-item>${longText}</pharos-breadcrumb-item>`);

    const anchor = component.renderRoot.querySelector('pharos-link');
    await expect(anchor).to.not.exist;
    const span = component.renderRoot.querySelector('span');
    await expect(span).to.exist;
  });

  it('does not truncate short text', async () => {
    const component: PharosBreadcrumbItem = await fixture(
      html`<pharos-breadcrumb-item href="#first">${shortText}</pharos-breadcrumb-item>`
    );
    await expect(component.renderRoot.querySelector('pharos-link')?.innerText).to.equal(shortText);
  });
});
