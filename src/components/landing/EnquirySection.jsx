import { useState } from 'react'
import { motion } from 'framer-motion'
import { ENQUIRY } from '../../constants/homeContent'
import { CONTACT } from '../../constants/site'
import { PHONE_COUNTRIES } from '../../constants/phoneCountries'
import { fadeUp, staggerContainer } from '../../motion/variants'

const initialForm = {
  name: '',
  email: '',
  countryIso: 'MY',
  phone: '',
  company: '',
  comment: '',
}

function buildMailtoBody(values) {
  const country = PHONE_COUNTRIES.find((c) => c.iso === values.countryIso) ?? PHONE_COUNTRIES[0]
  const contactLine = `${country.dial} ${values.phone}`.trim()
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Contact: ${contactLine}`,
    `Company: ${values.company}`,
    '',
    'Comment:',
    values.comment,
  ].join('\n')
}

export function EnquirySection() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function update(field) {
    return (e) => {
      const v = e.target.value
      setForm((prev) => ({ ...prev, [field]: v }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry — ${form.company}`)
    const body = encodeURIComponent(buildMailtoBody(form))
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const { eyebrow, title, lead, labels, submit, success } = ENQUIRY

  return (
    <section className="section enquiry" id="enquiry" aria-labelledby="enquiry-heading">
      <div className="section__inner">
        <motion.div
          className="section__header enquiry__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            {eyebrow}
          </motion.p>
          <motion.h2 id="enquiry-heading" className="section__title" variants={fadeUp}>
            {title}
          </motion.h2>
          <motion.p className="section__lead enquiry__lead" variants={fadeUp}>
            {lead}
          </motion.p>
        </motion.div>

        <motion.div
          className="enquiry__card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
            <div className="enquiry__grid">
              <label className="enquiry__field">
                <span className="enquiry__label">{labels.name}</span>
                <input
                  className="enquiry__input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                />
              </label>

              <label className="enquiry__field">
                <span className="enquiry__label">{labels.email}</span>
                <input
                  className="enquiry__input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </label>

              <div className="enquiry__field enquiry__field--full">
                <span className="enquiry__label" id="enquiry-contact-label">
                  {labels.contact}
                </span>
                <div className="enquiry__phone" role="group" aria-labelledby="enquiry-contact-label">
                  <label className="visually-hidden" htmlFor="enquiry-country">
                    {labels.country}
                  </label>
                  <select
                    id="enquiry-country"
                    className="enquiry__select enquiry__select--country"
                    name="country"
                    value={form.countryIso}
                    onChange={update('countryIso')}
                    aria-label={labels.country}
                  >
                    {PHONE_COUNTRIES.map((c) => (
                      <option key={c.iso} value={c.iso}>
                        {c.flag} {c.dial}
                      </option>
                    ))}
                  </select>
                  <label className="visually-hidden" htmlFor="enquiry-phone">
                    {labels.phone}
                  </label>
                  <input
                    id="enquiry-phone"
                    className="enquiry__input enquiry__input--phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel-national"
                    inputMode="tel"
                    placeholder="e.g. 12 345 6789"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                  />
                </div>
              </div>

              <label className="enquiry__field enquiry__field--full">
                <span className="enquiry__label">{labels.company}</span>
                <input
                  className="enquiry__input"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  value={form.company}
                  onChange={update('company')}
                />
              </label>

              <label className="enquiry__field enquiry__field--full">
                <span className="enquiry__label">{labels.comment}</span>
                <textarea
                  className="enquiry__textarea"
                  name="comment"
                  rows={5}
                  required
                  value={form.comment}
                  onChange={update('comment')}
                />
              </label>
            </div>

            <div className="enquiry__actions">
              <button type="submit" className="btn btn--primary btn--lg btn--block">
                {submit}
              </button>
              {submitted ? (
                <p className="enquiry__hint enquiry__hint--success" role="status">
                  {success}
                </p>
              ) : (
                <p className="enquiry__hint">
                  We will open your email app with a pre-filled message to {CONTACT.email}.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
