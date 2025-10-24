'use client';
import React, { useState } from 'react';
import { Download, FileCheck, Heart } from 'lucide-react';
import PrivacyPolicy from '../PrivacyPolicy';

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!window.Razorpay) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }

    setLoading(true);

    try {
      // Create order on server
      const res = await fetch("/api/create-order", { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const order = await res.json();

      if (order.error) {
        throw new Error(order.error);
      }

      // Order created, now open Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Velvora Technologies",
        description: "Buy a Cigarette for our Hardworking Developer",
        order_id: order.id,
        handler: function (response) {
          setLoading(false);
          alert("✅ Thank you for donating! Payment ID: " + response.razorpay_payment_id);
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        theme: { color: "#6366f1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false); // Hide loading once modal opens
      
    } catch (error) {
      console.error("Donation error:", error);
      setLoading(false);
      alert("⚠️ Unable to process donation. Please try again or contact support.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-white text-xl font-semibold">
              Processing your donation...
            </div>
            <div className="text-slate-300 text-sm">
              This may take a few seconds
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between">
          <div></div>
          <a href="https://velvoratech.com" className="text-slate-300 hover:text-white transition-colors">
            Back to Main Site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
        </div>

        {/* Product Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">File Metadata Changer</h2>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A powerful desktop application that allows you to modify file metadata with ease.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/gautham1024/velvora-exe-releases/releases/download/v1.0.0/File.Metadata.Changer.Setup.exe",
                      "_blank"
                    )
                  }
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Download for Windows</span>
                </button>

                <button
                  onClick={handleDonate}
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Heart className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span>Buy a Hardworking Dev a Smoke ₹18</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 text-center">
  <p className="text-slate-400 text-sm italic">
    ⚠️ Note: The UI of this page is different from our main site. The designer of the main page is busy with personal matters, and I didn’t want to disturb him 😉
  </p>
  <br></br><br></br>
  <PrivacyPolicy />
</div>

    </div>
  );
}