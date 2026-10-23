// Plays the home-page animations, a port of the design's frame logic. Each animation advances one frame
// every 120 ms, only while it is on screen, not hovered or focused, the tab is visible and the visitor
// hasn't asked for reduced motion. Without JavaScript the markup already shows the final frame.
import {
  HERO, PAPER, FIRST, HERO_TOTAL, S2, S3, S3_TOTAL, MILK, MILK_PTS, Q, ASK, ASK_TOTAL, LANGR, FX, LEN, END, eur,
} from '../data/anims';

type Kind = keyof typeof LEN;
const cl = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const HL = 'rgba(30,106,76,.16)';

const all = <T extends Element = HTMLElement>(root: Element, sel: string) => [...root.querySelectorAll<T & HTMLElement>(sel)];
const one = (root: Element, sel: string) => root.querySelector<HTMLElement>(sel)!;
const show = (el: HTMLElement, on: boolean, off = 'translateY(10px) scale(.98)') => {
  el.style.opacity = on ? '1' : '0';
  el.style.transform = on ? 'none' : off;
};

const frames: Record<Kind, (root: HTMLElement, t: number) => void> = {
  hero(root, t) {
    all(root, '[data-paper]').forEach((el, k) => (el.style.background = t >= 6 + 3 * k ? HL : 'transparent'));
    all(root, '[data-row]').forEach((el, i) => {
      show(el, t >= 9 + 3 * FIRST[i], 'translateX(-28px) scale(.97)');
      const d = el.querySelector<HTMLElement>('[data-disc]');
      if (d) d.style.opacity = t >= 9 + 3 * (FIRST[i] + 1) ? '1' : '0';
    });
    const sweep = one(root, '[data-sweep]');
    sweep.style.top = cl((t - 6) / (3 * PAPER.length), 0, 1) * 90 + 6 + '%';
    sweep.style.opacity = t >= 5 && t < 6 + 3 * PAPER.length + 1 ? '1' : '0';
    const pillAt = 6 + 3 * PAPER.length + 4;
    const pill = one(root, '[data-pill]');
    pill.style.opacity = t >= pillAt ? '1' : '0';
    pill.style.transform = `scale(${t >= pillAt ? 1 : 0.7})`;
    one(root, '[data-total]').textContent = eur(HERO_TOTAL * cl((t - pillAt + 2) / 6, 0, 1));
  },
  steps(root, t) {
    const active = t < 16 ? 0 : t < 38 ? 1 : 2;
    all(root, '[data-step]').forEach((el, i) => el.classList.toggle('is-active', i === active));
    const s1 = t >= 8;
    const edge = one(root, '[data-edge]');
    edge.classList.toggle('is-locked', s1);
    one(root, '[data-hint]').textContent = s1 ? 'Captured' : 'Fit the whole receipt in frame';
    all(root, '[data-s2paper]').forEach((el, k) => (el.style.background = t >= 16 + 3 * k ? 'rgba(30,106,76,.18)' : 'transparent'));
    all(root, '[data-s2row]').forEach((el, k) => show(el, t >= 18 + 3 * k, 'translateY(-14px)'));
    one(root, '[data-s2pill]').style.opacity = t >= 34 ? '1' : '0';
    one(root, '[data-s3total]').textContent = eur(S3_TOTAL * cl((t - 40) / 12, 0, 1));
    all(root, '[data-s3bar]').forEach((el, i) => (el.style.width = t >= 40 ? (S3[i][1] / S3[0][1]) * 100 + '%' : '0%'));
  },
  item(root, t) {
    const shown = MILK.map((_, i) => t >= 2 + 2 * i);
    const alert = t >= 30;
    one(root, '[data-line]').setAttribute('points', MILK_PTS.filter((_, i) => shown[i]).map((p) => p.join(',')).join(' '));
    all(root, '[data-dot]').forEach((el, i) => {
      el.style.opacity = shown[i] ? '1' : '0';
      el.style.transform = `scale(${shown[i] ? 1 : 0.3})`;
      if (i === MILK.length - 1) el.classList.toggle('is-alert', alert);
    });
    one(root, '[data-alertline]').style.background = alert ? 'rgba(255,190,60,.4)' : 'transparent';
    show(one(root, '[data-alert]'), alert, 'translateY(8px)');
  },
  ask(root, t) {
    one(root, '[data-typed]').textContent = Q.slice(0, cl(t - 3, 0, Q.length));
    one(root, '[data-cursor]').style.opacity = t < 38 && t % 6 < 4 ? '1' : '0';
    show(one(root, '[data-answer]'), t >= 38, 'translateY(10px)');
    one(root, '[data-amount]').textContent = eur(ASK_TOTAL * cl((t - 38) / 6, 0, 1));
    all(root, '[data-askrow]').forEach((el, i) => (el.style.opacity = t >= 44 + 2 * i ? '1' : '0'));
  },
  lang(root, t) {
    one(root, '[data-typed]').textContent = 'milk'.slice(0, cl(t - 2, 0, 4));
    one(root, '[data-cursor]').style.opacity = t < 8 && t % 6 < 4 ? '1' : '0';
    all(root, '[data-langrow]').forEach((el, i) => {
      show(el, t >= 8 + 2 * i);
      el.querySelector<HTMLElement>('[data-tr]')!.style.opacity = t >= 16 + 3 * i ? '1' : '0';
    });
    all(root, '[data-fx]').forEach((el, i) => {
      const done = t >= 32 + 3 * i;
      one(el, '[data-main]').textContent = done ? FX[i][4] : FX[i][3];
      one(el, '[data-sub]').textContent = done ? `${FX[i][3]} · converted at the day's rate` : 'Reading…';
    });
  },
};

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

for (const root of document.querySelectorAll<HTMLElement>('[data-anim]')) {
  const kind = root.dataset.anim as Kind;
  const draw = frames[kind];
  if (!draw) continue;
  let t = 0, visible = false, paused = false;
  draw(root, reduced.matches ? END[kind] : 0);
  root.dataset.ready = '';
  new IntersectionObserver((es) => (visible = es[es.length - 1].isIntersecting), { threshold: 0.3 }).observe(root);
  // Pause while someone is reading or interacting with it.
  root.addEventListener('pointerenter', () => (paused = true));
  root.addEventListener('pointerleave', () => (paused = false));
  root.addEventListener('focusin', () => (paused = true));
  root.addEventListener('focusout', () => (paused = false));
  reduced.addEventListener('change', () => draw(root, reduced.matches ? END[kind] : t));
  setInterval(() => {
    if (!visible || paused || document.hidden || reduced.matches) return;
    t = (t + 1) % LEN[kind];
    draw(root, t);
  }, 120);
}
