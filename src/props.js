export const props = {
  title: [String],
  width: [Number, String],
  height: [Number, String],
  ariaLabel: [String],
  class: [String],
  path: {
    type: String,
    required: false,
  },
  size: {
    type: [String, Number],
    default: 24,
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  xmlns: {
    type: String,
    default: 'http://www.w3.org/2000/svg',
  },
  role: {
    type: String,
    default: 'img',
  },
  spin: {
    type: Boolean,
    default: false,
  },
}
