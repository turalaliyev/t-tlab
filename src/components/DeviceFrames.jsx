/* Device frames for showcasing project screenshots */

export const BrowserFrame = ({ domain, image, alt, className = '', imgClassName = '' }) => (
  <div className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50 ${className}`}>
    <div className="flex items-center gap-3 border-b border-line bg-ink-850 px-4 py-3">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="mx-auto flex h-6 max-w-[60%] flex-1 items-center justify-center rounded-md bg-white/[0.04] px-3 font-mono text-[11px] text-fg-subtle">
        <span className="truncate">{domain}</span>
      </div>
      <div className="w-[42px]" aria-hidden="true" />
    </div>
    <div className="aspect-[16/10] overflow-hidden bg-ink-850">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover object-top ${imgClassName}`}
      />
    </div>
  </div>
);

/* Phone bezel around a full-screen app screenshot (status bar included in the image) */
export const PhoneFrame = ({ image, alt, className = '' }) => (
  <div className={`rounded-[1.6rem] border border-white/15 bg-ink-950 p-[3%] shadow-2xl shadow-black/60 ${className}`}>
    <div className="aspect-[9/20] overflow-hidden rounded-[1.25rem] bg-ink-850">
      <img src={image} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
    </div>
  </div>
);

/* Two phones on a lit panel, sized to match BrowserFrame's 16:10 footprint.
   The phones run off the bottom edge so the top of each screen reads large. */
export const AppShowcase = ({ front, back, alt, glow = 'rgba(45,160,170,0.35)', className = '', imgClassName = '' }) => (
  <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50 ${className}`}>
    <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
    <div
      className="absolute left-1/2 top-1/2 h-[90%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{ background: `radial-gradient(closest-side, ${glow}, transparent)` }}
      aria-hidden="true"
    />
    <div className={`absolute inset-0 ${imgClassName}`}>
      {back && (
        <PhoneFrame
          image={back}
          alt=""
          className="absolute left-[19%] top-[16%] w-[27%] -rotate-6"
        />
      )}
      <PhoneFrame image={front} alt={alt} className="absolute left-[45%] top-[7%] w-[32%] rotate-2" />
    </div>
  </div>
);

/* Picks the right frame for a project: phones for apps, a browser window for sites */
export const ProjectVisual = ({ project, alt, className = '', imgClassName = '' }) =>
  project.platform === 'mobile' ? (
    <AppShowcase
      front={project.image}
      back={project.imageAlt}
      alt={alt}
      className={className}
      imgClassName={imgClassName}
    />
  ) : (
    <BrowserFrame
      domain={project.domain}
      image={project.image}
      alt={alt}
      className={className}
      imgClassName={imgClassName}
    />
  );
