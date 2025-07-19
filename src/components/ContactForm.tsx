import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Securely pulled from .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      title: formData.subject,
      message: formData.message,
      email: formData.email,
      reply_to: formData.email, // for older templates using reply_to
    };

    try {
      // 1. Auto-reply to user
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // 2. Notification to admin (you)
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Failed to send your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-ridge-gold/10 border border-ridge-gold/20 rounded-lg p-4">
        <p className="text-sm text-gray-700 font-medium">
          <strong>Notice:</strong> This form is for serious business inquiries only. Please ensure your message is professional and specific to your packaging needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="How can we help you?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="resize-none"
          />
        </div>

        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
