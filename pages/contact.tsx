import { useEffect, useState, type FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Curve from "../components/Curve/Curve";
import Ready from "../components/Ready";
import styles from "../styles/contact-page.module.css";

export default function ContactPage() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    if (!successOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSuccessOpen(false);
        setSubmissionState("idle");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [successOpen]);

  const closeSuccessModal = () => {
    setSuccessOpen(false);
    setSubmissionState("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionError("Email setup is missing. Check the EmailJS values in .env.local and restart the site.");
      setSubmissionState("error");
      return;
    }

    setSubmissionState("sending");
    setSubmissionError("");

    try {
      const values = new FormData(formElement);
      const fromName = String(values.get("from_name") ?? "");
      const companyName = String(values.get("company_name") ?? "");
      const projectGoal = String(values.get("project_goal") ?? "");
      const targetDate = String(values.get("target_date") ?? "");
      const budgetRange = String(values.get("budget_range") ?? "");
      const replyTo = String(values.get("reply_to") ?? "");
      const additionalDetails = String(values.get("additional_details") ?? "");
      const message = [
        `Company: ${companyName}`,
        `Project goal: ${projectGoal}`,
        `Target date: ${targetDate}`,
        `Budget range: ${budgetRange}`,
        `Additional details: ${additionalDetails || "—"}`,
      ].join("\n");

      await emailjs.send(serviceId, templateId, {
        title: "Project inquiry",
        from_name: fromName,
        company_name: companyName,
        project_goal: projectGoal,
        target_date: targetDate,
        budget_range: budgetRange,
        reply_to: replyTo,
        additional_details: additionalDetails,
        name: fromName,
        email: replyTo,
        message,
        time: new Date().toLocaleString(),
      }, { publicKey });

      setSubmissionState("success");
      setSuccessOpen(true);
      setSubmissionError("");
      formElement.reset();
      setPrivacyAccepted(false);
      setTargetDate("");
    } catch (error) {
      const errorObject = typeof error === "object" && error !== null ? error : null;
      const details = errorObject && "text" in errorObject && typeof errorObject.text === "string"
        ? errorObject.text
        : errorObject && "message" in errorObject && typeof errorObject.message === "string"
          ? errorObject.message
          : typeof error === "string"
            ? error
            : "Unknown EmailJS error";
      const status = errorObject && "status" in errorObject && (typeof errorObject.status === "number" || typeof errorObject.status === "string")
        ? ` (${errorObject.status})`
        : "";
      setSubmissionError(`${details}${status}`);
      setSubmissionState("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact us | metaruleX</title>
        <meta name="description" content="Tell metaruleX about your next presentation project." />
      </Head>
      <Curve backgroundColor="#f1f1f1">
        <main className={styles.page}>
          <section className={styles.hero}>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>
                <span className={styles.titleImage} aria-hidden="true">
                  <Image src="/contact-start.jpg" alt="" fill priority sizes="(max-width: 640px) 24vw, 174px" />
                </span>
                <span>Let’s start</span>
              </span>
              <span className={styles.titleLine}>A project together</span>
            </h1>

            <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
              <p className={styles.formIntro}>Fill the form below:</p>

              <div className={styles.formGrid}>
                <label className={`${styles.sentence} ${styles.half}`}>
                  <span>Hi! My name is</span>
                  <input name="from_name" autoComplete="name" placeholder="Enter your name*" aria-label="Your name" required />
                </label>

                <label className={`${styles.sentence} ${styles.half}`}>
                  <span>and I work with</span>
                  <input name="company_name" autoComplete="organization" placeholder="Company name type here*" aria-label="Company name" required />
                </label>

                <label className={`${styles.sentence} ${styles.full}`}>
                  <span>I’m looking for a partner to help me with</span>
                  <input name="project_goal" placeholder="Your goal type here*" aria-label="Project goal" required />
                </label>

                <label className={`${styles.sentence} ${styles.full}`}>
                  <span>With an idea of having that completed</span>
                  <span className={styles.dateControl}>
                    <input
                      className={`${styles.dateInput} ${targetDate ? "" : styles.dateInputEmpty}`}
                      name="target_date"
                      type="date"
                      aria-label="Date"
                      value={targetDate}
                      onChange={(event) => setTargetDate(event.target.value)}
                      required
                    />
                    {!targetDate && <span className={styles.datePlaceholder} aria-hidden="true">Date</span>}
                  </span>
                </label>

                <label className={`${styles.sentence} ${styles.full}`}>
                  <span>I am hoping to stay around a budget range of</span>
                  <select name="budget_range" aria-label="Budget range" defaultValue="">
                    <option value="">Select</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000–$10,000">$5,000–$10,000</option>
                    <option value="$10,000–$25,000">$10,000–$25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </label>

                <label className={`${styles.sentence} ${styles.emailPrefix}`}>
                  <span>You can reach me at</span>
                  <input name="reply_to" type="email" autoComplete="email" placeholder="name@example.com" aria-label="Email address" required />
                </label>
                <span className={`${styles.sentence} ${styles.ending}`}>to start the conversation.</span>

                <label className={`${styles.sentence} ${styles.optional}`}>
                  <span>Optionally, I’m sharing more:</span>
                  <textarea name="additional_details" rows={1} placeholder="Product details type here…" aria-label="Additional project details" />
                </label>
              </div>

              <div className={styles.submitRow}>
                <label className={styles.privacyLabel}>
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={privacyAccepted}
                    onChange={(event) => setPrivacyAccepted(event.target.checked)}
                    required
                  />
                  <span>I agree with the <a href="#privacy-note">Privacy Policy</a></span>
                </label>

                <button type="submit" disabled={!privacyAccepted || submissionState === "sending"} className={styles.submitButton}>
                  {submissionState === "sending" ? "Sending…" : submissionState === "success" ? "Inquiry sent" : "Send inquiry"}
                  <span aria-hidden="true">•</span>
                </button>
              </div>

              {submissionState === "error" && (
                <p aria-live="polite" className={`${styles.status} ${submissionState === "error" ? styles.error : ""}`}>
                  {`We couldn’t send your inquiry: ${submissionError || "Please try again in a moment."}`}
                </p>
              )}
              <p id="privacy-note" className={styles.srOnly}>We’ll use your details only to respond to your project inquiry.</p>
            </form>
          </section>
        </main>
        <Ready />
      </Curve>
      {successOpen && (
        <div
          className={styles.successOverlay}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSuccessModal();
          }}
        >
          <section className={styles.successModal} role="dialog" aria-modal="true" aria-labelledby="success-title">
            <p id="success-title" className={styles.successMessage}>Your message has been sent!</p>
            <button type="button" className={styles.successClose} onClick={closeSuccessModal} aria-label="Close confirmation">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 5 14 14M19 5 5 19" />
              </svg>
            </button>
            <Image className={styles.successLogo} src="/metarulex-logo.png" alt="metaruleX" width={148} height={56} />
          </section>
        </div>
      )}
    </>
  );
}
