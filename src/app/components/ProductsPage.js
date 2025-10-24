'use client';
import React, { useEffect,useState } from 'react';
import { Download, FileCheck, Zap, Shield, Heart } from 'lucide-react';

export default function ProductsPage() {

  const [donationSuccess, setDonationSuccess] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Razorpay handler
const handleDonate = async () => {
  try {
    const res = await fetch("/api/create-order", {
      method: "POST",
    });
    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Velvora Technologies",
      description: "Buy a Cigarette for Hardworking Developer - ₹18 Donation",
      order_id: order.id,
      handler: function (response) {
        alert("✅ Thank you for donating! Payment ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#6366f1" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error(error);
    alert("⚠️ Something went wrong. Please try again.");
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2"></div>
            <a 
              href="https://velvoratech.com" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Back to Main Site
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
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
                    <h2 className="text-3xl font-bold text-white mb-2">
                      File Metadata Changer
                    </h2>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                A powerful desktop application that allows you to modify file metadata with ease. 
                Change creation dates and modification dates quickly and efficiently.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Fast & Efficient</h3>
                    <p className="text-slate-400 text-sm">Process files in seconds</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Safe & Secure</h3>
                    <p className="text-slate-400 text-sm">No data sent online</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Easy to Use</h3>
                    <p className="text-slate-400 text-sm">Intuitive interface</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 relative">
  {/* Download Button */}
  <button
    onClick={() =>
      window.open(
        "https://github.com/gautham1024/velvora-exe-releases/releases/download/v1.0.0/File.Metadata.Changer.Setup.exe",
        "_blank"
      )
    }
    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group cursor-pointer"
  >
    <Download className="w-6 h-6 group-hover:animate-bounce" />
    <span>Download for Windows</span>
  </button>

  {/* Donate Button */}
  <button
    onClick={handleDonate}
    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/25 group cursor-pointer relative overflow-hidden"
  >
    <Heart className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    <span>Buy a Cigarette for Hardworking Developer</span>

    {/* Success message */}
    {donationSuccess && (
      <span className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-80 text-white font-semibold text-sm rounded-xl animate-pulse">
        ✅ Thank you for donating!
      </span>
    )}
  </button>
</div>


            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
