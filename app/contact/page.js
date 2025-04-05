import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Got questions, feedback, or just want to say hi? We’d love to hear from you! ✨
        </p>
        <ul className="text-md space-y-4">
          <li><strong>Email:</strong> support@healthypaws.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Address:</strong> 123 Paw Lane, Dogtown, India</li>
          <li><strong>Instagram:</strong> @HealthyPawsAdopt</li>
        </ul>
      </div>
    </div>
  );
}
