import { expect, afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';
import * as matchers from '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

expect.extend(matchers);

// Set up JSDOM
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
  resources: 'usable',
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Mock functions that might not be implemented in JSDOM
global.window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}));

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Reset the body before each test
beforeEach(() => {
  document.body.innerHTML = '';
});