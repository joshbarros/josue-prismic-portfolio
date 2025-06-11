"use client";

import { useState } from "react";
import Button from "@/components/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('=== FORM SUBMISSION STARTED ===');
    console.log('Event prevented:', e.defaultPrevented);
    console.log('Form data:', formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

        try {
      console.log('Sending form data:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        console.error('API Error:', result);
        setStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action="#"
      className="space-y-6"
    >
      {status.type !== 'idle' && (
        <div className={`rounded-lg p-4 ${
          status.type === 'success'
            ? 'bg-green-900/20 border border-green-500/30 text-green-300'
            : status.type === 'error'
            ? 'bg-red-900/20 border border-red-500/30 text-red-300'
            : 'bg-yellow-900/20 border border-yellow-500/30 text-yellow-300'
        }`}>
          {status.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
        >
          <option value="">Select a service</option>
          <option value="website-development">Website Development</option>
          <option value="ecommerce-development">Ecommerce Development</option>
          <option value="mobile-development">Mobile Application Development</option>
          <option value="custom-solutions">Custom Solutions</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
          Project Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-plus">$50,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          required
          className="w-full rounded-lg bg-slate-700/50 border border-slate-600 px-4 py-3 text-slate-100 placeholder-slate-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        ></textarea>
      </div>

      <button
        type="button"
        disabled={status.type === 'loading'}
        onClick={async (e) => {
          e.preventDefault();
          console.log('Button clicked - directly calling handleSubmit');

          // Create a fake form event
          const fakeEvent = {
            preventDefault: () => {},
            stopPropagation: () => {},
            defaultPrevented: true
          } as React.FormEvent<HTMLFormElement>;

          await handleSubmit(fakeEvent);
        }}
        className={`w-full inline-flex justify-center items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
          status.type === 'loading'
            ? 'bg-slate-600 cursor-not-allowed text-slate-400'
            : 'bg-yellow-300 text-slate-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50'
        }`}
      >
        {status.type === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
