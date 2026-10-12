/* @ds-bundle: {"format":3,"namespace":"Ds00SDAHCDesignSystem_7fc8fd","components":[],"sourceHashes":{"ui_kits/marketing-site/AssetCard.jsx":"5ceddfb34e59","ui_kits/marketing-site/ContactBand.jsx":"3e0c4dcc3a56","ui_kits/marketing-site/Footer.jsx":"fcb87b40f59a","ui_kits/marketing-site/Header.jsx":"a40c3b7f05c7","ui_kits/marketing-site/Hero.jsx":"8245323602d8","ui_kits/marketing-site/ListingsBand.jsx":"19724792e139","ui_kits/marketing-site/ProcessBand.jsx":"b9ca4bed420e","ui_kits/marketing-site/QuoteBand.jsx":"c76474cb3d4a","ui_kits/marketing-site/StatsBand.jsx":"a2691092a468"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds00SDAHCDesignSystem_7fc8fd = window.Ds00SDAHCDesignSystem_7fc8fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing-site/AssetCard.jsx
try { (() => {
/* AssetCard — single listing card */
function AssetCard({
  tone = 0,
  location,
  title,
  badge,
  yieldPct,
  status,
  featured
}) {
  const tones = ['linear-gradient(135deg, #1B57A6 0%, #06336B 100%)', 'linear-gradient(135deg, #06336B 0%, #00162B 100%)', 'linear-gradient(160deg, #2EA3F2 0%, #0476D9 60%, #06336B 100%)'];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow .22s var(--ease-out), transform .22s var(--ease-out)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: tones[tone % tones.length],
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.16), transparent 60%)'
    }
  }), featured && /*#__PURE__*/React.createElement("span", {
    className: "badge badge--solid",
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, "Featured"), badge && !featured && /*#__PURE__*/React.createElement("span", {
    className: "badge badge--dark",
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, badge), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bed-double",
    style: {
      position: 'absolute',
      bottom: 18,
      right: 20,
      width: 28,
      height: 28,
      color: 'rgba(255,255,255,0.55)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11.5,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 13,
      height: 13
    }
  }), location), /*#__PURE__*/React.createElement("h3", {
    className: "asset-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 14,
      borderTop: '1px solid var(--divider)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--fg-body)',
      fontWeight: 500
    }
  }, status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '-0.01em',
      color: 'var(--brand-primary)'
    }
  }, yieldPct, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      marginLeft: 1
    }
  }, "%")))));
}
window.AssetCard = AssetCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/AssetCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactBand.jsx
try { (() => {
/* ContactBand — inline form */
function ContactBand() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    range: '$2.5M – $5M'
  });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  const field = (placeholder, key, type = 'text') => /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: form[key],
    onChange: e => setForm({
      ...form,
      [key]: e.target.value
    }),
    style: {
      width: '100%',
      padding: '16px 18px',
      border: '1px solid var(--border-strong)',
      borderRadius: 12,
      font: 'inherit',
      fontSize: 15,
      color: 'var(--fg)',
      background: '#fff',
      boxSizing: 'border-box'
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: 'clamp(80px, 10vw, 128px) clamp(20px, 4vw, 64px)',
      background: 'var(--bg-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '5fr 6fr',
      gap: 'clamp(40px, 6vw, 96px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 22px'
    }
  }, "Speak with a specialist."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 28
    }
  }, "Tell us a little about your mandate and we'll send a curated shortlist within two business days. No mailing list, no automated funnel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: 14,
      color: 'var(--fg-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand-primary)'
    }
  }), "+61 2 9000 0000"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand-primary)'
    }
  }), "advisory@sdahomechoices.com.au"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand-primary)'
    }
  }), "Level 12, 80 Collins Street, Melbourne"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: '#fff',
      borderRadius: 24,
      padding: 'clamp(28px, 4vw, 44px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'rgba(31,138,91,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 28,
      height: 28,
      color: 'var(--success)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px'
    }
  }, "Thank you, ", form.name.split(' ')[0] || 'we\u2019ve received it', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-muted)',
      margin: 0
    }
  }, "A specialist will be in touch within two business days.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--fg)',
      marginBottom: 8,
      letterSpacing: '.02em'
    }
  }, "Full name"), field('Your name', 'name')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--fg)',
      marginBottom: 8
    }
  }, "Email"), field('you@firm.com', 'email', 'email')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--fg)',
      marginBottom: 8
    }
  }, "Investment range"), /*#__PURE__*/React.createElement("select", {
    value: form.range,
    onChange: e => setForm({
      ...form,
      range: e.target.value
    }),
    style: {
      width: '100%',
      padding: '16px 18px',
      border: '1px solid var(--border-strong)',
      borderRadius: 12,
      font: 'inherit',
      fontSize: 15,
      color: 'var(--fg)',
      background: '#fff',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("option", null, "$1M \u2013 $2.5M"), /*#__PURE__*/React.createElement("option", null, "$2.5M \u2013 $5M"), /*#__PURE__*/React.createElement("option", null, "$5M \u2013 $10M"), /*#__PURE__*/React.createElement("option", null, "$10M+"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn",
    style: {
      alignSelf: 'flex-start',
      marginTop: 8
    }
  }, "Request a shortlist")))));
}
window.ContactBand = ContactBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
/* Footer — gradient closing panel */
function Footer() {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#2EA3F2',
      marginBottom: 18
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: '#B9CBE0',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, i))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'linear-gradient(180deg, #06336B 0%, #00162B 100%)',
      color: '#fff',
      padding: 'clamp(80px, 9vw, 120px) clamp(20px, 4vw, 64px) 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'clamp(32px, 4vw, 72px)',
      paddingBottom: 64,
      borderBottom: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoDark || "../../assets/logo-on-dark.svg",
    alt: "SDA Home Choices",
    style: {
      height: 40,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#B9CBE0',
      fontSize: 14,
      lineHeight: 1.65,
      maxWidth: 360,
      margin: 0
    }
  }, "A specialist advisory and brokerage business for completed Specialist Disability Accommodation and disability housing assets.")), col('Listings', ['Browse register', 'High Physical Support', 'Improved Liveability', 'Robust', 'Off-market']), col('Firm', ['Approach', 'Specialists', 'Investors', 'Press', 'Contact']), col('Resources', ['NDIS guide', 'Yield methodology', 'Insights', 'Annual letter'])), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 36,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: '#7a93b3'
    }
  }, "\xA9 2026 SDA Home Choices Pty Ltd \xB7 ABN 00 000 000 000 \xB7 AFSL 000000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#B9CBE0'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#B9CBE0'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#B9CBE0'
    }
  }, "Complaints")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
/* Header — sticky frosted nav with primary CTA */
const {
  useEffect,
  useState
} = React;
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = (href, label, active) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      color: active ? 'var(--brand-primary)' : 'var(--fg-body)',
      fontSize: 14,
      fontWeight: 500,
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: active ? '1.5px solid var(--brand-primary)' : '1.5px solid transparent',
      transition: 'color .15s, border-color .15s'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,1)',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background .2s, border-color .2s, backdrop-filter .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '20px clamp(20px,4vw,64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoLight || "../../assets/logo.svg",
    alt: "SDA Home Choices",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, link('#listings', 'Listings', true), link('#approach', 'Approach', false), link('#investors', 'Investors', false), link('#insights', 'Insights', false), link('#about', 'About', false)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 14,
      height: 14
    }
  }), "+61 2 9000 0000"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn--sm"
  }, "Speak with a specialist"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
/* Hero — editorial asymmetrical split */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: 'clamp(56px, 9vw, 120px) clamp(20px, 4vw, 64px) clamp(64px, 8vw, 112px)',
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'clamp(32px, 6vw, 96px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 28,
      height: 1.5,
      background: 'var(--brand-primary)',
      verticalAlign: 'middle',
      marginRight: 12,
      marginBottom: 4
    }
  }), "A boutique brokerage"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(44px, 5.4vw, 76px)',
      lineHeight: 1.05,
      margin: '0 0 28px'
    }
  }, "Completed SDA assets,", /*#__PURE__*/React.createElement("br", null), "ready to ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--brand-primary)',
      fontStyle: 'normal'
    }
  }, "settle"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 560,
      marginBottom: 40
    }
  }, "We advise investors and family offices on Specialist Disability Accommodation \u2014 fully tenanted, NDIS-classified, modelled conservatively. No off-the-plan risk."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#listings",
    className: "btn"
  }, "Browse completed assets"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn--ghost"
  }, /*#__PURE__*/React.createElement("span", null, "Speak with a specialist"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      gap: 32,
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand-primary)'
    }
  }), "NDIS-certified inventory"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand-primary)'
    }
  }), "Independent due diligence"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 28,
      background: 'linear-gradient(160deg, #1B57A6 0%, #06336B 65%, #00162B 100%)',
      boxShadow: 'var(--shadow-xl)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 24,
      right: 24,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#B9CBE0',
      marginBottom: 6
    }
  }, "Featured \xB7 Brisbane QLD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2,
      letterSpacing: '-0.005em'
    }
  }, "3-bed High Physical Support villa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -28,
      bottom: 56,
      background: '#fff',
      borderRadius: 20,
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, "Target yield"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 38,
      letterSpacing: '-0.02em',
      color: 'var(--brand-primary)',
      lineHeight: 1.05,
      marginTop: 6
    }
  }, "12.3", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginTop: 2
    }
  }, "Net, fully tenanted"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ListingsBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ListingsBand — featured listings */
function ListingsBand() {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'High Physical Support', 'Improved Liveability', 'Robust'];
  const listings = [{
    location: 'Brisbane · QLD',
    title: '3-bed High Physical Support villa',
    badge: 'HPS',
    yieldPct: '12.3',
    status: 'Tenanted · Aug 2024',
    tone: 0,
    featured: true,
    type: 'High Physical Support'
  }, {
    location: 'Geelong · VIC',
    title: 'Boutique 4-dwelling estate',
    badge: 'Improved Liveability',
    yieldPct: '10.8',
    status: 'Settling Q1 2026',
    tone: 1,
    type: 'Improved Liveability'
  }, {
    location: 'Newcastle · NSW',
    title: '2-bed Robust adjacent duplex',
    badge: 'Robust',
    yieldPct: '11.6',
    status: 'Tenanted · Mar 2025',
    tone: 2,
    type: 'Robust'
  }, {
    location: 'Adelaide · SA',
    title: 'Single-occupant HPS apartment',
    badge: 'HPS',
    yieldPct: '12.9',
    status: 'Tenanted · Jun 2024',
    tone: 0,
    type: 'High Physical Support'
  }, {
    location: 'Perth · WA',
    title: '3-bed Improved Liveability home',
    badge: 'Improved Liveability',
    yieldPct: '10.4',
    status: 'Tenanted · Jan 2025',
    tone: 1,
    type: 'Improved Liveability'
  }, {
    location: 'Hobart · TAS',
    title: 'Coastal HPS villa with OOA suite',
    badge: 'HPS',
    yieldPct: '11.9',
    status: 'Settling Q2 2026',
    tone: 2,
    type: 'High Physical Support'
  }];
  const visible = filter === 'All' ? listings : listings.filter(l => l.type === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "listings",
    style: {
      padding: 'clamp(80px, 10vw, 128px) clamp(20px, 4vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Current inventory"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Completed assets, audited and tenanted.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      padding: '10px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.01em',
      border: '1px solid ' + (filter === f ? 'var(--brand-primary)' : 'var(--border-strong)'),
      background: filter === f ? 'var(--brand-primary)' : '#fff',
      color: filter === f ? '#fff' : 'var(--fg-body)',
      borderRadius: 100,
      cursor: 'pointer',
      transition: 'all .15s'
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, visible.map((l, i) => /*#__PURE__*/React.createElement(AssetCard, _extends({
    key: l.title
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn--ghost"
  }, /*#__PURE__*/React.createElement("span", null, "View full register"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })))));
}
window.ListingsBand = ListingsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ListingsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProcessBand.jsx
try { (() => {
/* ProcessBand — three-step approach on dark navy band */
function ProcessBand() {
  const steps = [{
    num: '01',
    title: 'Sourcing',
    body: 'We work directly with developers, SDA providers and owner-investors to identify completed dwellings before they reach open market.',
    icon: 'search'
  }, {
    num: '02',
    title: 'Due diligence',
    body: 'Independent NDIS classification review, tenant stability assessment, and conservative yield modelling on every asset.',
    icon: 'shield-check'
  }, {
    num: '03',
    title: 'Settlement',
    body: 'We coordinate legal, finance, and SDA provider transition — you receive a tenanted, cash-flowing asset.',
    icon: 'key-round'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    style: {
      background: 'var(--brand-dark)',
      padding: 'clamp(80px, 10vw, 128px) clamp(20px, 4vw, 64px)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -200,
      right: -180,
      width: 520,
      height: 520,
      background: 'radial-gradient(circle, rgba(46,163,242,0.18) 0%, transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#2EA3F2',
      marginBottom: 16
    }
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: 0
    }
  }, "A boutique brokerage approach."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      color: '#B9CBE0',
      marginTop: 22
    }
  }, "Three deliberate stages, no scale-game churn. Each engagement is led personally by a senior specialist from sourcing through settlement.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(24px, 4vw, 56px)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.num,
    style: {
      borderTop: '1px solid rgba(255,255,255,0.18)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: '#2EA3F2',
      letterSpacing: '0.06em'
    }
  }, s.num), /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 22,
      height: 22,
      color: '#2EA3F2',
      strokeWidth: 1.5
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      margin: '0 0 16px',
      fontSize: 28
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#B9CBE0',
      margin: 0,
      fontSize: 15,
      lineHeight: 1.65
    }
  }, s.body))))));
}
window.ProcessBand = ProcessBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProcessBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuoteBand.jsx
try { (() => {
/* QuoteBand — editorial pull-quote */
function QuoteBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(80px, 10vw, 128px) clamp(20px, 4vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--brand-primary)',
      fontSize: 96,
      lineHeight: 0.6,
      marginBottom: 8
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(28px, 3.4vw, 44px)',
      lineHeight: 1.3,
      color: 'var(--fg)',
      letterSpacing: '-0.005em',
      textWrap: 'balance'
    }
  }, "SDA Home Choices brought us a fully-tenanted asset, audited end to end, with a yield that has held through two NDIS pricing reviews. The opposite of an off-the-plan promise."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1B57A6, #06336B)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.02em'
    }
  }, "JM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--fg)'
    }
  }, "James Murchison"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, "Director, Murchison Family Office")))));
}
window.QuoteBand = QuoteBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuoteBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/StatsBand.jsx
try { (() => {
/* StatsBand — three-up confidence stats on light tint band */
function StatsBand() {
  const stats = [{
    value: '$184M',
    label: 'In completed SDA assets advised on',
    meta: 'Since 2019'
  }, {
    value: '237',
    label: 'Dwellings settled across QLD, VIC & NSW',
    meta: 'Fully tenanted'
  }, {
    value: '11.4%',
    label: 'Average net yield, modelled conservatively',
    meta: 'FY24 weighted avg.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-tint)',
      padding: 'clamp(64px, 9vw, 112px) clamp(20px, 4vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(32px, 6vw, 80px)'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1.5px solid var(--brand-primary)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(48px, 5vw, 72px)',
      lineHeight: 1,
      color: 'var(--fg)',
      letterSpacing: '-0.01em'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--fg-body)',
      marginTop: 18,
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      marginTop: 14
    }
  }, s.meta)))));
}
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/StatsBand.jsx", error: String((e && e.message) || e) }); }

})();
