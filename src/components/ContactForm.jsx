import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/emailService';
import Toast from './Toast';

const initialFormState = {
  name: '',
  contact: '',
  email: '',
  medicine: '',
  message: '',
  prescription: ''
};

function ContactForm({ title, note, formType = 'contact', submitLabel = 'Send message' }) {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');
  const [toast, setToast] = useState({ visible: false, type: 'success', message: '' });

  const isInquiry = formType === 'inquiry';
  const isSending = status === 'sending';
  const buttonLabel = isSending ? 'Sending...' : submitLabel;

  const closeToast = () => setToast((current) => ({ ...current, visible: false }));

  const validateEmail = (value) =>
    value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validateForm = () => {
    const nextErrors = {};
    if (!formState.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formState.contact.trim()) nextErrors.contact = 'Phone number is required.';
    if (formState.email && !validateEmail(formState.email)) nextErrors.email = 'Enter a valid email address.';
    if (isInquiry && !formState.medicine.trim()) nextErrors.medicine = 'Medicine name is required for inquiries.';
    if (!formState.message.trim()) nextErrors.message = 'Please add a message or inquiry details.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      setFeedback('Please correct the highlighted fields and try again.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    const templateParams = {
      form_type: formType,
      subject: isInquiry ? `Medicine inquiry from ${formState.name}` : `Contact request from ${formState.name}`,
      name: formState.name,
      phone: formState.contact,
      email: formState.email || 'Not provided',
      medicine: isInquiry ? formState.medicine : 'N/A',
      message: formState.message,
      prescription_notes: formState.prescription || 'N/A'
    };

    try {
      await sendEmail(templateParams);
      const successMessage = isInquiry
        ? 'Inquiry sent successfully! Our pharmacy team will reply soon. For urgent requests, please reach us on WhatsApp.'
        : 'Message delivered! We will contact you shortly by phone or WhatsApp.';
      setStatus('success');
      setFeedback(successMessage);
      setToast({ visible: true, type: 'success', message: successMessage });
      setFormState(initialFormState);
      setErrors({});
    } catch (error) {
      console.error(error);
      const errorMessage = 'Unable to send your message right now. Please try again later or use WhatsApp for urgent assistance.';
      setStatus('error');
      setFeedback(errorMessage);
      setToast({ visible: true, type: 'error', message: errorMessage });
    }
  };

  const fieldClass = (name) =>
    `input-field ${errors[name] ? 'input-error' : 'focus:ring-primary-100'}`;

  return (
    <>
      <div className="glass-card rounded-[2rem] border border-slate-200/80 p-7 shadow-soft">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 leading-7">{note}</p>

        {(status === 'success' || status === 'error') && (
          <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 rounded-[1.75rem] border px-5 py-4 text-sm ${
            status === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-rose-200 bg-rose-50 text-rose-800'
          }`}
        >
          {feedback}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Full name
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={fieldClass('name')}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              required
            />
            {errors.name && <span className="text-rose-600 text-sm">{errors.name}</span>}
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Phone / WhatsApp
            <input
              type="tel"
              name="contact"
              value={formState.contact}
              onChange={handleChange}
              className={fieldClass('contact')}
              placeholder="+91 99812 20777"
              aria-invalid={!!errors.contact}
              required
            />
            {errors.contact && <span className="text-rose-600 text-sm">{errors.contact}</span>}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Email (optional)
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={fieldClass('email')}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="text-rose-600 text-sm">{errors.email}</span>}
          </label>
          {isInquiry && (
            <label className="space-y-2 text-sm font-medium text-slate-800">
              Medicine name
              <input
                type="text"
                name="medicine"
                value={formState.medicine}
                onChange={handleChange}
                className={fieldClass('medicine')}
                placeholder="Name of medicine or supplement"
                aria-invalid={!!errors.medicine}
                required
              />
              {errors.medicine && <span className="text-rose-600 text-sm">{errors.medicine}</span>}
            </label>
          )}
        </div>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          Message
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            className={`${fieldClass('message')} min-h-[160px] resize-none`}
            placeholder="Share your medicine request, symptoms, or inquiry details."
            aria-invalid={!!errors.message}
            required
          />
          {errors.message && <span className="text-rose-600 text-sm">{errors.message}</span>}
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          Prescription notes (optional)
          <textarea
            name="prescription"
            value={formState.prescription}
            onChange={handleChange}
            className="input-field min-h-[140px] resize-none"
            placeholder="Dosage, prescription notes, or any special instructions."
          />
        </label>

        <button
          type="submit"
          disabled={isSending}
          className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? (
            <span className="inline-flex items-center gap-3">
              <span className="loading-dot inline-block h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
              {buttonLabel}
            </span>
          ) : (
            buttonLabel
          )}
        </button>
      </form>
    </div>

      <Toast
        visible={toast.visible}
        type={toast.type}
        message={toast.message}
        onClose={closeToast}
      />
    </>
  );
}

export default ContactForm;
