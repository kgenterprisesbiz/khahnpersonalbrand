"use client";

import { useEffect, useState } from "react";

type InquiryKind = "speaking" | "media" | "consults";

export function ContactSelector() {
  const [kind, setKind] = useState<InquiryKind>("speaking");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("type");
    if (requested === "media" || requested === "consults" || requested === "speaking") setKind(requested);
  }, []);

  function chooseKind(next: InquiryKind) {
    setKind(next);
    setStep(1);
  }

  const isSpeaking = kind === "speaking";

  return (
    <div className="contact-panel">
      <div className="path-tabs" role="tablist" aria-label="Inquiry type">
        <button className={kind === "speaking" ? "active" : ""} onClick={() => chooseKind("speaking")} type="button">Speaking</button>
        <button className={kind === "media" ? "active" : ""} onClick={() => chooseKind("media")} type="button">Podcasts & Media</button>
        <button className={kind === "consults" ? "active" : ""} onClick={() => chooseKind("consults")} type="button">Patient Care</button>
      </div>

      {kind === "consults" ? (
        <div className="consult-path">
          <p className="eyebrow">Patient care</p>
          <h2>Your health deserves a real conversation.</h2>
          <p>For consultations and patient care, connect directly with Austin Regenerative Therapy.</p>
          <a className="button" href="https://austinregen.com/schedule-an-appointment/">Schedule an Appointment</a>
        </div>
      ) : (
        <div className="booking-shell">
          <aside className="booking-aside">
            <p className="eyebrow">Start the conversation</p>
            <h2>{isSpeaking ? "Tell us about your event." : "Tell us about your show or story."}</h2>
            <p>{isSpeaking ? "Share the essentials now, and Dr. Nguyen’s team can respond with the right information—not another round of twenty questions." : "A few useful details will help Dr. Nguyen’s team quickly evaluate the opportunity and prepare the right response."}</p>
            <div className="booking-expectations">
              <span>What happens next</span>
              <ol>
                <li>Her team reviews the opportunity.</li>
                <li>You’ll receive a response within two business days.</li>
                <li>If it’s a fit, you’ll discuss timing and next steps.</li>
              </ol>
            </div>
          </aside>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="booking-progress" aria-label={`Step ${step} of 2`}>
              <div className={step === 1 ? "current" : "complete"}><span>01</span><b>About you</b></div>
              <i />
              <div className={step === 2 ? "current" : ""}><span>02</span><b>{isSpeaking ? "The event" : "The opportunity"}</b></div>
            </div>

            {step === 1 ? (
              <fieldset className="booking-step">
                <legend>Your contact details</legend>
                <p>First, let us know who we’ll be speaking with.</p>
                <div className="form-grid">
                  <label>Full name <span>*</span><input required name="name" autoComplete="name" /></label>
                  <label>Work email <span>*</span><input required type="email" name="email" autoComplete="email" /></label>
                  <label>Phone number<input type="tel" name="phone" autoComplete="tel" /></label>
                  <label>Organization<input name="organization" autoComplete="organization" /></label>
                  <label className="wide">Website, show, or event URL<input type="url" name="website" placeholder="https://" /></label>
                </div>
                <div className="booking-actions end">
                  <button className="button" type="button" onClick={() => setStep(2)}>Continue <span aria-hidden="true">↗</span></button>
                </div>
              </fieldset>
            ) : (
              <fieldset className="booking-step">
                <legend>{isSpeaking ? "The event details" : "The opportunity details"}</legend>
                <p>Estimates are perfectly fine. We just need enough context to understand the opportunity.</p>
                <div className="form-grid">
                  <label>Opportunity type <span>*</span>
                    <select required name="opportunityType" defaultValue="">
                      <option value="" disabled>Select one</option>
                      {isSpeaking ? <><option>Keynote</option><option>Panel</option><option>Workshop</option><option>Conference session</option><option>Corporate event</option><option>Other speaking opportunity</option></> : <><option>Podcast interview</option><option>Television or video interview</option><option>Print or digital feature</option><option>Expert commentary</option><option>Brand or editorial collaboration</option></>}
                    </select>
                  </label>
                  <label>Preferred date<input type="date" name="date" /></label>
                  <label>Format <span>*</span>
                    <select required name="format" defaultValue=""><option value="" disabled>Select one</option><option>In person</option><option>Virtual</option><option>Hybrid</option><option>Not decided yet</option></select>
                  </label>
                  <label>{isSpeaking ? "Event location" : "Recording location"}<input name="location" placeholder="City, state, or virtual" /></label>
                  <label>{isSpeaking ? "Estimated audience size" : "Estimated audience or reach"}
                    <select name="audienceSize" defaultValue=""><option value="">Select a range</option><option>Under 100</option><option>100–499</option><option>500–999</option><option>1,000–4,999</option><option>5,000+</option><option>Not sure</option></select>
                  </label>
                  <label>{isSpeaking ? "Speaker budget" : "Appearance budget"}
                    <select name="budget" defaultValue=""><option value="">Select a range</option><option>Under $5,000</option><option>$5,000–$9,999</option><option>$10,000–$19,999</option><option>$20,000+</option><option>Not yet determined</option></select>
                  </label>
                  <label className="wide">Topic or focus<input name="topic" placeholder="What would you like Dr. Nguyen to discuss?" /></label>
                  <label className="wide">Tell us about the opportunity <span>*</span><textarea required name="message" rows={5} placeholder="Share the audience, goals, timing, and anything else that would be helpful." /></label>
                </div>
                <div className="booking-actions">
                  <button className="booking-back" type="button" onClick={() => setStep(1)}>← Back</button>
                  <button className="button" type="submit" disabled title="GoHighLevel connection pending">Submit Inquiry <span aria-hidden="true">↗</span></button>
                </div>
                <p className="integration-note">Online submission will be enabled when the GoHighLevel connection is added.</p>
              </fieldset>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
