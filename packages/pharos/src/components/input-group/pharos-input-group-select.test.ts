import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import './pharos-input-group-select';
import type { PharosInputGroupSelect } from './pharos-input-group-select';

describe('pharos-input-group', () => {
  let component: PharosInputGroupSelect;

  beforeEach(async () => {
    component = await fixture(html`
      <pharos-input-group-select hide-label>
        <span slot="label">Search</span>
        <option value="">Search all content</option>
        <option value="book">Search within this book</option>
      </pharos-input-group-select>
    `);
  });

  it('is accessible', async () => {
    await expect(component).to.be.accessible();
  });
});
