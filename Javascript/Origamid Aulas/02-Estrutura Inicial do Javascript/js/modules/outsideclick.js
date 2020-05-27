export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, '');
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
  }

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}